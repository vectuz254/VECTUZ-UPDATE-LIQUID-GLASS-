import React, { useState } from 'react';
import { SectionCubeDivider } from './RubiksMotif';
import { TrendingUp, Smartphone, Zap, CheckCircle2, ShieldCheck, DollarSign } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const GrowthSection: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'sales' | 'speed' | 'bookings'>('sales');

  const metricData = {
    sales: {
      labels: ['Month 1 (Launch)', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
      data: [45000, 110000, 240000, 390000, 580000, 890000],
      label: 'Average SME Monthly M-Pesa Volume (KES)',
      color: '#00E87A',
      unit: 'KES ',
    },
    speed: {
      labels: ['Legacy Template', 'Uncompressed Images', 'Basic Hosting', 'VECTUZ V1', 'VECTUZ Optimized', 'VECTUZ Edge'],
      data: [4.8, 3.9, 2.8, 1.4, 0.9, 0.65],
      label: 'Page Load Speed on 4G Mobile (Seconds - Lower is better)',
      color: '#3A8FE8',
      unit: 's',
    },
    bookings: {
      labels: ['Manual DM Booking', 'Week 1 Live', 'Week 2 Live', 'Month 1', 'Month 2', 'Month 3'],
      data: [28, 65, 115, 195, 280, 420],
      label: 'Monthly Appointment Bookings per Salon',
      color: '#F5C842',
      unit: '',
    },
  };

  const current = metricData[activeMetric];

  const chartData = {
    labels: current.labels,
    datasets: [
      {
        fill: true,
        label: current.label,
        data: current.data,
        borderColor: current.color,
        backgroundColor: `${current.color}18`,
        borderWidth: 3,
        pointBackgroundColor: current.color,
        pointBorderColor: '#090B0E',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#141920',
        titleColor: '#F0ECE4',
        bodyColor: current.color,
        borderColor: `${current.color}40`,
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: (context: any) => {
            let val = context.parsed.y;
            if (activeMetric === 'sales') {
              return ` ${current.unit}${val.toLocaleString()}`;
            }
            return ` ${val}${current.unit}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#8E9AA8',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#8E9AA8',
          font: {
            size: 11,
          },
          callback: (value: any) => {
            if (activeMetric === 'sales') {
              return `KES ${(value / 1000)}k`;
            }
            if (activeMetric === 'speed') {
              return `${value}s`;
            }
            return value;
          },
        },
      },
    },
  };

  const stats = [
    { label: 'Avg Sales Growth', value: '+340%', sub: 'Within 90 days of launch', color: 'text-[#00E87A]' },
    { label: 'Mobile Page Speed', value: '0.8s', sub: 'Optimized for Kenyan 4G', color: 'text-[#3A8FE8]' },
    { label: 'M-Pesa STK Push Rate', value: '99.4%', sub: 'Zero-drop instant checkout', color: 'text-[#F5C842]' },
    { label: 'Rapid Turnaround', value: '5-10 Days', sub: 'From design to live domain', color: 'text-[#E84444]' },
  ];

  return (
    <section id="results" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionCubeDivider
          subtitle="Measurable SME Results"
          title="Data-Backed Growth You Can Count On"
          accent="blue"
        />

        <p className="text-center text-[#8E9AA8] max-w-2xl mx-auto -mt-2 mb-12 text-sm sm:text-base">
          Every line of code and pixel we craft is engineered to solve the #1 bottleneck for Kenyan SMEs: converting visitors into paying customers.
        </p>

        {/* 4 Big Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-glow-border-blue p-6 rounded-2xl text-center flex flex-col justify-center items-center shadow-lg"
            >
              <span className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-black ${stat.color} mb-1 tracking-tight`}>
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#F0ECE4] mb-0.5">{stat.label}</span>
              <span className="text-[11px] text-[#8E9AA8]">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Interactive Growth Chart Card */}
        <div className="glass-card glass-glow-border-green p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#00E87A]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F0ECE4]">
                  Performance Telemetry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#8E9AA8] mt-1">
                Aggregated performance metrics across 120+ active Kenyan SME deployments.
              </p>
            </div>

            {/* Metric Filter Tabs */}
            <div className="flex items-center gap-2 bg-[#090B0E] p-1.5 rounded-xl border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setActiveMetric('sales')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeMetric === 'sales'
                    ? 'bg-[#00E87A] text-black shadow-md'
                    : 'text-[#8E9AA8] hover:text-white'
                }`}
              >
                M-Pesa Revenue
              </button>
              <button
                onClick={() => setActiveMetric('bookings')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeMetric === 'bookings'
                    ? 'bg-[#F5C842] text-black shadow-md'
                    : 'text-[#8E9AA8] hover:text-white'
                }`}
              >
                Salon Bookings
              </button>
              <button
                onClick={() => setActiveMetric('speed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeMetric === 'speed'
                    ? 'bg-[#3A8FE8] text-white shadow-md'
                    : 'text-[#8E9AA8] hover:text-white'
                }`}
              >
                Load Speed (s)
              </button>
            </div>
          </div>

          {/* Chart Container */}
          <div className="h-[320px] sm:h-[380px] w-full">
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 mt-4 border-t border-white/5 text-xs text-[#8E9AA8]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00E87A]" />
              Real Nairobi SME Client Benchmark
            </span>
            <span className="font-mono text-[#00E87A]">
              Telemetry source: VECTUZ Core Analytics 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
