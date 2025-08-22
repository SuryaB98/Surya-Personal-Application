import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="flex flex-col sm:flex-row gap-8 items-center mb-10">
        <div className="relative w-32 h-32 rounded-full overflow-hidden shadow">
          <Image src="/images/headshot.jpg" alt="Professional Headshot" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-700 mb-2">
            Hi, I'm [Your Name], a passionate software engineer and product builder. I love solving complex problems, collaborating with diverse teams, and creating products that make a difference. Outside of work, I enjoy hiking, photography, and exploring new technologies.
          </p>
          <p className="text-gray-700">
            My long-term goal is to lead the development of innovative companies and products that empower people and shape the future of technology.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">Career Journey</h2>
      <div className="flex flex-col gap-8">
        {/* Example Experience - Add more as needed */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Senior Software Engineer, TechCorp</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Situation:</strong> TechCorp needed to scale its flagship product to support 10x user growth.</li>
            <li><strong>Task:</strong> Lead the migration to a microservices architecture and optimize performance.</li>
            <li><strong>Action:</strong> Architected and implemented scalable services, mentored a team of 6 engineers, and automated CI/CD pipelines.</li>
            <li><strong>Result:</strong> Achieved 99.99% uptime, reduced deployment time by 70%, and supported 100,000+ new users.</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Product Manager, InnovateX</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Situation:</strong> InnovateX wanted to launch a new SaaS platform in a competitive market.</li>
            <li><strong>Task:</strong> Define product strategy, lead cross-functional teams, and deliver MVP.</li>
            <li><strong>Action:</strong> Conducted user research, prioritized features, and coordinated development and marketing.</li>
            <li><strong>Result:</strong> Launched MVP in 4 months, acquired 500+ paying customers, and received industry recognition.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
