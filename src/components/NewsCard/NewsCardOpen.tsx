import React from "react";
import { NewsCard as NewsCardType } from "../../types/NewsCard";
import ReliabilityBadge from "./ReliabilityBadge";
import CardStats from "./CardStats";
import SocialIcon from "./SocialIcon";
import appIconId from "/icons.svg";
import CardFooter from "./CardFooter";
import styles from "./NewsCardOpen.module.scss";

interface Props {
  data: NewsCardType;
  onClose: () => void;
  onAudioToggle: () => void;
}

const NewsCardOpen: React.FC<Props> = ({ data, onClose, onAudioToggle }) => {
  const handleSend = () => {
    console.log("Отправить");
  };

  const handleEdit = () => {
    console.log("Редактировать");
  };

  const handleDelete = () => {
    console.log("Удалить");
  };

  const handlePrevPage = () => {
    console.log("Назад");
  };

  const handleNextPage = () => {
    console.log("Вперед");
  };


  return (
    <div className={styles.cardOpen}>

      <div className={styles.cardOpen__header}>
        <h1 className={styles.cardOpen__title}>{data.title}</h1>
        <button className={styles.cardOpen__closeButton} onClick={onClose}>
          <svg className={styles.cardOpen__icon}>
            <use href={`${appIconId}#close`} />
          </svg>
        </button>
      </div>

      <hr className={styles.cardOpen__separator} />


      <div className={styles.cardOpen__infoRow}>
        {data.isNew && (
          <span className={styles.cardOpen__status}>{data.statusLabel}</span>
        )}
        {data.location && (
          <div className={styles.cardOpen__location}>
            <svg className={styles.cardOpen__icon}>
              <use href={`${appIconId}#location`} />
            </svg>
            {data.location}
          </div>
        )}
      </div>


      <CardStats
        views={data.stats.views}
        likes={data.stats.likes}
        comments={data.stats.comments}
        reposts={data.stats.reposts}
        className={styles.cardOpen__stats}
      />


      <ReliabilityBadge reliability={data.reliability} />


      <p className={styles.cardOpen__content}>{data.content}</p>


      {data.audioDuration ? (
        <div className={styles.cardOpen__audioSection}>
          <button
            onClick={onAudioToggle}
          >
            <svg className={`${styles.cardOpen__icon} ${styles.cardOpen__audioButton}`}>
              <use href={`${appIconId}#pause`} />
            </svg>
          </button>
          <span className={styles.cardOpen__audioDuration}>{data.audioDuration}</span>
          <div className={styles.cardOpen__tagAndFlag}>
            <svg className={styles.cardOpen__icon}>
              <use href={`${appIconId}#tag`} />
            </svg>
            {/* Добавляем флаг */}
            <svg className={styles.cardOpen__flagIcon}>
              <use href={`${appIconId}#flag`} />
            </svg>
          </div>
        </div>
      ) : (
        <p>Аудио отсутствует</p>
      )}


      <button className={styles.cardOpen__hideDuplicatesButton}>
        <svg className={`${styles.cardOpen__icon}`}>
          <use href={`${appIconId}#copy`} />
        </svg>Показать дубли</button>
      <hr className={styles.cardOpen__separator__small} />

      <div className={styles.cardOpen__userInfo}>
        <SocialIcon network={data.author.socialNetwork} />
        <div className={styles.cardOpen__authorDetails}>
          <span className={styles.cardOpen__authorName}>{data.author.name}</span>
          <span className={styles.cardOpen__authorDate}>
            {data.author.date} {data.author.time}
          </span>
        </div>
        <svg className={`${styles.cardOpen__icon} ${styles.cardOpen__fakeChecker}`}>
          <use href={`${appIconId}#fake-checker`} />
        </svg>
      </div>
      <hr className={styles.cardOpen__separator} />
      <CardFooter
        onSend={handleSend}
        onEdit={handleEdit}
        onDelete={handleDelete}
        currentPage={1}
        totalPages={5}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>

  );
};

export default NewsCardOpen;
