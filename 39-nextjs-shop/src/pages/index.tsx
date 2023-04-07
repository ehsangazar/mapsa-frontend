import { useEffect } from "react"
import ProductList from "../containers/ProductList/ProductList"
import Layout from "../containers/Layout/Layout"
import useFetch from "@/hooks/useFetch"

interface Product {
    id: number
    title: string
    image: string
    description: string
    price: number
}

const Home = () => {
    const [products,loading] = useFetch('https://fakestoreapi.com/products')
    
    return (
        <Layout>
            {loading && <p>Loading...</p>}
            <ProductList products={products} />
        </Layout>
    )
}
export default Home