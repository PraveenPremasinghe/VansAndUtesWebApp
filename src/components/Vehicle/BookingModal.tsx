import React from 'react';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { toast } from "sonner";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleName: string;
}

const BookingModal = ({ open, onOpenChange, vehicleName }: BookingModalProps) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleBooking = () => {
    if (!fullName || !phone || !email || !date) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Booking request sent!", {
      description: `Your ${vehicleName} booking request has been submitted for ${date?.toLocaleDateString()}`,
    });
    onOpenChange(false);

    // Reset form
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setDate(undefined);
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => onOpenChange(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-light tracking-tight mb-2 text-gray-900"
                >
                  You Selected <span className="font-semibold text-primary">{vehicleName}</span>
                </Dialog.Title>
                <Dialog.Description className="text-sm text-gray-500 mb-4">
                  Please fill in your details to complete the booking.
                </Dialog.Description>

                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 rounded border border-gray-300"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full p-2 rounded border border-gray-300"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 rounded border border-gray-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Choose a date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 rounded border border-gray-300"
                      value={date?.toISOString().split('T')[0] || ''}
                      onChange={(e) => setDate(e.target.value ? new Date(e.target.value) : undefined)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Message (Optional)
                    </label>
                    <textarea
                      className="w-full p-2 rounded border border-gray-300 min-h-[100px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleBooking}
                    disabled={!fullName || !phone || !email || !date}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    REQUEST A QUOTE
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;
