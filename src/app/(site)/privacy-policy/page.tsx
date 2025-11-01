import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vans & Utes",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information when using our vehicle rental services.",
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <Breadcrumb 
        pageName="Privacy Policy" 
        pageDescription="How we protect and use your personal information"
      />
      
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="mb-8">
                <p className="text-body-color dark:text-dark-6 mb-4 text-base">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">1. Introduction</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                Vans & Utes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website and use our vehicle rental services.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">2. Information We Collect</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Personal identification information (name, email address, phone number, mailing address)</li>
                <li>Driver&apos;s license information and driving history</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Vehicle rental history and preferences</li>
                <li>Information you provide when contacting us or submitting inquiries</li>
                <li>Automatically collected data (IP address, browser type, device information, usage patterns)</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">3. How We Use Your Information</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Process your vehicle rental bookings and manage your account</li>
                <li>Verify your identity and eligibility to rent vehicles</li>
                <li>Process payments and send rental confirmations</li>
                <li>Communicate with you about your rentals, services, and promotions</li>
                <li>Improve our website, services, and customer experience</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">4. Information Sharing and Disclosure</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>With service providers who assist in our operations (payment processors, IT services)</li>
                <li>With insurance companies and roadside assistance providers when necessary</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, property, or safety, or that of our customers</li>
                <li>In connection with a business transfer or merger</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">5. Data Security</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">6. Your Rights</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                You have the right to:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Opt-out of marketing communications at any time</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">7. Cookies and Tracking Technologies</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. You can control cookie preferences through your browser settings.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">8. Contact Us</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="text-body-color dark:text-dark-6 mb-6 rounded-lg bg-gray-50 p-6 dark:bg-dark-2">
                <p className="mb-2"><strong>Email:</strong> vansandutesforhire@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> (04) 1234 5678</p>
                <p><strong>Address:</strong> 123 Vehicle Street, Sydney, NSW 2000</p>
              </div>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">9. Changes to This Policy</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this 
                Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;

