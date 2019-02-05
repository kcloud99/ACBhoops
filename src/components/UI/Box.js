import React from "react";
import PropTypes from "prop-types";
import styles from "./Box.module.scss";

function Box({ winnner, loser }) {
  return (
    <div className={styles.container}>
      <div className={styles.teams} />
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
