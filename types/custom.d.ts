interface Product {
    id: number;
    name: string;
    price: string | number;
    keyCount?: number;
    image?: string;
    description?: string;
    separable?: boolean;
    keyTypeId?: string;
    connectById?: string;
    madeById?: string;
    createdAt?: number;
    updatedAt?: number;
}

interface ProductCardProps {
    product: Product;
}
