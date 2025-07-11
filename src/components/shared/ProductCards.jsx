export default function ProductCards({ product }) {
  return (
    <div className="max-w-sm rounded-md shadow text-xl font-semibold text-balance p-8 space-y-4">
      <div className="lg:h-60">
        <img
          src={product.image}
          alt={product.title}
          className="h-2/3 object-cover object-center mx-auto"
        />
      </div>
      <h1 className="line-clamp-1">{product.title}</h1>
      <p className="line-clamp-2 text-base font-normal">
        {product.description}
      </p>
      <p className="text-base font-normal">
        price: <span className="font-medium">{product.price}</span>{" "}
      </p>
    </div>
  );
}
