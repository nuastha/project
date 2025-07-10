import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Cards({ team }) {
  return (
    <div className="flex justify-center">
      {team.map((member) => (
        <div key={member.name} className="max-w-sm bg-white p-6 rounded shadow">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="mt-2 text-gray-500">{member.bio}</p>
          <div className="mt-3 flex justify-center gap-4">
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="size-8 text-[#0A66C2]" />
            </a>
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="size-8" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
