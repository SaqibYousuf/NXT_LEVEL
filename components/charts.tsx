"use client"

export function LineChart() {
  return (
    <div className="h-[200px] w-full">
      <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
        <g>
          {/* Grid lines */}
          <line x1="0" y1="0" x2="0" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="0" x2="500" y2="0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="50" x2="500" y2="50" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="100" x2="500" y2="100" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="150" x2="500" y2="150" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="200" x2="500" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="400" y1="0" x2="400" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="500" y1="0" x2="500" y2="200" stroke="#e5e7eb" strokeWidth="1" />

          {/* Line chart */}
          <path d="M0,150 L100,120 L200,80 L300,100 L400,60 L500,40" fill="none" stroke="#2563eb" strokeWidth="3" />

          {/* Data points */}
          <circle cx="0" cy="150" r="4" fill="#2563eb" />
          <circle cx="100" cy="120" r="4" fill="#2563eb" />
          <circle cx="200" cy="80" r="4" fill="#2563eb" />
          <circle cx="300" cy="100" r="4" fill="#2563eb" />
          <circle cx="400" cy="60" r="4" fill="#2563eb" />
          <circle cx="500" cy="40" r="4" fill="#2563eb" />
        </g>
      </svg>
    </div>
  )
}

export function BarChart() {
  return (
    <div className="h-[200px] w-full">
      <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
        <g>
          {/* Grid lines */}
          <line x1="0" y1="0" x2="0" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="0" x2="500" y2="0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="50" x2="500" y2="50" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="100" x2="500" y2="100" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="150" x2="500" y2="150" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="200" x2="500" y2="200" stroke="#e5e7eb" strokeWidth="1" />

          {/* Bars */}
          <rect x="25" y="80" width="50" height="120" fill="#2563eb" />
          <rect x="125" y="40" width="50" height="160" fill="#2563eb" />
          <rect x="225" y="100" width="50" height="100" fill="#2563eb" />
          <rect x="325" y="60" width="50" height="140" fill="#2563eb" />
          <rect x="425" y="20" width="50" height="180" fill="#2563eb" />
        </g>
      </svg>
    </div>
  )
}

export function PieChart() {
  return (
    <div className="h-[200px] w-full flex items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2563eb" strokeWidth="20" strokeDasharray="75 25" />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="#4ade80"
          strokeWidth="20"
          strokeDasharray="25 75"
          strokeDashoffset="-75"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="#f59e0b"
          strokeWidth="20"
          strokeDasharray="15 85"
          strokeDashoffset="-50"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke="#ef4444"
          strokeWidth="20"
          strokeDasharray="10 90"
          strokeDashoffset="-35"
        />
      </svg>
    </div>
  )
}
