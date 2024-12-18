import React from "react";
import styles from "./ReliabilityBadge.module.scss";
import appIconId from "/icons.svg";

interface Props {
  reliability: {
    label: string;
    percentage: number;
  };
}

const ReliabilityBadge: React.FC<Props> = ({ reliability }) => {
  const isTypicalFake = reliability.label === "Типичный фейк";
  const isFakeVideo = reliability.label === "Фальшивое видео";

  return (
    <div
      className={`${styles["reliability-badge"]} 
        ${isTypicalFake ? styles["reliability-badge__typical-fake"] : ""} 
        ${isFakeVideo ? styles["reliability-badge__fake-video"] : ""}`}
    >
      <span className={styles["reliability-badge__label"]}>{reliability.label}</span>
      <span className={styles["reliability-badge__percent"]}>
        {reliability.percentage}%
      </span>
      <svg className={styles["reliability-badge__info-icon"]}>
        <use href={`${appIconId}#info`} />
      </svg>
    </div>
  );
};

export default ReliabilityBadge;
