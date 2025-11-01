import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vans & Utes",
  description: "Read our terms of service to understand the rules and regulations for using our vehicle rental services.",
};

const TermsOfServicePage = () => {
  return (
    <main>
      <Breadcrumb 
        pageName="Terms of Service" 
        pageDescription="Rules and regulations for using our services"
      />
      
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="mb-8">
                <p className="text-body-color dark:text-dark-6 mb-4 text-base">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                  Please read these Terms of Service carefully before using our vehicle rental services. By accessing 
                  or using our services, you agree to be bound by these terms.
                </p>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">1. Acceptance of Terms</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                By accessing and using Vans & Utes vehicle rental services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use 
                our services.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">2. Eligibility and Requirements</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                To rent a vehicle from Vans & Utes, you must:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Be at least 21 years of age (drivers under 25 may be subject to additional fees)</li>
                <li>Hold a valid driver&apos;s license for at least 12 months</li>
                <li>Provide valid identification and payment method</li>
                <li>Have an acceptable driving record</li>
                <li>Meet our credit requirements</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">3. Rental Agreement</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                When you rent a vehicle from us, you will be required to sign a rental agreement that includes:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Rental period and return date</li>
                <li>Vehicle specifications and condition</li>
                <li>Rental rates and fees</li>
                <li>Insurance coverage options</li>
                <li>Mileage limitations</li>
                <li>Terms and conditions specific to your rental</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">4. Payment Terms</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                You agree to pay:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>All rental fees as specified in your rental agreement</li>
                <li>A security deposit (held until vehicle return and inspection)</li>
                <li>Any additional charges for extra services, fuel, tolls, or damages</li>
                <li>Late return fees if the vehicle is returned after the agreed return time</li>
                <li>Penalties for violations of traffic laws or rental terms</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">5. Vehicle Use and Restrictions</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                You agree to use the vehicle only for lawful purposes and in accordance with these terms. You may NOT:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Use the vehicle for illegal activities</li>
                <li>Allow unauthorized drivers to operate the vehicle</li>
                <li>Drive under the influence of alcohol or drugs</li>
                <li>Use the vehicle for racing, towing, or off-road driving without authorization</li>
                <li>Transport hazardous materials or exceed passenger/cargo limits</li>
                <li>Drive outside authorized geographic areas without permission</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">6. Insurance and Liability</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                Basic third-party liability insurance is included with all rentals. Additional coverage options are 
                available. You are responsible for any damage to the vehicle not covered by insurance, including but 
                not limited to damage from negligence, unauthorized use, or violation of rental terms.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">7. Vehicle Return</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                You must return the vehicle:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>At the agreed return date and time</li>
                <li>At the specified return location</li>
                <li>With the fuel tank at the agreed level (typically full-to-full)</li>
                <li>In the same condition as when rented (normal wear and tear excepted)</li>
                <li>With all original equipment and accessories</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">8. Cancellation and Refunds</h2>
              <p className="text-body-color dark:text-dark-6 mb-4 text-base leading-relaxed">
                Cancellation policies:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Cancellations made 24 hours or more before pickup: Full refund</li>
                <li>Cancellations made less than 24 hours before pickup: Subject to cancellation fees</li>
                <li>No-shows: No refund</li>
                <li>Early returns: Subject to early return fees unless otherwise specified</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">9. Damage and Accidents</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                In case of accident, damage, theft, or mechanical failure, you must:
              </p>
              <ul className="text-body-color dark:text-dark-6 mb-6 ml-6 list-disc space-y-2 text-base">
                <li>Contact us immediately using our 24/7 emergency number</li>
                <li>Notify local authorities if required by law</li>
                <li>Obtain a police report for theft or major accidents</li>
                <li>Do not admit fault or make agreements with other parties</li>
                <li>Provide accurate and complete information about the incident</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">10. Limitation of Liability</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                To the maximum extent permitted by law, Vans & Utes shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, 
                incurred by you or any third party, whether in an action in contract or tort, even if we have been advised 
                of the possibility of such damages.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">11. Modifications to Terms</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material 
                changes by posting the new Terms of Service on this page and updating the &quot;Last Updated&quot; date. 
                Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">12. Contact Information</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-body-color dark:text-dark-6 mb-6 rounded-lg bg-gray-50 p-6 dark:bg-dark-2">
                <p className="mb-2"><strong>Email:</strong> vansandutesforhire@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> (04) 1234 5678</p>
                <p className="mb-2"><strong>Emergency:</strong> Available 24/7</p>
                <p><strong>Address:</strong> 123 Vehicle Street, Sydney, NSW 2000</p>
              </div>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">13. Governing Law</h2>
              <p className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of New South Wales, 
                Australia, without regard to its conflict of law provisions. Any disputes arising under or in connection 
                with these terms shall be subject to the exclusive jurisdiction of the courts of New South Wales, Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfServicePage;

