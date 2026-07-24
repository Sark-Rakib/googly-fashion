import { Link } from "react-router-dom";
import { ChevronRight, Shield, Search, AlertTriangle, CheckCircle, Scale } from "lucide-react";

const AntiCounterfeitPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "1. Our Commitment",
      content: "Googly Fashion is committed to providing a platform that sells only 100% authentic products. We have a zero-tolerance policy towards counterfeit goods. We implement rigorous verification processes for all sellers and products listed on our platform. Our dedicated compliance team works tirelessly to ensure every item meets our authenticity standards. We invest in technology and partnerships to detect and prevent counterfeit listings before they reach our customers."
    },
    {
      icon: Search,
      title: "2. What Is Counterfeit",
      content: "Counterfeit products are unauthorized replicas of genuine branded goods that bear the trademark, logo, or branding of the original manufacturer without permission. These include fake designer apparel, accessories, footwear, electronics, and luxury goods. Counterfeit products often have inferior quality, may pose safety risks, and violate intellectual property laws. Any product that misleads customers about its brand, origin, or authenticity is considered counterfeit."
    },
    {
      icon: AlertTriangle,
      title: "3. Seller Obligations",
      content: "All sellers on Googly Fashion must agree to our strict anti-counterfeit policy before listing products. Sellers must provide valid proof of authenticity, brand authorization, or distributor agreements upon request. Sellers are required to maintain accurate inventory records and supply chain documentation. Any seller found listing counterfeit goods will face immediate account suspension, legal action, and potential criminal prosecution. Sellers must cooperate fully with authenticity investigations."
    },
    {
      icon: CheckCircle,
      title: "4. Buyer Protection",
      content: "We guarantee that every product sold on Googly Fashion is authentic. If you receive a product you suspect is counterfeit, you are entitled to a full refund under our Buyer Protection program. We will investigate all authenticity claims thoroughly and take appropriate action. Your purchase is protected by our authenticity guarantee, ensuring peace of mind when shopping on our platform. We may request additional information and photos to process your claim."
    },
    {
      icon: Scale,
      title: "5. Reporting Counterfeits",
      content: "If you suspect a product listed on our platform is counterfeit, please report it immediately. You can use the Report button on the product page, contact our compliance team at counterfeit@googlyfashion.com, or call our hotline. Please provide as much detail as possible including product name, seller information, order number, and reasons for your suspicion. All reports are treated confidentially, and you may choose to remain anonymous."
    },
    {
      icon: Shield,
      title: "6. Enforcement Actions",
      content: "Violations of our anti-counterfeit policy result in immediate and severe consequences. Sellers found listing counterfeit goods will have their listings removed immediately, their accounts permanently suspended, and all pending payments withheld. We will report counterfeit activity to brand owners, relevant authorities, and law enforcement agencies. Legal action may be pursued including claims for damages, injunctions, and criminal prosecution where applicable."
    },
    {
      icon: Search,
      title: "7. Contact for IP Owners",
      content: "Intellectual property owners who wish to report counterfeit listings of their products can contact our dedicated IP enforcement team at ip-enforcement@googlyfashion.com. We have established a streamlined notice and takedown process specifically for IP owners. Please provide proof of ownership and details of the alleged infringement. We commit to responding within 48 hours and will take swift action to remove infringing content. We value partnerships with brand owners in the fight against counterfeiting."
    }
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Anti-Counterfeit Policy</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Anti-Counterfeit Policy</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Our commitment to authentic products only</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-gray-400 mb-8">Last Updated: June 1, 2026</div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-12 space-y-10">
              {sections.map((section, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1F3A63]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <section.icon className="w-5 h-5 text-[#1F3A63]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                  {index < sections.length - 1 && <div className="border-b border-gray-100 mt-8" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntiCounterfeitPolicy;
