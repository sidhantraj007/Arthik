import React from "react";
import Link from "next/link";

import styles from "../styles/Card.module.scss";

const Card = (props) => {
  return (
    <>
      <Link href={"/posts/" + props.id} passHref={true}>
        <div>
          <div className={styles.card}>
            <div
              className={styles.thumb}
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)",
              }}
            ></div>
            <article>
              <h1>{props.title}</h1>
              <div className={styles.author}>
                <span>Marie Gardiner</span>
              </div>
            </article>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
