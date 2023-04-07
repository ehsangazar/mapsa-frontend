import styles from './H1.module.css'

interface H1Props {
    children: React.ReactNode
}


const H1 = ({
    children
}: H1Props) => {
    return (
        <h1 className={styles.H1}>
            {children}
        </h1>
    );
}

export default H1