import React from "react";

export default function Skills() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Software Development Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Software Development</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Languages</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>C#</li>
              <li>Python</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Frameworks</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>.NET Core</li>
              <li>Node.js / Express</li>
              <li>Fast API/Django</li>
              <li>React / Next.js</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Architecture</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Event-Driven Systems</li>
              <li>RESTful APIs</li>
              <li>Desktop Application development</li>
              {/* <li>Microservices</li>
              <li>Serverless</li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Infrastructure</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Azure</li>
              {/* <li>AWS</li> */}
              <li>Docker</li>
              {/* <li>Kubernetes</li> */}
              <li>CI/CD (GitHub Actions, Azure DevOps)</li>
            </ul>
          </div>
        </div>
        {/* Product Management Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Product Management</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Core Competencies</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Roadmapping & Strategy</li>
              <li>User Research & UX</li>
              <li>Agile Methodologies</li>
              <li>Stakeholder Management</li>
              <li>Go-to-Market Planning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tools</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Jira</li>
              <li>Confluence</li>
              <li>Figma</li>
              <li>Notion</li>
              <li>Slack</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
