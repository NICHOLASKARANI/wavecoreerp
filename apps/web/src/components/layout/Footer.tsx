'use client';

import Link from 'next/link';

export default function EnterpriseFooter() {
  const footerSections = [
    {
      title: 'Platform',
      links: ['ERP', 'Accounting', 'CRM', 'HRM', 'Inventory', 'Manufacturing'],
    },
    {
      title: 'Solutions',
      links: ['Small Business', 'Enterprise', 'Manufacturing', 'Retail', 'Services'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Blog', 'Community', 'Support'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Contact', 'Partners', 'Legal'],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-sky-blue rounded-lg" />
              <span className="text-xl font-bold">WaveCore ERP</span>
            </div>
            <p className="text-gray-400 mb-4">
              Enterprise AI platform for modern businesses. 
              Run your entire operation from one intelligent system.
            </p>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 WaveCore ERP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
            <Link href="/security" className="text-gray-400 hover:text-white text-sm">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
