import style from "./index.module.scss";
import logoNC from "./LogoNerdCave.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className={style.Login}>
      <div className={style.logo}>
        <Image src={logoNC} alt="LogoNerdCave" width={350} height={350} />
      </div>
      <div className={style.text}>
        <h2>LOGIN</h2>
      </div>
      <div className={style.container}>
        <button className={style.btn}>Sign up with Google</button>
      </div>
    </div>
  );
};

export default Login;
