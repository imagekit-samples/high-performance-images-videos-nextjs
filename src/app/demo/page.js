import productData from "@/app/productData.json";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import SimilarProducts from "@/components/SimilarProducts";
import ProductReviews from "@/components/ProductReviews";
import Media from "@/components/Media";

const Page = () => {
  return (
    <>
      <div className="mt-35 mx-auto max-w-[1000px]">
        <Media
          contentType="image"
          src="https://d1o2glsg6m692z.cloudfront.net/ecom/banners/banner.gif"
          alt="Sale banner"
          width="1000"
          height="168"
        />
      </div>

      <div className="grid grid-cols-2 max-w-[1200px] mx-auto p-5 gap-5">
        {/* Product Gallery Section */}
        <ProductGallery media={productData.media} />

        {/* Product Details Section */}
        <ProductDetails product={productData} />
      </div>

      <ProductReviews reviews={productData.reviews} />
      <SimilarProducts products={productData.similarProducts} />

    </>
  );
};

export default Page;
