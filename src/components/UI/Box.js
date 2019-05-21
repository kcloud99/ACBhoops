import React from "react";
import PropTypes from "prop-types";
import styles from "./Box.module.scss";

function Box({ winnner, loser }) {
  return (
    <div className={styles.container}>
      <div className={styles.teams}>
        <div className={styles.team}>
          <p className={styles.winner}>
            Winner <span>(2-0)</span>
          </p>
          <p className={styles.winner}>97</p>
        </div>
        <div className={styles.team}>
          <p>
            Loser <span>(0-2)</span>
          </p>
          <p>51</p>
        </div>
      </div>
      <div className={styles.scoring} />
      <div className={styles.links} />
    </div>
  );
}

Box.propTypes = {
  winner: PropTypes.object.isRequired,
  loser: PropTypes.object.isRequired
};

export default Box;
