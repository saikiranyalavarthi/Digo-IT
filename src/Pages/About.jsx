import React from "react";
import teamImage from "../assets/image1.jpg"; // Ensure this image exists in your assets folder

const About = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Section 1: About Us */}
      <div className="bg-white bg-opacity-95 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT: TEXT */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">
              About Us
            </h1>
            <p className="text-lg leading-relaxed">
              <strong>Digo IT</strong> is a globally recognized, privately held
              information technology solutions firm, established in 2000. With{" "}
              <strong>over 500 years of collective experience</strong>, our team
              brings unparalleled expertise and innovation to the table. We
              pride ourselves on being a new breed of consulting and services
              firm, dedicated to building solutions and capabilities that drive
              competitive differentiation for our clients.
            </p>
            <p className="text-lg leading-relaxed">
              Our focus is on developing and delivering customized IT solutions
              that meet the unique needs of businesses across various
              industries. Whether you're a small to medium-sized company or a
              global enterprise, Digo IT has the expertise to help you succeed
              in today’s fast-paced, technology-driven world.
            </p>
            <p className="text-lg leading-relaxed">
              Over the past 20 years, Digo IT has built deep and trusted
              relationships with our clients. What starts as a requisition for a
              key IT role or implementation of a contact center platform often
              evolves into deeper partnerships — transforming data centers,
              managing cloud migration, taking over help desk and desk-side
              support, and eventually full managed services.
            </p>
            <p className="text-lg leading-relaxed">
              We earn a place at our clients' table by always putting their
              interests first. Our teams have hands-on experience managing the
              technologies we recommend, combined with a deep understanding of
              business operations and digital transformation.
            </p>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={teamImage}
              alt="Digo IT Team"
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Mission and Services */}
      <div className="max-w-7xl mx-auto bg-gray-100 px-6 py-16 space-y-16">
        {/* Our Mission */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-indigo-700">Our Mission</h2>
          <p className="text-lg leading-relaxed font-medium text-gray-700">
            At <span className="text-indigo-600 font-bold">Digo IT</span>, our
            mission is simple: to empower businesses by providing{" "}
            <span className="text-purple-600 font-semibold">
              innovative IT solutions
            </span>{" "}
            that enable them to achieve their goals and stand out in the market.
            We are committed to understanding our clients' needs, designing
            tailored solutions, and delivering exceptional service every step of
            the way.
          </p>
        </div>

        {/* What We Do */}
        <div>
          <h2 className="text-4xl font-bold text-indigo-700 text-center mb-8">
            What We Do
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Tailored IT Solutions",
                text: "We specialize in creating bespoke IT solutions that align with your business goals. From infrastructure management to software development, we ensure that our services drive efficiency and long-term growth.",
              },
              {
                title: "Strategic Consulting",
                text: "Our consulting services help businesses navigate the complexities of modern technology. We provide strategic insights and actionable roadmaps to help you stay ahead of the competition.",
              },
              {
                title: "Global Reach",
                text: "Digo IT operates globally, serving clients across regions. Our solutions are scalable and adaptable for businesses of any size—from local startups to global enterprises.",
              },
              {
                title: "Focused Expertise",
                text: "Our team is dedicated to creating competitive differentiation. We stay ahead of trends, delivering cutting-edge solutions that position your business at the forefront of innovation.",
              },
            ].map(({ title, text }) => (
              <div key={title}>
                <h3 className="text-xl font-bold text-purple-700">{title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-indigo-600">Digo IT</span>{" "}
            believes in a client-centric approach. We take the time to
            understand your unique challenges and opportunities, working closely
            with you to develop solutions that not only meet your current needs
            but also position you for future success.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our process is collaborative, transparent, and focused on delivering
            measurable results. We believe that successful partnerships are
            built on trust, communication, and a shared commitment to
            excellence.
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
            Why Choose Digo IT?
          </h2>
          <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">
            <li>
              <strong className="text-purple-700">
                Experience and Expertise:
              </strong>{" "}
              With over 500 years of combined experience, our team handles even
              the most complex challenges.
            </li>
            <li>
              <strong className="text-purple-700">Innovative Solutions:</strong>{" "}
              We design solutions that not only solve problems but also create
              new opportunities for growth.
            </li>
            <li>
              <strong className="text-purple-700">Global Perspective:</strong>{" "}
              Our global reach ensures effective solutions across various
              markets and industries.
            </li>
            <li>
              <strong className="text-purple-700">Client-Focused:</strong> We
              prioritize our clients’ success and collaborate closely to achieve
              their business goals.
            </li>
            <li>
              <strong className="text-purple-700">Scalable Solutions:</strong>{" "}
              Our services grow with your business, ensuring you're equipped at
              every stage of growth.
            </li>
          </ul>
        </div>

        {/* Commitment to Excellence */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-4">
            Commitment to Excellence
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="text-indigo-600 font-semibold">Digo IT</span>,
            we are committed to delivering excellence in everything we do. Our
            team is passionate about technology and dedicated to helping clients
            reach their full potential. We invest in people, processes, and
            innovation to remain at the cutting edge of the IT industry.
          </p>
        </div>

        {/* Looking Ahead */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-4">
            Looking Ahead
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            As we look to the future,{" "}
            <span className="text-indigo-600 font-semibold">Digo IT</span> stays
            committed to our founding principles:{" "}
            <span className="text-purple-600 font-semibold">
              innovation, client-focus, and excellence
            </span>
            . We’ll continue evolving our services to meet changing client and
            industry needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-2">
            We’re excited for the road ahead and look forward to building
            long-term partnerships, guiding our clients through the complexities
            of the digital world and helping them thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
