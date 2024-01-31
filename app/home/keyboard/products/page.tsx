import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import styles from './ProductsPage.module.css'; // CSSモジュールをインポート

const products: Product[] = [
    { id: 1, name: 'HHKB', description: 'キーボード界のヨーダ', price: 35000, image: '/images/hhkb-image.jpg' },
    { id: 2, name: 'corne cherry', description: 'キーボード界のゲームチェンジャー', price: 20000, image: '/images/corne-cherry.jpg' },
    // 他の商品情報も追加
];

const ProductsPage: React.FC = () => {
    return (
        <div className={`container mx-auto p-4 ${styles.productsGrid}`}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsPage;