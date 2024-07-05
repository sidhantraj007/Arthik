import Card from "./Card";

import styles from "../styles/Card.module.scss";

const CardSection = (props) => {
  return (
    <>
      <div className={styles.band}>
        {props.posts ? (
          props.posts.map((data, index) => (
            <Card key={data.id} id={data.id} title={data.title} />
          ))
        ) : (
          <>Empty</>
        )}
      </div>
    </>
  );
};

export default CardSection;
