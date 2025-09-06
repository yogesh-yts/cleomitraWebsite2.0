'use client';

import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

interface ProductShowcaseProps {
  title: string;
  subtitle: string;
  backgroundColor: string;
  textColor: string;
  reverse?: boolean;
  features: string[];
}

const ProductShowcase = ({ 
  title, 
  subtitle, 
  backgroundColor,  
  reverse = false,
  features 
}: ProductShowcaseProps) => {
  return (
    <section className="container-responsive section-spacing">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
        <motion.div
          className={reverse ? 'lg:col-start-2' : ''}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {subtitle}
          </p>
          
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Circle className="w-2 h-2 fill-primary text-primary" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Start Free Trial Today
          </button>
        </motion.div>

        <motion.div
          className={`${backgroundColor} p-8 rounded-2xl ${reverse ? 'lg:col-start-1' : ''}`}
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Campaign Performance</span>
                  <span className="text-xs text-gray-500">Live</span>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-white p-3 rounded text-center">
                    <div className="text-lg font-bold text-primary">42%</div>
                    <div className="text-xs text-gray-500">Open Rate</div>
                  </div>
                  <div className="flex-1 bg-white p-3 rounded text-center">
                    <div className="text-lg font-bold text-green-600">18%</div>
                    <div className="text-xs text-gray-500">Click Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm">AI Assistant</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">Based on your recent campaigns, I recommend optimizing your subject lines for better engagement.</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs">+847 new contacts</span>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                    ))}
                    <span className="text-xs ml-2">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;