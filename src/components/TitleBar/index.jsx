import styles from "./index.module.scss";

const TitleBar = ({ title }) => {
  return (
    <div className={styles.TitleBar}>
      <div>
        <div className={styles.contain}>
          {/* <img className={styles.logo} src="" alt="logo"></img> */}
          <div className={styles.description}>
            <div className={styles.text}>
              <h2>{title}</h2>
              <input placeholder="cerca..."></input>
            </div>
            <div className={styles.buttons}>
              <button>I tuoi film</button>
              <button>Lista</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
