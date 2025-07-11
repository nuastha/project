import { useEffect, useState } from "react";
import api from "../../api/http";
import ProductCards from "../../components/shared/ProductCards";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to fetch products.");
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="bg-white py-12">
      <div className=" container mx-auto px-4 md:px-6 lg:px-8">
        <h4 className="text-xl font-semibold mb-2">Outgoing API Request</h4>
        {error && <p className="text-red-500">{error}</p>}
        {!error && products.length === 0 && <p>Loading products...</p>}
        <div className="flex container flex-wrap gap-6">
          {products.map((product) => (
            <ProductCards product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
