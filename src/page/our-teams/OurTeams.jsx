import Cards from "../../components/shared/Cards";
import MyPic from "../../assets/my-pic.png";

const team = [
  {
    name: "Purna Bahadur Shrestha",
    role: "Frontend & Backend Developer",
    image: MyPic,
    bio: "Focused on building responsive, accessible, and modern web applications using React, Tailwind CSS, and RESTful APIs.",
    social: {
      linkedin: "https://www.linkedin.com/in/purna-s-a7a053288/",
      github: "https://github.com/nuastha",
    },
  },
];

export default function OurTeam() {
  return (
    <section className="py-18 bg-gray-100 text-center">
      <div className="container mx-auto space-y-4 px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <Cards team={team} />
      </div>
    </section>
  );
}
