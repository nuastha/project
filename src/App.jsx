import { Route, Routes } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import ContactUs from "./page/contact-us/ContactUs";
import AboutUs from "./page/about-us/AboutUs";
import OurTeams from "./page/our-teams/OurTeams";
import Products from "./page/fetching/Products";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-teams" element={<OurTeams />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
