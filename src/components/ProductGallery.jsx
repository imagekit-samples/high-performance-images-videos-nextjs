'use client';

import React, { useState } from 'react';
import Media from "@/components/Media";

const ProductGallery = ({ media }) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedMediaIndex(index);
  };

  return (
    <aside className="col-span-2 md:col-span-1 max-h-[800px] p-5 bg-white">
      <div className="mb-2 aspect-square relative">
        {media.length > 0 && media[selectedMediaIndex].type === 'image' && (
          <Media
            contentType={media[selectedMediaIndex].type}
            src={media[selectedMediaIndex].url}
            alt={media[selectedMediaIndex].alt}
            className="object-cover w-full h-full"
            width="500"
            height="500"
          />
        )}
        {media.length > 0 && media[selectedMediaIndex].type === 'video' && (
          <Media
            contentType={media[selectedMediaIndex].type}
            src={media[selectedMediaIndex].url}
            poster={media[selectedMediaIndex].thumbUrl}
            className="absolute inset-0 w-full h-full bg-[#F7F7F7]"
            width="500"
            height="500"
            loop muted autoPlay controls
          />
        )}
      </div>

      <div className="grid grid-cols-6 grid-flow-row gap-2">
        {media.map((item, index) => (
          <div key={index} className={`col-span-1 max-h-24 bg-[#F7F7F7] overflow-hidden items-center justify-center ${selectedMediaIndex === index ? 'border-1 border-slate-200' : ''}`}
          onClick={() => handleThumbnailClick(index)}>
            <Media
              contentType='image'
              src={item.type === 'image' ? item.url : item.thumbUrl}
              alt={item.alt}
              className="object-contain container h-full"
              width="100" height="100"
            />
          </div>
        ))}
      </div>
    </aside>
  )
}

export default ProductGallery;
