import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, Info } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq1, setOpenFaq1] = useState<number | null>(0);
  const [openFaq2, setOpenFaq2] = useState<number | null>(0);

  const faqData1 = [
    {
      question: "Do I get free updates?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis magna ac nibh malesuada consectetur at vitae ipsum orem ipsum dolor sit amet, consectetur adipiscing elit nam fermentum, leo et lacinia accumsan."
    },
    {
      question: "Can I Customize TailAdmin to suit my needs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis magna ac nibh malesuada consectetur at vitae ipsum orem ipsum dolor sit amet."
    },
    {
      question: "What does \"Unlimited Projects\" mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis magna ac nibh malesuada consectetur at vitae ipsum orem ipsum dolor sit amet."
    }
  ];

  const faqData2 = [
    {
      question: "Do I get free updates?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis magna ac nibh malesuada consectetur at vitae ipsum orem ipsum dolor sit amet, consectetur adipiscing elit nam fermentum, leo et lacinia accumsan."
    },
    {
      question: "Which license type is suitable for me?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia."
    },
    {
      question: "What are the \"Seats\" mentioned on pricing plans?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia."
    },
    {
      question: "Can I Customize TailAdmin to suit my needs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia."
    },
    {
      question: "What does \"Unlimited Projects\" mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia."
    },
    {
      question: "Can I upgrade to a higher plan?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia."
    },
    {
      question: "Are there dark and light mode options?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia."
    }
  ];

  const faqData3 = [
    {
      question: "Do I get free updates?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Can I Customize TailAdmin to suit my needs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Which license type is suitable for me?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "What does \"Unlimited Projects\" mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis magna ac nibh malesuada consectetur at vitae ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, leo et lacinia accumsan, ligula ante hendrerit nisi, eget vulputate ante justo et justo."
    },
    {
      question: "What are the \"Seats\" mentioned on pricing plans?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nunc ut risus imperdiet lacinia."
    }
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Faq's</h2>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <span className="text-slate-400 font-normal">Home</span>
          <span className="text-slate-400 font-normal">/</span>
          <span className="text-indigo-600 font-bold">Faq's</span>
        </nav>
      </div>

      {/* FAQ Type 1 */}
      <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-9">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6">Faq's 1</h3>
        <div className="space-y-4">
          {faqData1.map((item, idx) => (
            <div key={idx} className="border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenFaq1(openFaq1 === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                <div className={`w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300 ${openFaq1 === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaq1 === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Type 2 */}
      <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-9">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6">Faq's 2</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            {faqData2.slice(0, 3).map((item, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq2(openFaq2 === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openFaq2 === idx ? 'bg-indigo-50 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}`}
                >
                  <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                  {openFaq2 === idx ? (
                    <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  ) : (
                    <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  )}
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq2 === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className={`p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 ${openFaq2 === idx ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}`}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {faqData2.slice(3).map((item, idx) => {
              const realIdx = idx + 3;
              return (
                <div key={realIdx} className="rounded-lg overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq2(openFaq2 === realIdx ? null : realIdx)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openFaq2 === realIdx ? 'bg-indigo-50 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}`}
                  >
                    <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                    {openFaq2 === realIdx ? (
                      <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    )}
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFaq2 === realIdx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className={`p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 ${openFaq2 === realIdx ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Type 3 */}
      <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-9">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6">Faq's 3</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {faqData3.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="shrink-0 pt-1">
                <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 dark:text-white leading-tight">{item.question}</h4>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.answer}
                </p>
                {/* Visual helper for multi-paragraph look in the image */}
                {idx < 2 && (
                   <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
