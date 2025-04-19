import { FaStar } from 'react-icons/fa';
import ColorSwatch from './ColorSwatch';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ProductDetails = ({ product }) => {
  return (
    <main className="col-span-2 md:col-span-1 p-5 bg-white">
      <h2 className="text-sm text-gray-500">{product.category}</h2>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <div className="flex items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color={index < product.rating ? "orange" : "gray"} />
          ))}
        </div>
        <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
      </div>
      <p className="text-2xl text-gray-800 mb-10">{product.currency} {product.price}</p>
      <div className="mb-10">
        <ColorSwatch colors={product.colors} />
      </div>
      <div className="flex items-center mb-10">
        <div className="flex border">
          <div className="flex">
            <button className="border-b p-1">-</button>
            <span className="p-2 px-5">1</span>
            <button className="p-1">+</button>
          </div>
        </div>
        <button className="bg-black text-white p-2 ml-4 flex-1">ADD TO SHOPPING CART</button>
      </div>
      <ul className="list-disc pl-5 text-gray-700 text-md mb-4">
        {product.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">Specifications</AccordionTrigger>
          <AccordionContent>
            Bag specifications will be here
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md">Shipping</AccordionTrigger>
          <AccordionContent>
            Shipping Information will be here
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md">Returns</AccordionTrigger>
          <AccordionContent>
            Returns information will be here
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

export default ProductDetails;
