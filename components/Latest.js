import React from "react";
import { Carousel } from "react-bootstrap";
import Link from "next/link";

import styles from "../styles/Latest.module.css";

const Latest = (props) => {
  return (
    <>
      <div className={styles.latest}>
        <div className={styles.latest_sub}>
          <Carousel className={styles.carousel} indicators={false}>
            {props.posts ? (
              props.posts.map((data, index) => (
                <Carousel.Item className={styles.item} key={data.id}>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="First slide"
                  />

                  <Carousel.Caption className={styles.caption}>
                    <Link href={"/posts/" + data.id}>
                      <h3>{data.title}</h3>
                    </Link>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            ) : (
              <>Empty</>
            )}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Latest;
