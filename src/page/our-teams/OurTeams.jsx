import { useEffect, useState } from "react";
import Cards from "../../components/shared/Cards";
import MyPic from "../../assets/my-pic.png";
import axios from "axios";

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
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/products`
        );
        setProducts(res.data);
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to fetch products.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-18 bg-gray-100 text-center">
      <div className="container mx-auto space-y-4 px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <Cards team={team} />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white p-4 rounded shadow-md w-full md:w-1/2">
            <h4 className="text-xl font-semibold mb-2">Outgoing API Request</h4>
            {error && <p className="text-red-500">{error}</p>}
            {!error && products.length === 0 && <p>Loading products...</p>}
            <ul className="text-left list-disc list-inside">
              {products.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
