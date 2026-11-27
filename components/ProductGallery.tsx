'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const source = images.length ? images : ['/images/product-placeholder.svg'];

  return (
    <div className="detail-gallery">
      <div className="detail-thumbs">
        {source.map((image, index) => (
          <button className={index === active ? 'detail-thumb is-active' : 'detail-thumb'} key={image} onClick={() => setActive(index)} type="button" aria-label={`${name} зураг ${index + 1}`}>
            <Image src={image} alt="" fill sizes="88px" />
          </button>
        ))}
      </div>
      <div className="detail-main">
        <Image src={source[active]} alt={name} fill sizes="(max-width: 760px) 90vw, 560px" priority />
      </div>
    </div>
  );
}
