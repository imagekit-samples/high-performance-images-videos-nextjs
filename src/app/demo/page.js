import productData from '@/app/productData.json';
import ProductGallery from '@/components/ProductGallery';
import ProductDetails from "@/components/ProductDetails";
import SimilarProducts from "@/components/SimilarProducts";
import ProductReviews from "@/components/ProductReviews";

const Page = () => {
    return (
        <>
            <div className="grid grid-cols-2 mt-30 max-w-[1200px] mx-auto p-5 gap-5">
                {/* Product Gallery Section */}
                <ProductGallery media={productData.media} />

                {/* Product Details Section */}
                <ProductDetails product={productData} />
            </div>

            <ProductReviews reviews={ productData.reviews } />
            <SimilarProducts products={ productData.similarProducts } />
            
        </>
    );
};

export default Page;
