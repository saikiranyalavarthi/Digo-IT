import React from "react";

// Import your service images
import otImage from "../assets/image3.jpg";
import itsmImage from "../assets/image4.jpg";
import infraImage from "../assets/image5.jpg";
import sapImage from "../assets/image6.jpg";
import immigrationImage from "../assets/image7.jpg";
import staffingImage from "../assets/image8.jpg";

const services = [
  {
    title: "Operational Technology (OT) Infrastructure Services",
    image: otImage,
    description: `Our OT services bridge the gap between traditional industrial environments and modern IT systems. We focus on enhancing the security, performance, and reliability of operational networks used in manufacturing, energy, and utilities. With industrial-grade protocols and resilient system design, we help ensure consistent uptime and smooth operations. Our experts integrate IT-OT frameworks for unified visibility and control. We help modernize your infrastructure while keeping safety and compliance a priority.`,
  },
  {
    title: "IT Service Management",
    image: itsmImage,
    description: `We deliver robust IT Service Management solutions based on ITIL frameworks, ensuring streamlined incident handling, asset management, and service delivery. From automated workflows to help desk setup, we help reduce downtime and improve user satisfaction. Our solutions are customizable and designed to scale with your organization. With real-time monitoring and actionable insights, you gain control over your IT landscape. We ensure stability, predictability, and continuous improvement in your IT operations.`,
  },
  {
    title: "IT Infrastructure Services",
    image: infraImage,
    description: `Our IT infrastructure services encompass everything from data centers to networks and end-user computing. We architect and manage infrastructure that supports performance, scalability, and business continuity. Our team designs reliable systems for hybrid environments, integrating cloud and on-premises setups seamlessly. We implement secure, resilient IT backbones that empower your workforce and customers. From planning to proactive support, we deliver cost-effective solutions tailored to your growth.`,
  },
  {
    title: "SAP Implementation and Support",
    image: sapImage,
    description: `We offer end-to-end SAP services including implementation, customization, integration, and support. Our experts help you unlock the full potential of SAP for business automation, data-driven decision-making, and financial control. Whether you're migrating to S/4HANA or integrating modules across HR, finance, or supply chain — we’ve got you covered. With Digo IT, you get a future-ready SAP ecosystem that evolves with your business. We provide 24/7 support and upgrades to ensure smooth, uninterrupted performance.`,
  },
  {
    title: "Immigration Service",
    image: immigrationImage,
    description: `Our Immigration Services streamline global workforce mobility with expert handling of visa, work permit, and compliance requirements. We provide end-to-end assistance for H1B, L1, Green Cards, and permanent residency processing. With in-depth knowledge of global laws and regulations, we ensure a hassle-free experience for both employers and candidates. We help you build a globally competitive workforce by managing timelines, documentation, and communication with immigration authorities effectively.`,
  },
  {
    title: "Staffing Service",
    image: staffingImage,
    description: `We provide agile staffing solutions to help companies meet their project, permanent, and contract-based hiring needs. Our extensive talent network allows us to deliver top IT professionals across technologies and domains quickly. We focus on culture fit, technical expertise, and long-term value when recommending candidates. Whether you're scaling a development team or need niche expertise, we help you find the right people. Our staffing services are fast, flexible, and focused on quality delivery.`,
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-indigo-600 drop-shadow-md mb-8">
        Our Services
      </h2>

      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          } bg-white rounded-2xl shadow-lg overflow-hidden`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover h-64 w-full lg:h-full"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 p-8 space-y-4">
            <h3 className="text-2xl font-bold text-indigo-700">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
