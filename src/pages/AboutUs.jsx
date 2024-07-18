// import React from 'react';

// function AboutUs() {
  // return (
//     <div>
//       <h2>About Us</h2>
//       <p>We provide a comprehensive survey management system to help you create, manage, and analyze surveys efficiently.
//       facilitate the efficient and effective management of surveys from planning and design to data collection, analysis, and reporting.</p>
//       <h2>Who We Are</h2>
//       <p>We are a dedicated team of developers, data analysts, and UX designers who believe in the power of feedback. Our journey started with a simple goal: to create a tool that simplifies the survey process and makes data collection accessible to everyone. Whether you're a business looking to understand your customer base, a researcher gathering data for a study, or an educator seeking student feedback, our platform is designed to meet your needs.</p>
//       <h2>Our Vision</h2>
//       <p>Our vision is to become the leading provider of survey management solutions. We strive to achieve this by continuously innovating and improving our platform based on user feedback and technological advancements. We aim to empower users with the tools they need to gather meaningful data, make informed decisions, and drive positive change.We envision a world where every organization can make informed decisions based on reliable and actionable survey data.</p>
//       <h2>Our Mission</h2>
//       <p>Our mission is to empower organizations to gather, analyze, and act on data-driven insights to improve decision-making and drive meaningful change.</p>
//     </div>
//   );
// }

// export default AboutUs;
import React from 'react';
import './AboutUs.css'; // Assuming you have a CSS file for styling

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-header">About Us</h2>
      <p className="about-us-mission">
        Our mission is to empower organizations to gather, analyze, and act on data-driven insights to improve decision-making and drive meaningful change.
      </p>
      <h3 className="about-us-subheader">Our Story</h3>
      <p className="about-us-text">
        Founded in 2023, our company has been dedicated to providing top-notch survey solutions to businesses, educational institutions, and research organizations. Our founders, Jane Doe and John Smith, bring over 20 years of combined experience in data analysis and software development.
      </p>
      <h3 className="about-us-subheader">Our Values</h3>
      <ul className="about-us-values">
        <li>Integrity: We believe in maintaining the highest standards of integrity in all our interactions and deliverables.</li>
        <li>Innovation: We strive to innovate continuously, ensuring our platform evolves to meet the ever-changing needs of our users.</li>
        <li>Customer Focus: Our users are at the heart of everything we do. We are committed to providing exceptional customer support and building long-term relationships.</li>
      </ul>
      <h3 className="about-us-subheader">Features and Benefits</h3>
      <p className="about-us-text">
        Our intuitive interface makes it easy for anyone to create and manage surveys without technical expertise. Our powerful analytics tools provide deep insights, enabling users to understand trends and patterns in their survey data. Users can customize surveys to fit their specific needs, ensuring they collect the most relevant data. We prioritize the security of our users' data with robust encryption and compliance with data protection regulations.
      </p>
      <h3 className="about-us-subheader">Testimonials</h3>
      <p className="about-us-text">
        "The survey management system has transformed how we collect and analyze data. It's incredibly easy to use and the insights are invaluable." – A Happy Customer.
      </p>
      <h3 className="about-us-subheader">Contact Us</h3>
      <p className="about-us-text">
        Our dedicated support team is here to help you 24/7. Contact us at support@example.com. Headquartered in San Francisco, with offices in New York and London.
      </p>
    </div>
  );
}

export default AboutUs;
