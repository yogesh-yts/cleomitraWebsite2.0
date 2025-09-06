'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  BarChart3, 
  Phone, 
  MessageSquare, 
  Target, 
  ClipboardList, 
  Settings, 
  TrendingUp 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { icon: Mail, title: 'Email Marketing', description: 'Automate & Scale Emails' },
    { icon: BarChart3, title: 'CRM', description: 'Billing' },
    { icon: Phone, title: 'Email Marketing', description: 'Business Intelligence' },
    { icon: MessageSquare, title: 'Live Chat', description: 'Helpdesk' },
    { icon: Target, title: 'Marketing Automation', description: 'Landing Pages' },
    { icon: ClipboardList, title: 'Project Management', description: 'Proposals & Estimates' },
    { icon: Settings, title: 'Workflow Automation', description: 'Marketing Funnels' },
    { icon: TrendingUp, title: 'Analytics', description: 'Reporting' }
  ];

  return (
    <section className="container-responsive section-spacing">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          One Tool For All Your Needs
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;