"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Phone, Mail, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const phoneNumber = "+1 (555) 123-4567";
  const email = "contact@vansandutes.com";
  const address = "123 Main Street, City, State 12345";
  const hours = "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed";

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all dark:bg-gray-900">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <Dialog.Title
                      as="h2"
                      className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
                    >
                      Book a Call
                    </Dialog.Title>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Get in touch with us to discuss your vehicle rental needs
                    </p>
                  </motion.div>

                  {/* Phone Number - Prominent */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:from-blue-900/20 dark:to-purple-900/20"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <Phone className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                      <div className="text-center">
                        <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          Call Us Now
                        </p>
                        <a
                          href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                          className="text-3xl font-bold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 md:text-4xl"
                        >
                          {phoneNumber}
                        </a>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                          Tap to call directly
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Information Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2"
                  >
                    {/* Email */}
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                          <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            Email
                          </p>
                          <a
                            href={`mailto:${email}`}
                            className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                          >
                            {email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-900/30">
                          <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            Address
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {address}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:col-span-2">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900/30">
                          <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Business Hours
                          </p>
                          <pre className="whitespace-pre-wrap text-sm text-gray-600 dark:text-gray-400">
                            {hours}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Call to Action */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                  >
                    <a
                      href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                      className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-center font-semibold text-white transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
                    >
                      Call Now
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="flex-1 rounded-xl border-2 border-gray-300 bg-white px-6 py-4 text-center font-semibold text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      Send Email
                    </a>
                  </motion.div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

