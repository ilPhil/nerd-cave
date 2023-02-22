import SearchUser from "../SearchUser";
import styles from "./index.module.scss";

const Modal = ({ setModalEnabled, setNode }) => {
  const onHandleModal = () => setModalEnabled(false);

  return (
    <div className={styles.overlay}>
      <div className={styles.Modal}>
        <div className={styles.bar}>
          <button onClick={onHandleModal}>X</button>
          <SearchUser setNode={setNode} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
