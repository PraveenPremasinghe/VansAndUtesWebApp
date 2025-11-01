"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with FormBold or another form service here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Contact Information */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="wow fadeInUp mb-12 lg:mb-0" data-wow-delay=".15s">
              <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                Get in Touch
              </h2>
              <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                Have questions about our vehicle rentals? We&apos;re here to help!
                Reach out to us through any of the following channels, and our
                friendly team will get back to you as soon as possible.
              </p>

              <div className="mb-10">
                <div className="mb-8 flex items-start">
                  <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-500 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                      Email Address
                    </h3>
                    <a
                      href="mailto:vansandutesforhire@gmail.com"
                      className="text-base text-body-color transition hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                    >
                      vansandutesforhire@gmail.com
                    </a>
                  </div>
                </div>

                <div className="mb-8 flex items-start">
                  <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-500 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+61412345678"
                      className="text-base text-body-color transition hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                    >
                      (04) 1234 5678
                    </a>
                  </div>
                </div>

                <div className="mb-8 flex items-start">
                  <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-500 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                      Office Location
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      123 Vehicle Street
                      <br />
                      Sydney, NSW 2000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-500 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                      Business Hours
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full px-4 lg:w-7/12">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2">
                <h3 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 mb-6 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                      placeholder="+61 4XX XXX XXX"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="subject"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none rounded-md border border-stroke bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-blue-500 px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-500/90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

