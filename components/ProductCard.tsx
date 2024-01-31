import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from "react"
import Image from "next/image";

const defaultImage = "/images/default-keyboard.jpeg"

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <>
            <Card >
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <Image src={product.image || defaultImage} alt="keyboard-image" width={500} height={300} />
                </CardHeader>
                <CardContent>
                    <p>{product.price}</p>
                    <p>{product.keyCount}</p>
                    <p>{product.separable}</p>
                    <CardDescription>Card Description</CardDescription>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card >

        </>
    )
}

export default ProductCard;
