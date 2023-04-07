import Link from "next/link"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.Header}>
            <h1>SHOP</h1>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header