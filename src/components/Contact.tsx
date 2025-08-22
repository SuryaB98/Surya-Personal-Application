import React, { useState } from "react";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Let's Build Together.</h2>
      <div className="text-center mb-6">
        <span className="font-bold text-lg">Surya Balasubramaniyan</span>
      </div>
      <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="border rounded px-4 py-2"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="border rounded px-4 py-2"
        />
        <button type="submit" className="bg-blue-600 text-white rounded-full px-6 py-2 font-semibold hover:bg-blue-700 transition-colors">
          Send Message
        </button>
        {status && <p className="text-center mt-2 text-sm text-gray-700">{status}</p>}
      </form>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
        <a href="https://www.linkedin.com/in/surya-balasubramanian-10034a152/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">LinkedIn</a>
        <a href="https://github.com/SuryaB98" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium hover:underline">GitHub</a>
        <a href="/resume.pdf" download className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 font-medium hover:bg-gray-300 transition-colors">Download Resume</a>
      </div>
    </section>
  );
}
