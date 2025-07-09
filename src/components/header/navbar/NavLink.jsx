import { NavLink } from "react-router-dom";

export default function Navlink({ route, routeName }) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => {
        const active = isActive
          ? "text-blue-600"
          : "text-gray-600 hover:text-blue-600";

        return `relative inline-block px-3 py-2 capitalize leading-relaxed tracking-wider font-medium group ${active}`;
      }}
    >
      <span className="relative z-10">{routeName}</span>
      <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left transform transition-transform duration-300 bg-blue-600 scale-x-0 group-[.text-blue-600]:scale-x-100 group-hover:scale-x-100"></span>
    </NavLink>
  );
}
