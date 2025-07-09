import Navlink from "./NavLink";

const links = [
  { route: "/", routeName: "home" },
  { route: "/about-us", routeName: "about us" },
  { route: "/our-teams", routeName: "our teams" },
  { route: "/contact-us", routeName: "contact us" },
];
export default function Navbar() {
  return (
    <div className={`sm:flex gap-4 hidden`}>
      {links.map((link) => (
        <Navlink
          key={link.route}
          route={link.route}
          routeName={link.routeName}
        />
      ))}
    </div>
  );
}
