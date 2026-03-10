import { PriceHistoryEntry } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { TrendingUp, TrendingDown, Tag, Home } from 'lucide-react'

interface PriceHistoryProps {
  priceHistory: PriceHistoryEntry[]
}

const eventConfig = {
  listed: { label: 'Listed', icon: Tag, color: 'text-blue-600', bg: 'bg-blue-50' },
  sold: { label: 'Sold', icon: Home, color: 'text-green-600', bg: 'bg-green-50' },
  price_drop: { label: 'Price Drop', icon: TrendingDown, color: 'text-red-600', bg: 'bg-red-50' },
  price_increase: { label: 'Price Increase', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
}

export default function PriceHistory({ priceHistory }: PriceHistoryProps) {
  if (!priceHistory || priceHistory.length === 0) {
    return null
  }

  const maxPrice = Math.max(...priceHistory.map((e) => e.price))
  const minPrice = Math.min(...priceHistory.map((e) => e.price))
  const range = maxPrice - minPrice || 1

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Price History</h3>

      {/* Visual bar chart */}
      <div className="mb-6">
        <div className="flex items-end gap-1 h-24 bg-gray-50 rounded-lg p-3">
          {priceHistory.map((entry, i) => {
            const heightPct = ((entry.price - minPrice) / range) * 70 + 30
            return (
              <div
                key={i}
                className="flex-1 bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600 cursor-pointer relative group"
                style={{ height: `${heightPct}%` }}
                title={`${entry.date}: ${formatPrice(entry.price)}`}
              >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  {formatPrice(entry.price)}
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1 px-3">
          <span>{priceHistory[0]?.date}</span>
          <span>{priceHistory[priceHistory.length - 1]?.date}</span>
        </div>
      </div>

      {/* Table */}
      <div className="space-y-2">
        {priceHistory.map((entry, i) => {
          const config = eventConfig[entry.event]
          const Icon = config.icon
          return (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${config.bg}`}>
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${config.color}`}>{config.label}</p>
                  <p className="text-xs text-gray-400">{entry.date}</p>
                </div>
              </div>
              <p className="font-semibold text-gray-800">{formatPrice(entry.price)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
