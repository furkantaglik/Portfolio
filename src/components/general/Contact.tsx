import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact">
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-5">
        CONTACT
      </h1>
      <form
        className="grid md:grid-cols-2 max-w-2xl mx-auto mt-10 gap-x-10 gap-y-7"
        aria-labelledby="contact-form"
      >
        <h2 id="contact-form" className="sr-only">
          Contact Form
        </h2>

        <div className="gap-y-7 flex flex-col">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input
            id="name"
            placeholder="Enter your name"
            className="italic"
            required
          />

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            id="email"
            placeholder="Enter your email address"
            className="italic"
            type="email"
            required
          />

          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <Input
            id="subject"
            placeholder="Enter your subject"
            className="italic"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <Textarea
            id="message"
            rows={8}
            placeholder="Enter your message..."
            required
          />
        </div>
        <button
          type="submit"
          className="mt-5 bg-primary text-white p-3 rounded"
          aria-label="Send message"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
