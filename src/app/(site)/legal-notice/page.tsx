import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice | Vans & Utes",
  description: "Legal information and company details for Vans & Utes vehicle rental services.",
};

const LegalNoticePage = () => {
  return (
    <main>
      <Breadcrumb 
        pageName="Legal Notice" 
        pageDescription="Legal information and company details"
      />
      
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">Company Information</h2>
              <div className="text-body-color dark:text-dark-6 mb-8 rounded-lg bg-gray-50 p-6 dark:bg-dark-2">
                <p className="mb-2"><strong>Company Name:</strong> Vans & Utes</p>
                <p className="mb-2"><strong>Business Type:</strong> Vehicle Rental Services</p>
                <p className="mb-2"><strong>Registered Address:</strong> 123 Vehicle Street, Sydney, NSW 2000, Australia</p>
                <p className="mb-2"><strong>Email:</strong> vansandutesforhire@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> (04) 1234 5678</p>
                <p><strong>Website:</strong> www.vansandutes.com</p>
              </div>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">Legal Status</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                Vans & Utes operates as a registered vehicle rental business in Australia. We comply with all relevant 
                Australian consumer protection laws, vehicle rental regulations, and privacy legislation.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">Intellectual Property</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                All content on this website, including but not limited to:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Text, graphics, logos, images, and software</li>
                <li>Website design and layout</li>
                <li>Trademarks and service marks</li>
              </ul>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                is the property of Vans & Utes or its content suppliers and is protected by Australian and international 
                copyright and trademark laws. Unauthorized use, reproduction, or distribution of any content from this 
                website is strictly prohibited.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">Website Content Disclaimer</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                While we strive to provide accurate and up-to-date information on this website, we make no representations 
                or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, 
                or availability of the website or the information, products, services, or related graphics contained on the 
                website for any purpose.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">External Links</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                This website may contain links to external websites that are not operated by us. We have no control over 
                the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply 
                a recommendation or endorse the views expressed within them.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">Liability Limitation</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                To the fullest extent permitted by law, Vans & Utes shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly 
                or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of 
                our website or services.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">Governing Law</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                This legal notice and your use of this website are governed by the laws of New South Wales, Australia, 
                and the Commonwealth of Australia. Any disputes arising from or related to this website or our services 
                shall be subject to the exclusive jurisdiction of the courts of New South Wales, Australia.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">Contact for Legal Matters</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                For any legal inquiries or concerns, please contact us at:
              </p>
              <div className="text-body-color dark:text-dark-6 mb-6 rounded-lg bg-gray-50 p-6 dark:bg-dark-2">
                <p className="mb-2"><strong>Email:</strong> vansandutesforhire@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> (04) 1234 5678</p>
                <p><strong>Address:</strong> 123 Vehicle Street, Sydney, NSW 2000</p>
              </div>

              <p className="text-body-color dark:text-dark-6 mt-8 text-sm italic">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalNoticePage;

