import style from "./index.module.scss";

const Loader = () => {
  return (
    <div className={style.content}>
      <div className={style.content__container}>
        <p className={style.content__container__text}>Waiting for</p>

        <ul className={style.content__container__list}>
          <li className={style.content__container__list__item}>planning</li>
          <li className={style.content__container__list__item}>drawing</li>
          <li className={style.content__container__list__item}>building</li>

          <li className={style.content__container__list__item}>showing</li>
        </ul>
      </div>
    </div>
  );
};

export default Loader;
