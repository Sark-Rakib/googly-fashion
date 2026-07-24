import { Link } from "react-router-dom";
import { ChevronRight, Newspaper, FileText, Download, Mail } from "lucide-react";

const PressReleases = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Press Releases</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Press Releases</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Latest news and announcements from Googly Fashion</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Featured Press</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                date: "March 15, 2026",
                title: "Googly Fashion Launches Express Delivery in 10 Major Cities",
                excerpt: "New same-day and next-day delivery service covers Dhaka, Chattogram, Cumilla, Sylhet, Rajshahi, and five more cities across Bangladesh.",
              },
              {
                date: "January 10, 2026",
                title: "Googly Fashion Partners with 50 New Local Designers",
                excerpt: "The partnership brings exclusive collections from emerging Bangladeshi designers to the platform, supporting local talent.",
              },
              {
                date: "November 5, 2025",
                title: "Googly Fashion Surpasses 10,000 Active Customers",
                excerpt: "The milestone marks a 300% growth since launch, cementing Googly Fashion's position as a rising star in Bangladeshi e-commerce.",
              },
            ].map((press, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Newspaper className="w-4 h-4" />
                    <span>{press.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{press.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{press.excerpt}</p>
                  <button className="text-[#1F3A63] text-sm font-medium hover:underline">
                    Read Full Release →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-10">Media Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="flex items-center gap-4 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-[#1F3A63]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Brand Guidelines</h3>
                <p className="text-sm text-gray-500">Logo, colors, typography and brand assets</p>
              </div>
              <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-[#1F3A63] text-white text-sm rounded-md hover:bg-[#2a4d7a] transition-colors">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-[#1F3A63]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Press Kit</h3>
                <p className="text-sm text-gray-500">Executive bios, company fact sheet, and photos</p>
              </div>
              <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-[#1F3A63] text-white text-sm rounded-md hover:bg-[#2a4d7a] transition-colors">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-10 border border-gray-200 text-center">
            <Mail className="w-10 h-10 text-[#1F3A63] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Contact</h2>
            <p className="text-gray-600 mb-2">
              For press inquiries, interview requests, or media partnerships:
            </p>
            <a href="mailto:press@googlyfashion.com" className="text-[#1F3A63] font-medium hover:underline">
              press@googlyfashion.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressReleases;
