import React from "react";


const IndexCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-auto" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-gray-900 font-bold">{product.price}</p>
            </div>
        </div>
    );
}

export default IndexCard;