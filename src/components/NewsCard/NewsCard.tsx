import React from "react";
import { NewsCard as NewsCardType } from "../../types/NewsCard";
import ReliabilityBadge from "./ReliabilityBadge";
import CardStats from "./CardStats";
import SocialIcon from "./SocialIcon";
import appIconId from "/icons.svg";

import styles from "./NewsCard.module.scss";

interface Props {
  data: NewsCardType;
  onExpand: () => void;
  className?: string;
}

const NewsCard: React.FC<Props> = ({ data, onExpand }) => {
  const handleCardClick = () => {
    onExpand();
  };

  return (
    <div onClick={handleCardClick}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          {data.isNew && (
            <div className={styles.card__status}>
              <span className={styles.card__newLabel}>{data.statusLabel}</span>
            </div>
          )}
          <div className={styles.card__duplicates}>
            {data.actions.duplicatesAvailable && (
              <span>{`Дублей: ${data.actions.duplicatesCount}`}</span>
            )}
          </div>
          {data.actions.isLocked && (
            <svg className={styles.card__icon}>
              <use href={`${appIconId}#lock`} />
            </svg>
          )}
        </div>

        <p className={styles.card__description}>{data.content.slice(0, 103)}...</p>

        <ReliabilityBadge reliability={data.reliability} />

        {data.location && (
          <div className={styles.card__location}>
            <svg className={styles.card__icon}>
              <use href={`${appIconId}#location`} />
            </svg>
            {data.location}
          </div>
        )}

        <CardStats
          views={data.stats.views}
          likes={data.stats.likes}
          comments={data.stats.comments}
          reposts={data.stats.reposts}
        />

        {data.actions.messagesCount > 0 && (
          <button className={styles.card__expandButton} onClick={onExpand}>
            Смотреть еще {data.actions.messagesCount} сообщений в группе
            <svg className={styles.card__icon}>
              <use href={`${appIconId}#arrow-right`} />
            </svg>
          </button>
        )}

        <hr className={styles.card__separator} />

        <div className={styles.card__userInfo}>
          <SocialIcon network={data.author.socialNetwork} />
          <div className={styles.card__authorDetails}>
            <span className={styles.card__authorName}>{data.author.name}</span>
            <span className={styles.card__authorDate}>
              {data.author.date} {data.author.time}
            </span>
          </div>
          <svg className={`${styles.card__icon} ${styles.card__fakeChecker}`}>
            <use href={`${appIconId}#fake-checker`} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
