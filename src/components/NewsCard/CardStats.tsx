import React from "react";
import styles from "./CardStats.module.scss";
import appIconId from "/icons.svg";

interface Props {
  views: number;
  likes: number;
  comments: number;
  reposts: number;
  className?: string;
}

const CardStats: React.FC<Props> = ({ views, likes, comments, reposts, className }) => (
  <div className={`${styles.cardStats} ${className}`}>
    <span className={styles.cardStats__iconWrapper}>
      <svg className={styles.cardStats__icon}>
        <use href={`${appIconId}#eye`} />
      </svg>
      {views}
    </span>
    <span className={styles.cardStats__iconWrapper}>
      <svg className={styles.cardStats__icon}>
        <use href={`${appIconId}#like`} />
      </svg>
      {likes}
    </span>
    <span className={styles.cardStats__iconWrapper}>
      <svg className={styles.cardStats__icon}>
        <use href={`${appIconId}#message`} />
      </svg>
      {comments}
    </span>
    <span className={styles.cardStats__iconWrapper}>
      <svg className={styles.cardStats__icon}>
        <use href={`${appIconId}#share`} />
      </svg>
      {reposts}
    </span>
  </div>
);

export default CardStats;
