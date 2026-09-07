import React from 'react';
import { ShieldCheck, Truck, Clock, Award, Users, Headset } from 'lucide-react';

const highlights = [
  {
    icon: ShieldCheck,
    title: '100% Hydro-Tested Cylinders',
    description: 'Every cylinder undergoes strict hydraulic pressure testing and tare weight verification before refilling.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Dispatch',
    description: 'Round-the-clock emergency gas delivery for critical medical facilities and high-priority industrial lines.',
  },
  {
    icon: Truck,
    title: 'Dedicated Fleet Delivery',
    description: 'Our specialized HAZMAT certified transport fleet guarantees safe, compliant, and punctual transit.',
  },
  {
    icon: Award,
    title: 'Purity Certification',
    description: 'Gas purity certificates issued per batch to comply with ISO 9001 and medical quality standards.',
  },
  {
    icon: Users,
    title: '500+ Active Enterprise Clients',
    description: 'Trusted partner for pharmaceutical plants, automobile fabricators, hospitals, and hospitality chains.',
  },
  {
    icon: Headset,
    title: 'Technical Support Engineers',
    description: 'On-site technical support for gas manifold design, regulator selection, and emergency leak troubleshooting.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-5 position-relative">
      <div className="container py-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <small className="text-danger fw-bold uppercase tracking-widest d-block mb-1">
            Why Partner With ESEGAS
          </small>
          <h2 className="display-6 fw-bold text-white mb-3">
            Built on Safety, Purity, & Reliability
          </h2>
          <p className="text-secondary">
            We don't just deliver gas cylinders — we provide complete gas infrastructure, emergency supply guarantees, and certified safety compliance.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="row g-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="glass-card p-4 h-100">
                  <div className="p-3 rounded-3 bg-warning bg-opacity-10 text-warning d-inline-block mb-3 border border-warning border-opacity-25">
                    <Icon size={24} />
                  </div>
                  <h5 className="fw-bold text-white mb-2">{item.title}</h5>
                  <p className="text-secondary small mb-0">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
