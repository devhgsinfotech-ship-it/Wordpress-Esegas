import React from 'react';
import { Flame, ShieldCheck, Wrench, Activity, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Industrial Gas Supplies',
    description: 'High-purity Oxygen, Nitrogen, Argon, Carbon Dioxide, and Acetylene cylinders for manufacturing and fabrication.',
    tag: 'Bulk & Cylinder',
    colorClass: 'text-danger bg-danger-subtle',
  },
  {
    icon: Layers,
    title: 'Commercial LPG Solutions',
    description: '19kg & 47.5kg commercial LPG cylinders with uninterrupted bulk delivery for hotels, restaurants, and factories.',
    tag: '24/7 Supply',
    colorClass: 'text-warning bg-warning-subtle',
  },
  {
    icon: Activity,
    title: 'Medical Oxygen Systems',
    description: 'Ultra-pure medical grade oxygen and manifold pipeline systems for hospitals, clinics, and emergency care.',
    tag: '99.99% Purity',
    colorClass: 'text-success bg-success-subtle',
  },
  {
    icon: Wrench,
    title: 'Turnkey Gas Piping',
    description: 'End-to-end design, installation, and hydrostatic testing of industrial gas pipelines and manifold systems.',
    tag: 'Engineering',
    colorClass: 'text-info bg-info-subtle',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Leak Audits',
    description: 'Comprehensive pressure testing, safety valve inspections, and annual maintenance contracts for compliance.',
    tag: 'ISO Certified',
    colorClass: 'text-primary bg-primary-subtle',
  },
  {
    icon: Sparkles,
    title: 'Specialty Gas Mixtures',
    description: 'Custom analytical and calibration gas mixtures engineered for laboratories, research, and precision equipment.',
    tag: 'High Precision',
    colorClass: 'text-light bg-dark-subtle',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5 position-relative">
      <div className="container py-4">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <small className="text-danger fw-bold text-uppercase tracking-widest d-block mb-1">
            Our Core Competencies
          </small>
          <h2 className="display-6 fw-bold text-white mb-3">
            Comprehensive Gas & Energy Solutions
          </h2>
          <p className="text-secondary">
            From medical manifolds to heavy industrial gas supply, we provide safe, certified, and uninterrupted gas solutions tailored to your operational demands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div className={`p-3 rounded-3 ${service.colorClass} d-flex align-items-center justify-content-center`}>
                        <Icon size={26} />
                      </div>
                      <span className="badge bg-secondary-subtle text-light border border-secondary px-2.5 py-1">
                        {service.tag}
                      </span>
                    </div>

                    <h4 className="fw-bold text-white mb-2">{service.title}</h4>
                    <p className="text-secondary small leading-relaxed mb-4">{service.description}</p>
                  </div>

                  <div className="pt-3 border-top border-secondary d-flex align-items-center justify-content-between text-white small font-weight-bold">
                    <span>Learn More</span>
                    <ArrowUpRight size={18} className="text-danger" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
