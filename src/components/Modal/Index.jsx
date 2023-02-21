import SearchUser from "../SearchUser";
import styles from "./index.module.scss";

const Modal = ({ setModalEnabled }) => {
  const onHandleModal = () => setModalEnabled(false);

  return (
    <div className={styles.overlay}>
      <button onClick={onHandleModal}>X</button>
      <div className={styles.Modal}>
        <SearchUser />
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
  );
};

export default Modal;
