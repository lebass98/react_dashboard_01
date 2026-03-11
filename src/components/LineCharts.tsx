import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { ChevronRight, Copy, Code, Eye, EyeOff, Check } from 'lucide-react';

interface ChartCardProps {
  title: string;
  option: any;
  code?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, option, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = code || JSON.stringify(option, null, 2);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const defaultCode = code || `<!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/${title.toLowerCase().replace(/\s+/g, '-')} -->
<div class="echart-${title.toLowerCase().replace(/\s+/g, '-')} min-h-75"></div>`;

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-[10px] shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col relative z-10 hover:z-20">
      <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 relative z-30">
        <h3 className="text-[18px] font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy Code
            </button>
            {copied && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg shadow-xl animate-in fade-in zoom-in duration-200 flex items-center gap-1.5 whitespace-nowrap z-50">
                <Check className="w-3 h-3 text-emerald-400" />
                Copied to clipboard!
              </div>
            )}
          </div>
          <button 
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-[13px] font-medium text-indigo-600 hover:bg-indigo-50 transition-colors border border-slate-100 dark:border-slate-700"
          >
            {showCode ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                Hide code
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                View code
              </>
            )}
          </button>
        </div>
      </div>

      {showCode && (
        <div className="bg-[#1C222D] p-6 font-mono text-[13px] leading-relaxed animate-in slide-in-from-top-4 duration-300 relative z-20">
          <div className="text-slate-400 mb-1">
            &lt;!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/{title.toLowerCase().replace(/\s+/g, '-')} --&gt;
          </div>
          <div className="text-slate-400 mb-2">
            &lt;!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js --&gt;
          </div>
          <div className="flex gap-1.5">
            <span className="text-[#89DDFF]">&lt;div</span>
            <span className="text-[#C792EA]">class</span>
            <span className="text-[#C3E88D]">="echart-{title.toLowerCase().replace(/\s+/g, '-')} min-h-75"</span>
            <span className="text-[#89DDFF]">&gt;&lt;/div&gt;</span>
          </div>
        </div>
      )}

      <div className="p-6 relative z-10">
        <ReactECharts 
          option={option} 
          style={{ height: '350px' }} 
          opts={{ renderer: 'svg' }}
          theme={document.documentElement.classList.contains('dark') ? 'dark' : undefined}
        />
      </div>
    </div>
  );
};

const LineCharts: React.FC = () => {
  const commonXAxis = {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: '#64748b', fontSize: 12, margin: 15 }
  };

  const commonYAxis = {
    type: 'value',
    splitLine: { lineStyle: { type: 'dashed', color: '#e2e8f0' } },
    axisLabel: { color: '#64748b', fontSize: 12 }
  };

  const basicLineOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: commonXAxis,
    yAxis: commonYAxis,
    series: [
      {
        data: [1000, 1500, 1300, 1000, 1050, 2000, 1200, 1350, 1000, 1200, 1450, 1200],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 3, color: '#3C50E0' }
      }
    ]
  };

  const basicAreaOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: commonXAxis,
    yAxis: commonYAxis,
    series: [
      {
        data: [1000, 1150, 1300, 950, 1250, 1000, 1450, 1200, 1050, 1150, 1250, 1050],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 3, color: '#3C50E0' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(60, 80, 224, 0.2)' },
              { offset: 1, color: 'rgba(60, 80, 224, 0)' }
            ]
          }
        }
      }
    ]
  };

  const stackedXAxis = {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: '#64748b', fontSize: 12, margin: 15 }
  };

  const stackedLineOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: stackedXAxis,
    yAxis: commonYAxis,
    series: [
      {
        name: 'Primary',
        type: 'line',
        data: [1600, 1800, 1700, 1800, 2300, 2600, 2600],
        smooth: true,
        lineStyle: { width: 3, color: '#3C50E0' },
        itemStyle: { color: '#3C50E0', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      },
      {
        name: 'Orange',
        type: 'line',
        data: [800, 900, 800, 850, 1000, 1250, 1300],
        smooth: true,
        lineStyle: { width: 3, color: '#FF7043' },
        itemStyle: { color: '#FF7043', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      },
      {
        name: 'Red',
        type: 'line',
        data: [500, 550, 500, 550, 600, 900, 950],
        smooth: true,
        lineStyle: { width: 3, color: '#F44336' },
        itemStyle: { color: '#F44336', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      },
      {
        name: 'Green',
        type: 'line',
        data: [350, 350, 300, 400, 400, 600, 550],
        smooth: true,
        lineStyle: { width: 3, color: '#4CAF50' },
        itemStyle: { color: '#4CAF50', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      },
      {
        name: 'Light Blue',
        type: 'line',
        data: [150, 150, 100, 150, 100, 250, 250],
        smooth: true,
        lineStyle: { width: 3, color: '#29B6F6' },
        itemStyle: { color: '#29B6F6', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      }
    ]
  };

  const stackedAreaOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: stackedXAxis,
    yAxis: commonYAxis,
    series: [
      {
        name: 'Primary',
        type: 'line',
        stack: 'Total',
        data: [1600, 1800, 1700, 1800, 2300, 2600, 2600],
        smooth: true,
        areaStyle: { opacity: 0.15, color: '#3C50E0' },
        lineStyle: { width: 3, color: '#3C50E0' },
        itemStyle: { color: '#3C50E0', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      },
      {
        name: 'Orange',
        type: 'line',
        stack: 'Total',
        data: [800, 900, 800, 850, 1000, 1250, 1300],
        smooth: true,
        areaStyle: { opacity: 0.15, color: '#FF7043' },
        lineStyle: { width: 3, color: '#FF7043' },
        itemStyle: { color: '#FF7043', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      },
      {
        name: 'Red',
        type: 'line',
        stack: 'Total',
        data: [500, 550, 500, 550, 600, 900, 950],
        smooth: true,
        areaStyle: { opacity: 0.15, color: '#F44336' },
        lineStyle: { width: 3, color: '#F44336' },
        itemStyle: { color: '#F44336', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      },
      {
        name: 'Green',
        type: 'line',
        stack: 'Total',
        data: [350, 350, 300, 400, 400, 600, 550],
        smooth: true,
        areaStyle: { opacity: 0.15, color: '#4CAF50' },
        lineStyle: { width: 3, color: '#4CAF50' },
        itemStyle: { color: '#4CAF50', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      },
      {
        name: 'Light Blue',
        type: 'line',
        stack: 'Total',
        data: [150, 150, 100, 150, 100, 250, 250],
        smooth: true,
        areaStyle: { opacity: 0.15, color: '#29B6F6' },
        lineStyle: { width: 3, color: '#29B6F6' },
        itemStyle: { color: '#29B6F6', borderWidth: 2, borderColor: '#fff' },
        symbolSize: 8
      }
    ]
  };

  const lineMarkerOption = {
    tooltip: { trigger: 'axis' },
    legend: { 
      data: ['Max', 'Min'],
      top: 20,
      itemWidth: 14,
      itemHeight: 14,
      textStyle: { color: '#64748b' }
    },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#64748b' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { formatter: '{value}', color: '#64748b' },
      splitLine: { lineStyle: { type: 'dashed', color: '#e2e8f0' } }
    },
    series: [
      {
        name: 'Max',
        type: 'line',
        data: [10, 11, 13, 11, 12, 10, 12],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        },
        lineStyle: { width: 3, color: '#3C50E0' },
        itemStyle: { color: '#3C50E0' }
      },
      {
        name: 'Min',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{ name: 'Lowest', value: -2, xAxis: 1, yAxis: -1.5 }]
        },
        markLine: {
          data: [
            { type: 'average', name: 'Avg' },
            [{ symbol: 'none', x: '90%', yAxis: 'max' }, { symbol: 'circle', label: { position: 'start', formatter: 'Max' }, type: 'max', name: 'Max' }]
          ]
        },
        lineStyle: { width: 3, color: '#F44336' },
        itemStyle: { color: '#F44336' }
      }
    ]
  };

  const areaPiecesOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15', 'Oct 16', 'Oct 17', 'Oct 18'],
      axisLine: { show: false },
      axisLabel: { color: '#64748b' }
    },
    yAxis: commonYAxis,
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        { gt: 0, lte: 2, color: 'rgba(60, 80, 224, 0.4)' },
        { gt: 4, lte: 7, color: 'rgba(60, 80, 224, 0.4)' }
      ]
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: { color: '#3C50E0', width: 4 },
        areaStyle: {},
        data: [100, 300, 450, 300, 250, 750, 650, 550, 200]
      }
    ]
  };

  const stepLineOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: stackedXAxis,
    yAxis: {
      type: 'value',
      max: 600,
      splitLine: { lineStyle: { type: 'dashed', color: '#e2e8f0' } },
      axisLabel: { color: '#64748b' }
    },
    series: [
      {
        name: 'Step Start',
        type: 'line',
        step: 'start',
        data: [120, 130, 100, 130, 90, 230, 210],
        lineStyle: { color: '#3C50E0', width: 3 },
        itemStyle: { color: '#3C50E0' }
      },
      {
        name: 'Step Middle',
        type: 'line',
        step: 'middle',
        data: [220, 280, 200, 230, 290, 430, 410],
        lineStyle: { color: '#FF7043', width: 3 },
        itemStyle: { color: '#FF7043' }
      },
      {
        name: 'Step End',
        type: 'line',
        step: 'end',
        data: [450, 430, 400, 450, 590, 530, 510],
        lineStyle: { color: '#F44336', width: 3 },
        itemStyle: { color: '#F44336' }
      }
    ]
  };

  const lineGradientOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      data: ['Jun 05', 'Jun 09', 'Jun 13', 'Jun 17', 'Jun 21', 'Jun 25', 'Jun 29', 'Jul 03', 'Jul 07', 'Jul 11', 'Jul 15', 'Jul 19', 'Jul 23'],
      axisLine: { show: false },
      axisLabel: { color: '#64748b' }
    },
    yAxis: commonYAxis,
    visualMap: {
      show: false,
      type: 'continuous',
      dimension: 1,
      color: ['#F44336', '#3C50E0']
    },
    series: {
      type: 'line',
      showSymbol: false,
      data: [120, 140, 80, 70, 110, 130, 250, 150, 310, 150, 130, 70, 110, 80, 120, 100, 60, 110, 90, 110, 110, 250, 130, 350, 120, 420, 90, 80, 120, 80, 60, 60, 70],
      lineStyle: { width: 2 }
    }
  };

  const dynamicLineOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Oct', '2005', 'Apr', 'Jul', 'Oct', '2006', 'Apr', 'Jul', 'Oct', '2007', 'Apr'],
      axisLine: { show: false },
      axisLabel: { color: '#64748b' }
    },
    yAxis: commonYAxis,
    series: [
      {
        type: 'line',
        showSymbol: false,
        lineStyle: { color: '#3C50E0', width: 2 },
        data: Array.from({ length: 100 }, (_, i) => 1500 + i * 10 + Math.random() * 100)
      }
    ]
  };

  const lineLogOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        axisLine: { show: false },
        axisLabel: { color: '#64748b' }
    },
    yAxis: {
        type: 'log',
        splitLine: { lineStyle: { type: 'dashed', color: '#e2e8f0' } },
        axisLabel: { color: '#64748b' }
    },
    series: [
        {
            name: 'Line 1',
            type: 'line',
            data: [1, 3, 9, 27, 81, 243, 729, 2187, 6561],
            lineStyle: { color: '#F44336', width: 2 },
            itemStyle: { color: '#F44336' },
            symbolSize: 8
        },
        {
            name: 'Line 2',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
            lineStyle: { color: '#4CAF50', width: 2 },
            itemStyle: { color: '#4CAF50' },
            symbolSize: 8
        },
        {
            name: 'Line 3',
            type: 'line',
            data: [0.5, 0.25, 0.12, 0.06, 0.03, 0.015, 0.007, 0.003, 0.001],
            lineStyle: { color: '#29B6F6', width: 2 },
            itemStyle: { color: '#29B6F6' },
            symbolSize: 8
        }
    ]
  };

  const shareDatasetOption = {
    legend: { 
      top: 20,
      itemWidth: 14,
      itemHeight: 14,
      textStyle: { color: '#64748b' }
    },
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category', axisLine: { show: false }, axisTick: { show: false }, axisLabel: { color: '#64748b' } },
    yAxis: { gridIndex: 0, splitLine: { lineStyle: { type: 'dashed', color: '#e2e8f0' } }, axisLabel: { color: '#64748b' } },
    grid: { top: '55%', left: '3%', right: '4%', bottom: '3%', containLabel: true },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        lineStyle: { width: 3 },
        itemStyle: { borderWidth: 2, borderColor: '#fff' },
        symbolSize: 10,
        color: '#F44336'
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        lineStyle: { width: 3 },
        itemStyle: { borderWidth: 2, borderColor: '#fff' },
        symbolSize: 10,
        color: '#2196F3'
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        lineStyle: { width: 3 },
        itemStyle: { borderWidth: 2, borderColor: '#fff' },
        symbolSize: 10,
        color: '#FF9800'
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        lineStyle: { width: 3 },
        itemStyle: { borderWidth: 2, borderColor: '#fff' },
        symbolSize: 10,
        color: '#448AFF'
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '30%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)',
          color: '#64748b'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
          Line charts
        </h1>
        <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400">
          <span>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">ECharts</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">Line charts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ChartCard title="Basic line chart" option={basicLineOption} />
        <ChartCard title="Basic area line chart" option={basicAreaOption} />
        <ChartCard title="Stacked line chart" option={stackedLineOption} />
        <ChartCard title="Stacked area chart" option={stackedAreaOption} />
        
        <ChartCard title="Line marker chart" option={lineMarkerOption} />
        <ChartCard title="Area pieces chart" option={areaPiecesOption} />
        <ChartCard title="Step line chart" option={stepLineOption} />
        <ChartCard title="Line gradient chart" option={lineGradientOption} />
        <ChartCard title="Dynamic line chart" option={dynamicLineOption} />
        <ChartCard title="Line log chart" option={lineLogOption} />

        <div className="xl:col-span-2">
            <ChartCard title="Share dataset" option={shareDatasetOption} />
        </div>
      </div>
    </div>
  );
};

export default LineCharts;

