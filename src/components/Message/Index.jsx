import styles from "./index.module.scss";

const Message = () => {
    return (
        <div className={styles.Message}>
            <img
          className={styles.userImg}
          src="https://picsum.photos/60/60"
          alt="user"
        />
            <div className={styles.text}>
                <span>
                    <h3>Edoarda</h3>
                    <p>Oggi alle 13.06</p>
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptatem temporibus
                 quaerat molestiae repellendus quidem similique ipsam est 
                consequatur id incidunt nemo nulla quos deserunt laboriosam officiis nihil, enim cumque.</p>
            </div>
        </div>
    )
};

export default Message;