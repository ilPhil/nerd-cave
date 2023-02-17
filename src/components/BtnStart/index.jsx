import style from "./index.module.scss";
import imgStart from "./start.png";
import Image from "next/image";

const Start = ({ setPressed }) => {
  return (
    <div className={style.Start}>
      <button className={style.btn} onClick={() => setPressed(true)}>
        <Image src={imgStart} width={300} height={300} />
      </button>
      <div className={style.controls}>
        <div className={style.dpad}>
          <div className={style.up}></div>
          <div className={style.side}>
            <div className={style.left}></div>
            <div className={style.right}></div>
          </div>
          <div className={style.down}></div>
        </div>
        <div className={style.ab}>
          <div className={style.btnB}>
            <div className={style.b}>B</div>
          </div>
          <div className={style.btnA}>
            <div className={style.a}>A</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
