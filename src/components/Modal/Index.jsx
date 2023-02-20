import styles from "./index.module.scss";

const Modal = () => {
    return (
        <div className={styles.overlay}>
         <div className={styles.Modal}>
            <input placeholder="Cerca..."></input>
            <div className={styles.utentList}>
                <div className={styles.utent}>
                  <img src="https://picsum.photos/50/50?1" alt="logo_utente"></img>
                  <h3>Nome utente 1</h3>
                </div>
                <div className={styles.utent}>
                  <img src="https://picsum.photos/50/50?2" alt="logo_utente"></img>
                  <h3>Nome utente 2</h3>
                </div>
            </div>
         </div>
        </div>
    )
};

export default Modal;