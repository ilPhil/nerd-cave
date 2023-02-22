import Spline from "@splinetool/react-spline";
import styles from "./index.module.scss";

export default function Scene({ setLoadScene }) {
  return (
    <Spline
      className={styles.room}
      scene="https://prod.spline.design/N3Iy6F4wAwAmjlD6/scene.splinecode"
      onLoad={() => setLoadScene(false)}
    />
  );
}
