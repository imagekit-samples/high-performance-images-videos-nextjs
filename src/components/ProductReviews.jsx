import { FaStar } from 'react-icons/fa';
import Media from "@/components/Media";

const ProductReviews = ({ reviews }) => {
  return (
    <div className="max-w-[1200px] mx-auto p-5 bg-white mt-10">
      <h2 className="text-2xl uppercase font-bold mb-8">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 flex items-start">
            <Media
              contentType="image"
              src={review.userImage}
              alt={`${review.userName}'s profile`}
              className="w-12 h-12 rounded-full mr-4 hidden md:block"
              width="50"
              height="50"
              sizes="50px"
            />

            <div className="flex-1 flex-col md:flex md:items-left md:space-x-4">
              <h3 className="font-semibold">{review.userName}</h3>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color={index < review.rating ? "orange" : "gray"} />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">
                  Reviewed in {review.location} on {review.reviewDate}
                </span>
              </div>
              <p className="mt-2 md:mt-0">{review.text}</p>
            </div>

            <Media
              contentType="image"
              src={review.reviewImage}
              alt={`${review.userName}'s review image`}
              className="w-24 h-24 ml-4 md:ml-0 md:mt-4"
              width="96" height="96"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductReviews;
