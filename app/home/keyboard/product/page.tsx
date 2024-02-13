import React from "react";
import Image from 'next/image';
import styles from './ProductPage.module.css';

const product = {
    id: '890572',
    name: 'HHKB Professional HYBRID Type-S',
    description: '静音モデルの最高峰。打鍵感と静かさを両立。',
    price: '¥28,500',
    image: '/images/hhkb-image.jpg',
    maker: 'リコー',
    category: 'キーボード',
    key_type: '静電容量無接点方式',
    key_count: '60%',
    separable: "一体型",
    programable: "一部可能",
    connecting: ['bluetooth', 'code']
};

const ProductPage: React.FC = () => {
    return (
        <div className="md:flex flex-row items-start p-4">
            <div className="flex-2 p-4">
                <Image src={product.image} alt={product.name} width={600} height={400} />
            </div>
            <div className="flex-2 p-4 flex-col gap-y-8">
                <p className="text-center">lifesaddle</p>
                <div className="base-info text-center my-8">
                    <h1 className="font-bold text-2xl m-4">{product.name}</h1>
                    <p className="text-blue-500 font-bold text-xl">{product.price}</p>
                </div>
                <div className="my-8 flex justify-center items-center hover:bg-gray-100"><a className="border block text-center h-12 w-full flex justify-center items-center" href="">お気に入りに追加</a></div>
                <div className="my-8">
                    <p className="border-y p-4">製品説明</p>
                    <p className="mt-4">{product.description}</p>
                </div>
                <div className="my-8">
                    <p className="border-y p-4">製品詳細</p>
                    <div className="mt-4 space-y-2" >
                        <div><span className="w-1/4 inline-block md:w-2/5">メーカー:</span><div className="inline">{product.maker}</div></div>
                        <div><span className="w-1/4 inline-block md:w-2/5">カテゴリー:</span><div className="inline">{product.category}</div></div>
                        <div><span className="w-1/4 inline-block md:w-2/5">キー数:</span><div className="inline">{product.key_count}</div></div>
                        <div><span className="w-1/4 inline-block md:w-2/5">キータイプ:</span><div className="inline">{product.key_type}</div></div>
                        <div><span className="w-1/4 inline-block md:w-2/5">一体型・分割:</span><div className="inline">{product.separable}</div></div>
                        <div><span className="w-1/4 inline-block md:w-2/5">REMAP:</span><div className="inline">{product.programable}</div></div>
                        <div><span className="w-1/4 inline-block md:w-2/5">接続方法:</span><div className="inline">{product.connecting}</div></div>
                    </div>
                </div>
                {/* ここに購入ボタンやその他の情報を追加 */}


            </div>
        </div>
    );
}

export default ProductPage;