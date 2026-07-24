import { Link } from "react-router-dom";
import { ChevronRight, Briefcase, Users, GraduationCap, Star, Heart } from "lucide-react";

const Careers = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Careers</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Join Our Team</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Build your career with Bangladesh's fastest-growing fashion brand</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Star, title: "Growth Opportunities", desc: "Continuous learning and career advancement programs tailored to your goals." },
              { icon: Heart, title: "Great Benefits", desc: "Competitive salary, health insurance, and generous paid time off." },
              { icon: Users, title: "Amazing Culture", desc: "A collaborative, inclusive environment where every voice is valued." },
              { icon: GraduationCap, title: "Learning & Development", desc: "Workshops, courses, and mentorship to help you reach your potential." },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#1F3A63]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Open Positions</h2>
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            {[
              { title: "Senior Frontend Developer", type: "Full-time", location: "Dhaka", dept: "Engineering" },
              { title: "Fashion Category Manager", type: "Full-time", location: "Dhaka", dept: "Merchandising" },
              { title: "Digital Marketing Specialist", type: "Full-time", location: "Cumilla", dept: "Marketing" },
              { title: "Customer Experience Associate", type: "Full-time", location: "Remote", dept: "Support" },
              { title: "Supply Chain Coordinator", type: "Full-time", location: "Chattogram", dept: "Operations" },
            ].map((job, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-lg hover:border-[#1F3A63]/30 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-[#1F3A63]" />
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                    <span className="text-[#1F3A63]/70">{job.dept}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[#1F3A63] text-white text-sm rounded-md hover:bg-[#2a4d7a] transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Culture</h2>
            <p className="text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
              At Googly Fashion, we believe that great work happens when people feel empowered, respected, and inspired. 
              Our culture is built on collaboration, innovation, and a shared passion for transforming Bangladeshi fashion. 
              From hackathons to team outings, we make sure work is both meaningful and enjoyable.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-10 border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-gray-600 mb-6">
              Send your CV and a brief cover letter to careers@googlyfashion.com with the position title in the subject line. 
              Our HR team will review your application and get back to you within 5-7 business days.
            </p>
            <a
              href="mailto:careers@googlyfashion.com"
              className="inline-flex items-center gap-2 bg-[#1F3A63] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2a4d7a] transition-colors"
            >
              <Heart className="w-4 h-4" /> Apply via Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
