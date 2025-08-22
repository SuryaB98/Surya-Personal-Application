import React from "react";

export default function Philosophy() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4 flex flex-col gap-10" id="philosophy">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">My Philosophy</h2>
      {/* Core Principles */}
      <ul className="flex flex-col sm:flex-row justify-center items-start gap-6 mb-8">
        <li className="flex items-center gap-3">
          <span role="img" aria-label="User">👤</span>
          <span className="font-semibold">User-Centric Design</span>
        </li>
        <li className="flex items-center gap-3">
          <span role="img" aria-label="Tech">💡</span>
          <span className="font-semibold">Technical Excellence</span>
        </li>
        <li className="flex items-center gap-3">
          <span role="img" aria-label="Agile">⚡</span>
          <span className="font-semibold">Agile Execution</span>
        </li>
        <li className="flex items-center gap-3">
          <span role="img" aria-label="Growth">🚀</span>
          <span className="font-semibold">Continuous Growth</span>
        </li>
      </ul>
      {/* Engineer-Product Hybrid */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">The Engineer-Product Hybrid</h3>
        <p className="text-gray-700 mb-4">
          I bridge the gap between engineering and product, ensuring that every technical decision aligns with user needs and business goals.
        </p>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
          "I believe the best products are built when technical architecture and user needs are developed in tandem. My experience allows me to write the code and write the roadmap."
        </blockquote>
      </div>
      {/* Future Vision */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Future Vision</h3>
        <p className="text-gray-700">
          My ambition is to build companies and innovative projects that shape the future of technology and empower people worldwide.
        </p>
      </div>
    </section>
  );
}
