import { FaStar } from 'react-icons/fa';
import Media from "@/components/Media";

const SimilarProducts = ({ products }) => {
  return (
    <div className="max-w-[1200px] mx-auto p-5 bg-white mt-10">
      <h2 className="text-2xl uppercase font-bold mb-4">Similar Items</h2>
      <div className="flex grid md:grid-cols-4 grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="colspan-1">
            <Media
              contentType="image"
              src={product.productImage}
              alt={product.name}
              className="w-full" width="300" height="350"
            />
            <div className="mt-2">
              <p className="font-semibold">{product.name}</p>
              <p className="text-gray-600">${product.price}</p>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color={index < product.rating ? "orange" : "gray"} />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
