import Card from "@/components/Card/Card"
import styles from "./ProductList.module.css"

interface Product {
    id: number
    title: string
    image: string
    description: string
    price: number
}

interface ProductListProps {
    products: Product[]
}


const ProductList = ({
    products
} : ProductListProps) => {
    return (
        <div className={styles.ProductList}>
            {products.map((product) => (
                <Card 
                    key={`product-${product.id}`}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    )
}

export default ProductList