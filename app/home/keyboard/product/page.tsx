import React from "react";
import Image from 'next/image';
import styles from './ProductPage.module.css';

const product = {
    id: '890572',
    name: 'HHKB Professional HYBRID Type-S',
    description: '静音モデルの最高峰。打鍵感と静かさを両立。',
    price: '¥28,500',
    image: '/images/hhkb-image.jpg',
};

const ProductPage: React.FC = () => {
    return (

        <div className="flex lfex-wrow items start p-20">
            <div className="flex-1 p-10">
                <Image src={product.image} alt={product.name} width={600} height={400}></Image>
            </div>
            <div className="flex-2 p-10">
                <p className="font-bold">{product.price}</p>
            </div>
        </div>
    )
}

export default ProductPage;