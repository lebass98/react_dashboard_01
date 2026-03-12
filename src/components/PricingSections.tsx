import React, { useState } from 'react';
import { 
  Check, ChevronRight, Monitor, Smartphone, Tablet, Sun, Moon, ChevronDown, Copy, CheckCircle, Sparkles, Zap
} from 'lucide-react';

interface PricingCardProps {
  title: string;
  htmlCode: string;
  children: React.ReactNode;
}

const PricingSectionWrapper: React.FC<PricingCardProps> = ({ title, htmlCode, children }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{title}</h3>
        <div className="flex items-center gap-4">
          {/* Preview/Code Toggle */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'preview' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              Preview
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'code' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              Code
            </button>
          </div>

          <div className="hidden md:block w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Device Icons */}
          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => setDevice('desktop')} className={`p-1.5 rounded-md transition-colors ${device === 'desktop' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
              <Monitor className="w-4 h-4" />
            </button>
            <button onClick={() => setDevice('tablet')} className={`p-1.5 rounded-md transition-colors ${device === 'tablet' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
              <Tablet className="w-4 h-4" />
            </button>
            <button onClick={() => setDevice('mobile')} className={`p-1.5 rounded-md transition-colors ${device === 'mobile' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden md:block w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Theme Icons */}
          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => setTheme('light')} className={`p-1.5 rounded-md transition-colors ${theme === 'light' ? 'bg-slate-100 dark:bg-slate-800 text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}>
              <Sun className="w-4 h-4" />
            </button>
            <button onClick={() => setTheme('dark')} className={`p-1.5 rounded-md transition-colors ${theme === 'dark' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}>
              <Moon className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Format Dropdown */}
          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
            HTML <ChevronDown className="w-3 h-3" />
          </button>

          <button 
            onClick={handleCopy}
            className={`p-1.5 rounded-md transition-all ${copied ? 'text-emerald-500' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${device === 'mobile' ? 'max-w-[375px] mx-auto' : device === 'tablet' ? 'max-w-[768px] mx-auto' : 'w-full'}`}>
        {activeTab === 'preview' ? (
          <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="bg-white dark:bg-[#0F172A] transition-colors duration-300">
              {children}
            </div>
          </div>
        ) : (
          <div className="bg-[#1e1e1e] p-6 font-mono text-sm text-slate-300 overflow-x-auto max-h-[600px] custom-scrollbar">
             <pre><code>{htmlCode}</code></pre>
          </div>
        )}
      </div>
    </div>
  );
};

const PricingSections: React.FC = () => {
  const section1Html = `<!-- Two tiers with emphasized right tier -->
<div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
  <div class="absolute inset-x-0 -top-3 px-3 -z-10 transform-gpu opacity-30 blur-3xl" aria-hidden="true">
    <div class="ml-[50%] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
  </div>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
    <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Choose the right plan for you</p>
    <p class="mt-6 text-lg leading-8 text-gray-600">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
  </div>
  <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
    <!-- Hobby Plan -->
    <div class="relative rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 lg:rounded-r-none lg:p-10 backdrop-blur-sm border-white/20">
      <h3 id="tier-hobby" class="text-base font-semibold leading-7 text-indigo-600">Hobby</h3>
      <p class="mt-4 flex items-baseline gap-x-2">
        <span class="text-5xl font-bold tracking-tight text-gray-900">$29</span>
        <span class="text-base text-gray-500">/month</span>
      </p>
      <p class="mt-6 text-base leading-7 text-gray-600">The perfect plan if you're just getting started with our product.</p>
      <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          25 products
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Up to 10,000 subscribers
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          24-hour support response time
        </li>
      </ul>
      <a href="#" aria-describedby="tier-hobby" class="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Get started today</a>
    </div>
    <!-- Enterprise Plan -->
    <div class="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900 sm:p-10 lg:z-10 lg:rounded-l-none">
      <h3 id="tier-enterprise" class="text-base font-semibold leading-7 text-indigo-400">Enterprise</h3>
      <p class="mt-4 flex items-baseline gap-x-2">
        <span class="text-5xl font-bold tracking-tight text-white">$99</span>
        <span class="text-base text-gray-400">/month</span>
      </p>
      <p class="mt-6 text-base leading-7 text-gray-300">Dedicated support and infrastructure for your company.</p>
      <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 sm:mt-10">
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Unlimited products
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Unlimited subscribers
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Dedicated support representative
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Marketing automations
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Custom integrations
        </li>
      </ul>
      <a href="#" aria-describedby="tier-enterprise" class="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Get started today</a>
    </div>
  </div>
</div>`;

  const section2Html = `<!-- Three tiers with emphasized middle tier -->
<div class="bg-gray-100 dark:bg-slate-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Pricing Plans</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Our Flexible Pricing</p>
    </div>
    <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <!-- Starter -->
      <div class="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800 p-8 ring-1 ring-gray-200 dark:ring-slate-700 xl:p-10">
        <div>
          <h3 class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Starter</h3>
          <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-400">Perfect for individuals and small projects.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$15</span>
            <span class="text-sm font-semibold leading-6 text-gray-600 dark:text-slate-400">/month</span>
          </p>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-600" /> 5 projects</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-600" /> Basic support</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-600" /> Community access</li>
          </ul>
        </div>
        <a href="#" class="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy Starter</a>
      </div>
      <!-- Professional -->
      <div class="flex flex-col justify-between rounded-3xl bg-gray-900 p-8 ring-1 ring-gray-900 xl:p-10 scale-110 z-10 shadow-xl">
        <div>
          <h3 class="text-lg font-semibold leading-8 text-white">Professional</h3>
          <p class="mt-4 text-sm leading-6 text-gray-300">The best choice for growing businesses.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-white">$49</span>
            <span class="text-sm font-semibold leading-6 text-gray-300">/month</span>
          </p>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-400" /> 20 projects</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-400" /> Priority support</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-400" /> Advanced analytics</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-400" /> Team collaboration</li>
          </ul>
        </div>
        <a href="#" class="mt-8 block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400">Buy Pro</a>
      </div>
      <!-- Enterprise -->
      <div class="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800 p-8 ring-1 ring-gray-200 dark:ring-slate-700 xl:p-10">
        <div>
          <h3 class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Enterprise</h3>
          <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-400">Everything you need for large-scale operations.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$99</span>
            <span class="text-sm font-semibold leading-6 text-gray-600 dark:text-slate-400">/month</span>
          </p>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-600" /> Unlimited projects</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-600" /> 24/7 Dedicated support</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-600" /> Custom integrations</li>
          </ul>
        </div>
        <a href="#" class="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy Enterprise</a>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            Pricing Sections
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Pages</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">Pricing Sections</span>
          </div>
        </div>
      </div>

      {/* Variation 1: Two tiers with emphasized right tier */}
      <PricingSectionWrapper title="Two tiers with emphasized right tier" htmlCode={section1Html}>
        <div className="relative isolate bg-white dark:bg-slate-950 px-6 py-24 sm:py-32 lg:px-8 overflow-hidden rounded-2xl">
          <div className="absolute inset-x-0 -top-3 px-3 -z-10 transform-gpu opacity-30 blur-3xl" aria-hidden="true">
            <div className="ml-[50%] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Choose the right plan for you</p>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {/* Hobby Plan */}
            <div className="relative rounded-3xl bg-white/60 dark:bg-white/5 p-8 ring-1 ring-slate-900/10 dark:ring-white/10 sm:mx-8 lg:mx-0 lg:rounded-r-none lg:p-10 backdrop-blur-sm border-white/20">
              <h3 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Hobby</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">$29</span>
                <span className="text-base text-slate-500 dark:text-slate-400">/month</span>
              </p>
              <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">The perfect plan if you're just getting started with our product.</p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:mt-10">
                {[
                  "25 products",
                  "Up to 10,000 subscribers",
                  "Advanced analytics",
                  "24-hour support response time"
                ].map((feature, i) => (
                  <li key={i} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-900 hover:ring-indigo-300 dark:hover:ring-indigo-700 transition-all">
                Get started today
              </button>
            </div>
            {/* Enterprise Plan */}
            <div className="relative rounded-3xl bg-slate-900 dark:bg-indigo-600 p-8 shadow-2xl ring-1 ring-slate-900 dark:ring-indigo-600 sm:p-10 lg:z-10 lg:rounded-l-none">
              <h3 className="text-base font-semibold leading-7 text-indigo-400 dark:text-blue-100">Enterprise</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-white">$99</span>
                <span className="text-base text-slate-400 dark:text-blue-100/70">/month</span>
              </p>
              <p className="mt-6 text-base leading-7 text-slate-300 dark:text-blue-50">Dedicated support and infrastructure for your company.</p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-300 dark:text-blue-50 sm:mt-10">
                {[
                  "Unlimited products",
                  "Unlimited subscribers",
                  "Advanced analytics",
                  "Dedicated support representative",
                  "Marketing automations",
                  "Custom integrations"
                ].map((feature, i) => (
                  <li key={i} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-indigo-400 dark:text-blue-200" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 block w-full rounded-md bg-indigo-500 dark:bg-white px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-white dark:text-indigo-600 shadow-sm hover:bg-indigo-400 dark:hover:bg-blue-50 transition-all">
                Get started today
              </button>
            </div>
          </div>
        </div>
      </PricingSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* Variation 2: Three tiers with emphasized middle tier */}
      <PricingSectionWrapper title="Three tiers with emphasized middle tier" htmlCode={section2Html}>
        <div className="bg-slate-50 dark:bg-slate-900 py-24 sm:py-32 rounded-2xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Pricing Plans</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Our Flexible Pricing</p>
              <p className="mt-4 text-slate-600 dark:text-slate-400">Simple and transparent pricing for businesses of all sizes.</p>
            </div>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 items-center">
              {/* Starter */}
              <div className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800/50 p-8 ring-1 ring-slate-200 dark:ring-slate-700 xl:p-10 transition-all hover:shadow-lg">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">Starter</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">Perfect for individuals and small projects.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">$15</span>
                    <span className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">/month</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {["5 projects", "Basic support", "Community access"].map((feat, i) => (
                      <li key={i} className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-600" /> {feat}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-900 hover:ring-indigo-300 dark:hover:ring-indigo-800">Buy Starter</button>
              </div>
              {/* Professional */}
              <div className="relative flex flex-col justify-between rounded-3xl bg-slate-900 p-8 ring-1 ring-slate-900 xl:p-10 lg:scale-105 z-10 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Most Popular</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-white">Professional</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">The best choice for growing businesses.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">$49</span>
                    <span className="text-sm font-semibold leading-6 text-slate-400">/month</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-300">
                    {["20 projects", "Priority support", "Advanced analytics", "Team collaboration"].map((feat, i) => (
                      <li key={i} className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-400" /> {feat}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 transition-all">Buy Professional</button>
              </div>
              {/* Enterprise */}
              <div className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800/50 p-8 ring-1 ring-slate-200 dark:ring-slate-700 xl:p-10 transition-all hover:shadow-lg">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">Enterprise</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">Everything you need for large-scale operations.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">$99</span>
                    <span className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">/month</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {["Unlimited projects", "24/7 Dedicated support", "Custom integrations", "White labeling"].map((feat, i) => (
                      <li key={i} className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-indigo-600" /> {feat}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-900 hover:ring-indigo-300 dark:hover:ring-indigo-800">Buy Enterprise</button>
              </div>
            </div>
          </div>
        </div>
      </PricingSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* Variation 3: Simple horizontal tiers */}
      <PricingSectionWrapper title="Simple three column" htmlCode={`<!-- Simple three column -->
<div class="bg-white dark:bg-slate-950 py-24 sm:py-32 rounded-2xl">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
      <!-- Tier 1 -->
      <div class="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Personal</h3>
        <p class="mt-4 text-4xl font-black text-slate-900 dark:text-white">$0 <span class="text-sm font-normal text-slate-500">/month</span></p>
        <button class="mt-8 w-full py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-all">Get Started</button>
      </div>
      <!-- Tier 2 -->
      <div class="p-8 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-200 dark:shadow-none">
        <h3 class="text-lg font-bold text-white">Startup</h3>
        <p class="mt-4 text-4xl font-black text-white">$24 <span class="text-sm font-normal text-indigo-200">/month</span></p>
        <button class="mt-8 w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-slate-100 transition-all">Get Started</button>
      </div>
      <!-- Tier 3 -->
      <div class="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Business</h3>
        <p class="mt-4 text-4xl font-black text-slate-900 dark:text-white">$48 <span class="text-sm font-normal text-slate-500">/month</span></p>
        <button class="mt-8 w-full py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-all">Get Started</button>
      </div>
    </div>
  </div>
</div>`}>
        <div className="bg-white dark:bg-slate-950 py-24 sm:py-32 rounded-2xl transition-all">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
              {[
                { name: "Personal", price: "$0", bg: "bg-slate-50 dark:bg-slate-900", text: "text-slate-900 dark:text-white", btn: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" },
                { name: "Startup", price: "$24", bg: "bg-indigo-600", text: "text-white", btn: "bg-white text-indigo-600" },
                { name: "Business", price: "$48", bg: "bg-slate-50 dark:bg-slate-900", text: "text-slate-900 dark:text-white", btn: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" }
              ].map((tier, i) => (
                <div key={i} className={`p-8 ${tier.bg} rounded-3xl transition-transform hover:-translate-y-2 duration-300`}>
                  <h3 className={`text-lg font-bold ${tier.text}`}>{tier.name}</h3>
                  <p className={`mt-4 text-4xl font-black ${tier.text}`}>{tier.price} <span className="text-sm font-normal opacity-60">/month</span></p>
                  <ul className={`mt-6 space-y-3 text-sm font-medium ${tier.text} opacity-80`}>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Core features</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Community forums</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Email support</li>
                  </ul>
                  <button className={`mt-8 w-full py-3 ${tier.btn} rounded-xl font-bold hover:opacity-90 transition-all shadow-sm`}>Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PricingSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />
      
      {/* Variation 4: Centered with badges and micro-animations */}
      <PricingSectionWrapper title="Feature-rich centered" htmlCode={`<!-- Content omitted for brevity in this mock -->`}>
        <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-24 sm:py-32 rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Limited Time Offer: 20% Off Yearly
            </div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6">Scale with Confidence</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">From side projects to enterprise-grade solutions. Get the features you need, when you need them.</p>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-12 text-left relative overflow-hidden group">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
               <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-600 rounded-2xl">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Pro Accelerator</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Most popular for high-growth startups</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Real-time fraud detection",
                      "Priority API access",
                      "Custom reporting hooks",
                      "Dedicated account manager",
                      "SLA 99.9% guarantee",
                      "RBAC & SSO integration"
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <Check className="w-4 h-4 text-emerald-500" /> {f}
                      </div>
                    ))}
                  </div>
               </div>
               <div className="shrink-0 w-full md:w-[280px] p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-700 text-center">
                  <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2">Starts from</p>
                  <div className="flex items-baseline justify-center gap-1 mb-6">
                    <span className="text-5xl font-black text-indigo-600">$49</span>
                    <span className="text-slate-400 font-medium">/mo</span>
                  </div>
                  <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none mb-4">
                    Scale Now
                  </button>
                  <p className="text-[11px] text-slate-400">No credit card required for 14-day trial</p>
               </div>
            </div>
          </div>
        </div>
      </PricingSectionWrapper>
    </div>
  );
};

export default PricingSections;
