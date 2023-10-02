import styles from '../styles/message.module.css'
export default function Message(params) {
    return(
        <>
            <div className={styles.container}>
                {params.data}
            </div>
        </>
    )
}