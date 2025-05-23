import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [ /* ...same array as before... */ ];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase">FAQ</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Frequently asked questions</h2>
          <p className="mt-4 text-xl text-gray-600">Find answers to common questions about Horizon.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none bg-white"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
