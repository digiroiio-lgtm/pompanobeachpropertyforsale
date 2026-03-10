'use client';

import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

interface MortgageCalculatorProps {
  homePrice: number;
  hoa?: number | null;
  taxAmount?: number;
}

export default function MortgageCalculator({ homePrice, hoa, taxAmount }: MortgageCalculatorProps) {
  const [price, setPrice] = useState(homePrice);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rate, setRate] = useState(7.25);
  const [term, setTerm] = useState<15 | 30>(30);

  const downPayment = (price * downPaymentPct) / 100;
  const loanAmount = price - downPayment;

  // Monthly P&I
  const monthlyRate = rate / 100 / 12;
  const payments = term * 12;
  const monthlyPI =
    monthlyRate === 0
      ? loanAmount / payments
      : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, payments))) /
        (Math.pow(1 + monthlyRate, payments) - 1);

  const monthlyTax = taxAmount ? taxAmount / 12 : (price * 0.012) / 12;
  const monthlyInsurance = (price * 0.005) / 12;
  const monthlyHOA = hoa ?? 0;
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyHOA;

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  useEffect(() => {
    setPrice(homePrice);
  }, [homePrice]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Calculator className="w-5 h-5 text-blue-600" />
        Mortgage Calculator
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Home Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate</label>
          <div className="relative">
            <input
              type="number"
              step="0.05"
              min="1"
              max="20"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full pl-3 pr-7 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Down Payment: {downPaymentPct}% ({fmt(downPayment)})
          </label>
          <input
            type="range"
            min={3}
            max={50}
            step={1}
            value={downPaymentPct}
            onChange={(e) => setDownPaymentPct(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>3%</span>
            <span>50%</span>
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term</label>
          <div className="flex gap-2">
            {([30, 15] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTerm(t)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  term === t
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                }`}
              >
                {t}-yr
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="bg-blue-50 rounded-xl p-4">
        <p className="text-sm text-blue-700 font-medium mb-1">Estimated Monthly Payment</p>
        <p className="text-3xl font-bold text-blue-700">{fmt(totalMonthly)}</p>
        <p className="text-xs text-blue-500 mt-1">per month</p>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between text-gray-700">
            <span>Principal & Interest</span>
            <span className="font-medium">{fmt(monthlyPI)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Property Tax (est.)</span>
            <span className="font-medium">{fmt(monthlyTax)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Homeowners Insurance (est.)</span>
            <span className="font-medium">{fmt(monthlyInsurance)}</span>
          </div>
          {monthlyHOA > 0 && (
            <div className="flex justify-between text-gray-700">
              <span>HOA Fee</span>
              <span className="font-medium">{fmt(monthlyHOA)}</span>
            </div>
          )}
          <div className="flex justify-between text-gray-600 pt-2 border-t border-blue-200">
            <span>Loan Amount</span>
            <span className="font-semibold">{fmt(loanAmount)}</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        * This is an estimate. Contact a lender for accurate rates and qualification.
      </p>
    </div>
  );
}
