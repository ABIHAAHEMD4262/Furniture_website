import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define an async function to fetch and filter products from Sanity
async function fetchProducts() {
  const allProducts = await client.fetch(`*[_type == 'product']`);

  // Filter products with IDs between 1 and 21
  const filteredProducts = allProducts.filter((product: any) => {
    const id = parseInt(product.id, 10); // Convert string ID to number
    return id >= 1 && id <= 21;
  });

  return filteredProducts;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    
    <div className="container mx-auto p-4">
        {/* Hero Section */}
      <div className="relative w-full h-[316px] bg-cover bg-center bg-[url('/images/shop.png')]">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={77}
            height={77}
            className="mb-0"
          />
          <h1 className="text-5xl font-medium text-black mb-2">Shop</h1>
          <p className="text-base font-medium text-black">
            <b>Home &gt;</b> Shop
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <div className="border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105" key={product._id}>
            <img
              className="w-full h-80 object-cover mb-2" // Increased height
              src={product.imagePath}
              alt={product.name}
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-bold">
              Price: <strong>${product.price}</strong>
            </p>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-600">Stock Level: {product.stockLevel}</p>
            <p className="text-gray-600">
              Featured: {product.isFeaturedProduct ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}