import styles from "./index.module.scss";

const SingleMessage = () => {
    return (
        <div className={styles.SingleMessage}>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nam luctus risus tortor,
                 ut facilisis diam pharetra eu. Aliquam fringilla arcu odio.
                  Nunc laoreet lectus . ❤️ ❤️ ❤️
            </p>
            <p>Oggi alle 16.03</p>
        </div>
    )
};

export default SingleMessage;