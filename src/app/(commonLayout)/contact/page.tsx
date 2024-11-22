"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Input, Textarea } from "@nextui-org/input";
import React, { useEffect } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [state, handleSubmit] = useForm("xbjvlqkk");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for messaging");
    }
  }, [state.succeeded]);

  return (
    <div className="w-full max-w-screen-xl mx-auto lg:flex lg:mt-5 p-6 lg:p-16 items-center text-default-800">
      <div className="lg:w-1/2 lg:px-4 mb-8 lg:mb-0">
        <div>
          <h2 className="text-3xl font-bold">Let&rsquo;s Connect</h2>
          <p className="mt-6 text-justify text-lg">
            Feel free to reach out to me through the contact information
            provided on this website or connect with me on social media
            platforms. I believe that great ideas and innovations often emerge
            from the connections we make, so let&#39;s start a conversation and
            see where it leads.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 lg:px-4 lg:pl-10">
        <h2 className="text-3xl font-bold mb-6 mt-10 lg:mt-0 text-center">
          Message Me
        </h2>
        <form
          className="space-y-6 w-full max-w-md mx-auto lg:w-4/5"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label className="block text-sm font-medium mb-2 " htmlFor="email">
              Email
            </label>
            <Input
              fullWidth
              id="email"
              name="email"
              placeholder="Enter your email address"
              type="email"
              variant="bordered"
            />
            <ValidationError
              errors={state.errors}
              field="email"
              prefix="Email"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-sm font-medium mb-2 text-default-800"
              htmlFor="message"
            >
              Message
            </label>
            <Textarea
              className="w-full"
              id="message"
              name="message"
              placeholder="Enter your message"
              variant="bordered"
            />
            <ValidationError
              errors={state.errors}
              field="message"
              prefix="Message"
            />
          </div>

          <div className="w-full">
            <button
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 disabled:bg-teal-300"
              disabled={state.submitting}
              type="submit"
            >
              {state.submitting ? "Sending..." : "SEND"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
