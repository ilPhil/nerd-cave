import styles from "./index.module.scss";

const TitleBar = ({ title }) => {
  return (
    <div className={styles.TitleBar}>
      <div>
        <div className={styles.contain}>
          <div className={styles.description}>
            <div className={styles.text}>
              <div className={styles.title}>
                <img src="" alt="title_logo"></img>
                <h2>{title}</h2>
              </div>
              <input placeholder="cerca..."></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
