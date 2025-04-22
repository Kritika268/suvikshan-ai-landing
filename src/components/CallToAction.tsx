
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="demo" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-electricBlue to-softPurple rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Testing Process?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join hundreds of companies using SuVikshan to build more reliable test suites and ship with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#" 
                className="px-6 py-3 bg-white text-electricBlue rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center"
              >
                Schedule a Demo
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-transparent border border-white rounded-lg font-medium hover:bg-white/10 transition-all flex items-center justify-center"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              No credit card required. Free trial available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
