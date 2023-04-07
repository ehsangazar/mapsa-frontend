import Link from "next/link"
import styles from "./Card.module.css"
import H1 from "@/components/H1/H1"
import Image from "next/image"

interface CardProps {
    id: number
    title: string
    image: string
    description: string
    price: number
}


const Card = ({
    id,
    title,
    image,
    description,
    price
}: CardProps ) => {
    return (
        <div className={styles.Card}>
            <Link href={`/products/${id}`}>
                <H1>{title}</H1>
            </Link>
            <Image src={image} alt={title} />
            <p>{description.substring(0,100)}</p>
            <p className="price">{price}</p>
        </div>
    )
} 

export default Card