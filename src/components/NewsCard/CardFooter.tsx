import React from "react";
import appIconId from "/icons.svg";
import styles from "./CardFooter.module.scss";

interface CardFooterProps {
  onSend: () => void;
  onEdit: () => void;
  onDelete: () => void;
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const CardFooter: React.FC<CardFooterProps> = ({
  onSend,
  onEdit,
  onDelete,
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__action}>
        <button className={styles.footer__actionButton} onClick={onSend}>
          Отправить
          <svg className={styles.footer__icon}>
            <use href={`${appIconId}#down`} />
          </svg>
        </button>
        <button className={styles.footer__editButton} onClick={onEdit}>
          <svg className={styles.footer__icon}>
            <use href={`${appIconId}#edit`} />
          </svg>
        </button>
        <button className={styles.footer__deleteButton} onClick={onDelete}>
          <svg className={styles.footer__icon}>
            <use href={`${appIconId}#trash`} />
          </svg>
        </button>
      </div>
      <div className={styles.footer__pagination}>
        <span>
          {currentPage}/{totalPages}
        </span>
        <div className={styles.footer__paginationContainer}>
          <button
            className={styles.footer__paginationButton}
            onClick={onPrevPage}
            disabled={currentPage <= 1}
          >
            <svg className={styles.footer__icon}>
              <use href={`${appIconId}#arrow-left`} />
            </svg>
          </button>
          <button
            className={styles.footer__paginationButton}
            onClick={onNextPage}
            disabled={currentPage >= totalPages}
          >
            <svg className={styles.footer__icon}>
              <use href={`${appIconId}#arrow-right`} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
