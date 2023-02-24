import styles from "./index.module.scss";
import { AiOutlineMessage } from "react-icons/ai";
import LastMessagesList from "../LastMessagesList";
import SearchUser from "../SearchUser";

function MobileSidebarLastMessages({ node, setNode }) {
  return (
    <section className={styles.menu}>
      <div className={styles.hamburgerMenu}>
        <input className={styles.menu__toggle} type="checkbox" />
        <label htmlFor="menu__toggle">
          <AiOutlineMessage className={styles.menu__btn} />
        </label>

        <div className={styles.menu__box}>
          <AiOutlineMessage className={styles.menu__btn} />
          <SearchUser setNode={setNode} />
          <LastMessagesList node={node} setNode={setNode} />
        </div>
      </div>
    </section>
  );
}

export default MobileSidebarLastMessages;
