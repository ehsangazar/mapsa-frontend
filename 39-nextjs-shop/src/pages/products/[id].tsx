import Layout from "@/containers/Layout/Layout"
import useFetch from "@/hooks/useFetch"
import { useRouter } from "next/router"

const SingleProduct = () => {
    const router = useRouter()
    const { id } = router.query
    const [data,loading] = useFetch(`https://fakestoreapi.com/products/${id}`)
    
    return (
        <Layout>
            <h1>Single Product</h1>
            {loading && <p>Loading...</p>}
            {data && (
                <div>
                <h1>{data.title}</h1>
            </div>
        )}
        </Layout>
    )
}

export default SingleProduct