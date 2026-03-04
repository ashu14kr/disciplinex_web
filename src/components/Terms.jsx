import React from "react";

function Terms() {
  return (
      <div className="max-w-4xl mx-auto p-8 md:p-10 ">

        <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
          Terms of Use
        </h1>

        <p className="font-body text-gray-600 mb-8">
          Please read these terms and conditions carefully before using Our Service.
        </p>

        {/* Interpretation */}
        <SectionTitle title="Interpretation" />
        <Paragraph>
          The words with capitalized initial letters have meanings defined under
          the following conditions. The following definitions shall have the
          same meaning regardless of whether they appear in singular or plural.
        </Paragraph>

        {/* Definitions */}
        <SectionTitle title="Definitions" />
        <Paragraph>
          For the purposes of these Terms and Conditions:
        </Paragraph>

        <ListItem><strong>Application</strong> means the software program provided by the Developer downloaded by You on any electronic device, named DisciplineX.</ListItem>

        <ListItem><strong>Application Store</strong> means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</ListItem>

        <ListItem><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</ListItem>

        <ListItem><strong>Country</strong> refers to: India.</ListItem>

        <ListItem><strong>Developer</strong> refers to Ashutosh Kumar.</ListItem>

        <ListItem><strong>Device</strong> means any device that can access the Service.</ListItem>

        <ListItem><strong>Service</strong> refers to the Application.</ListItem>

        <ListItem><strong>Terms and Conditions</strong> mean these Terms and Conditions that form the entire agreement between You and the Developer.</ListItem>

        <ListItem><strong>You</strong> means the individual accessing or using the Service.</ListItem>

        {/* Acknowledgment */}
        <SectionTitle title="Acknowledgment" />
        <Paragraph>
          These Terms govern the use of this Service and the agreement that operates between You and the Developer. By accessing or using the Service, You agree to be bound by these Terms.
        </Paragraph>

        <Paragraph>
          You represent that you are over the age of 18. The Developer does not permit those under 18 to use the Service.
        </Paragraph>

        <Paragraph>
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with Our Privacy Policy.
        </Paragraph>

        {/* Links */}
        <SectionTitle title="Links to Other Websites" />
        <Paragraph>
          Our Service may contain links to third-party websites or services that are not owned or controlled by the Developer. The Developer assumes no responsibility for the content or practices of any third-party websites.
        </Paragraph>

        {/* Termination */}
        <SectionTitle title="Termination" />
        <Paragraph>
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including if You breach these Terms.
        </Paragraph>

        {/* Limitation */}
        <SectionTitle title="Limitation of Liability" />
        <Paragraph>
          The entire liability of the Developer shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything.
        </Paragraph>

        {/* Disclaimer */}
        <SectionTitle title='"AS IS" and "AS AVAILABLE" Disclaimer' />
        <Paragraph>
          The Service is provided to You "AS IS" and "AS AVAILABLE" without warranty of any kind. The Developer disclaims all warranties to the maximum extent permitted by law.
        </Paragraph>

        {/* Governing Law */}
        <SectionTitle title="Governing Law" />
        <Paragraph>
          The laws of India shall govern these Terms and Your use of the Service.
        </Paragraph>

        {/* Disputes */}
        <SectionTitle title="Disputes Resolution" />
        <Paragraph>
          If You have concerns or disputes, You agree to first try to resolve them informally by contacting us at:
        </Paragraph>

        <p className="font-body text-gray-800 mb-6">
          aasshhuutosh1@gmail.com
        </p>

        {/* Changes */}
        <SectionTitle title="Changes to These Terms and Conditions" />
        <Paragraph>
          We reserve the right to modify or replace these Terms at any time. By continuing to use the Service after revisions become effective, You agree to be bound by the revised terms.
        </Paragraph>

        {/* Contact */}
        <SectionTitle title="Contact Us" />
        <Paragraph>
          If you have any questions about these Terms, you can contact us at:
        </Paragraph>

        <p className="font-body text-gray-800">
          aasshhuutosh1@gmail.com
        </p>

    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="font-heading text-xl md:text-2xl font-bold mt-10 mb-4">
      {title}
    </h2>
  );
}

function Paragraph({ children }) {
  return (
    <p className="font-body text-gray-600 mb-4 leading-relaxed">
      {children}
    </p>
  );
}

function ListItem({ children }) {
  return (
    <p className="font-body text-gray-600 mb-3 leading-relaxed">
      • {children}
    </p>
  );
}

export default Terms;