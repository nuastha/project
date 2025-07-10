import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import MyPic from "../../assets/my-pic.png";

export default function AboutUs() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 text-left flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <h3 className="text-xl font-semibold text-blue-600">
            Full-Stack Web Developer
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I'm <strong>Purna Bahadur Shrestha</strong>, a passionate web
            developer focused on building responsive, accessible, and
            user-friendly web applications. I specialize in both frontend and
            backend development, with a growing interest in modern CSS
            techniques, React components, and API integration.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I enjoy crafting clean UI, exploring Tailwind CSS, and solving
            real-world problems through code. This project reflects my
            commitment to continuous learning and delivering high-quality
            digital experiences.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className=" rounded hover:scale-110 transition-transform"
            >
              <BsLinkedin className="size-10 text-[#0A66C2]" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded hover:scale-110 transition-transform"
            >
              <BsGithub className="size-10 text-gray-800" />
            </a>
          </div>

          <Link
            to="/contact-us"
            className="inline-block mt-6 px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center relative select-none">
          <div className="absolute inset-0 w-1/2 h-full translate-x-44 rounded-full bg-white/40 shadow-[0_0_60px_30px_rgba(255,255,255,0.5)] backdrop-blur-md z-10 animate-pulse" />
          <img
            src={MyPic}
            alt="Purna Bahadur Shrestha"
            className="block w-full brightness-110 contrast-110 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
