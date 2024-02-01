import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import styles from './ProductsPage.module.css'; // CSSモジュールをインポート

const products: Product[] = [
    { id: 1, name: 'HHKB', description: 'キーボード界のレジェンド', price: 35000, image: '/images/hhkb-image.jpg', separable: false, keyTypeId: "3", madeById: "2" },
    { id: 2, name: 'corne cherry', description: 'キーボード界のゲームチェンジャー', price: 20000, image: '/images/corne-cherry.jpg' },    // 他の商品情報も追加
    { id: 1, name: 'HHKB', description: 'キーボード界のレジェンド', price: 35000, image: '/images/hhkb-image.jpg', separable: false, keyTypeId: "3", madeById: "2" },
    { id: 2, name: 'corne cherry', description: 'キーボード界のゲームチェンジャー', price: 20000, image: '/images/corne-cherry.jpg' },    // 他の商品情報も追加
    { id: 1, name: 'HHKB', description: 'キーボード界のレジェンド', price: 35000, image: '/images/hhkb-image.jpg', separable: false, keyTypeId: "3", madeById: "2" },
    { id: 2, name: 'corne cherry', description: 'キーボード界のゲームチェンジャー', price: 20000, image: '/images/corne-cherry.jpg' },    // 他の商品情報も追加
];

const ProductsPage: React.FC = () => {
    return (
        <div className={`container mx-auto mb-4 p-4 ${styles.productsGrid}`}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsPage;