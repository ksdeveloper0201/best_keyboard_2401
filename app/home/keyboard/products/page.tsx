import IndexCard from "@/components/IndexCard";


const products: Product[] = [
    { id: 1, name: '商品1', description: '商品1の説明', price: 1000, image: '/product1.jpg' },
    { id: 2, name: '商品2', description: '商品2の説明', price: 2000, image: '/product2.jpg' },
    // 他の商品情報も追加
];

const ProductsPage: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <IndexCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsPage;