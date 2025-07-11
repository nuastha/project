import AboutUs from "../about-us/AboutUs";
import OurTeams from "../our-teams/OurTeams";
import ContactUs from "../contact-us/ContactUs";
import Slider from "../../components/slider/Slider";
export default function HomePage() {
  return (
    <div className="">
      <Slider />
      <AboutUs />
      <OurTeams />
      <ContactUs />
    </div>
  );
}
