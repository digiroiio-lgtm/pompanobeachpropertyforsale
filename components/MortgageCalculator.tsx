'use client'

import { useState, useEffect } from 'react'
import { formatPrice } from '@/lib/utils'
import { Calculator } from 'lucide-react'

interface MortgageCalculatorProps {
  homePrice: number
}

export default function MortgageCalculator({ homePrice }: MortgageCalculatorProps) {
  const [price, setPrice] = useState(homePrice)
  const [downPaymentPct, setDownPaymentPct] = useState(20)
  const [interestRate, setInterestRate] = useState(7.25)
  const [loanTerm, setLoanTerm] = useState(30)

  const downPaymentAmount = (price * downPaymentPct) / 100
  const loanAmount = price - downPaymentAmount
  const monthlyRate = interestRate / 100 / 12
  const numPayments = loanTerm * 12

  const monthlyPI =
    monthlyRate === 0
      ? loanAmount / numPayments
      : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)

  const monthlyTax = (price * 0.0125) / 12
  const monthlyInsurance = (price * 0.005) / 12
  const monthlyTotal = monthlyPI + monthlyTax + monthlyInsurance

  useEffect(() => {
    setPrice(homePrice)
  }, [homePrice])

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">Mortgage Calculator</h3>
      </div>

      {/* Monthly Payment Display */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-5 mb-6 text-white">
        <p className="text-blue-200 text-sm mb-1">Estimated Monthly Payment</p>
        <p className="text-4xl font-bold">{formatPrice(Math.round(monthlyTotal))}</p>
        <p className="text-blue-200 text-xs mt-1">Principal, interest, taxes & insurance</p>
      </div>

      {/* Inputs */}
      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-gray-700">Home Price</label>
            <span className="text-sm font-semibold text-blue-700">{formatPrice(price)}</span>
          </div>
          <input
            type="range"
            min={100000}
            max={5000000}
            step={10000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>$100k</span>
            <span>$5M</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-gray-700">Down Payment</label>
            <span className="text-sm font-semibold text-blue-700">
              {downPaymentPct}% ({formatPrice(Math.round(downPaymentAmount))})
            </span>
          </div>
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

        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-gray-700">Interest Rate</label>
            <span className="text-sm font-semibold text-blue-700">{interestRate.toFixed(2)}%</span>
          </div>
          <input
            type="range"
            min={3}
            max={12}
            step={0.25}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>3%</span>
            <span>12%</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1.5">Loan Term</label>
          <div className="flex gap-2">
            {[10, 15, 20, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  loanTerm === term
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {term}yr
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="mt-6 pt-5 border-t border-gray-100 space-y-2">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Monthly Breakdown</h4>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Principal & Interest</span>
          <span className="font-medium text-gray-800">{formatPrice(Math.round(monthlyPI))}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Property Tax (est.)</span>
          <span className="font-medium text-gray-800">{formatPrice(Math.round(monthlyTax))}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Homeowners Insurance (est.)</span>
          <span className="font-medium text-gray-800">{formatPrice(Math.round(monthlyInsurance))}</span>
        </div>
        <div className="flex justify-between text-sm pt-2 border-t border-gray-100">
          <span className="font-semibold text-gray-700">Total Monthly</span>
          <span className="font-bold text-blue-700 text-base">{formatPrice(Math.round(monthlyTotal))}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Loan Amount</span>
          <span className="font-medium text-gray-800">{formatPrice(Math.round(loanAmount))}</span>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        * Estimated payment only. Actual rate and payment may vary. Contact a lender for exact figures.
      </p>
    </div>
  )
}
