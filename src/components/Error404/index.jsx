import style from "./index.module.scss";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className={style.Error}>
      <div className={style.text}>
        <h2 className={style.vibrate}>
          Error quattrozeroquattro: Page not found
        </h2>
        <div className={style.writer}>
          <p>
            Smarrita la retta via? Torna alla <Link href="/">HOME</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
