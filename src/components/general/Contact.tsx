import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <section className="">
      <h1 className="text-3xl font-semibold text-center  border-b-2 border-secondary pb-2 mb-5">
        CONTACT
      </h1>
      <form className="grid md:grid-cols-2 max-w-2xl mx-auto mt-10  gap-x-10 gap-y-7">
        <div className="gap-y-7 flex flex-col">
          <Input placeholder="Enter your name" className="italic" />
          <Input
            placeholder="Enter your email address"
            className="italic"
            type="email"
          />
          <Input placeholder="Enter your subject" className="italic" />
        </div>
        <div>
          <Textarea rows={8} placeholder="Enter your message..." />
        </div>
      </form>
    </section>
  );
}
