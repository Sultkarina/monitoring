import React, { useState, useCallback } from "react";
import { NewsCard as NewsCardType } from "../../types/NewsCard";
import { Draggable } from "@hello-pangea/dnd";
import appIconId from "/icons.svg";
import styles from "./CardsColumn.module.scss";

interface Props {
  cardsData: NewsCardType[];
  children: React.ReactNode;
  columnId: string;
  onPin: (columnId: string) => void;
  isPinned: boolean;
  index: number;
  title: string;
  count: number;
}

const CardsColumn: React.FC<Props> = ({
  children,
  columnId,
  onPin,
  isPinned,
  index,
  title,
  count,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handlePinClick = useCallback(() => {
    onPin(columnId);
    setIsMenuOpen(false);
  }, [onPin, columnId]);

  return (
    <Draggable draggableId={columnId} index={index} isDragDisabled={isPinned}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <div
          className={`${styles["cards-column__container"]} ${isPinned ? styles["cards-column__container--pinned"] : ""
            }`}
          style={{ order: isPinned ? -1 : 0 }}
          ref={innerRef}
          {...(isPinned ? {} : draggableProps)}
          {...(isPinned ? {} : dragHandleProps)}
        >
          <div className={styles["cards-column__header"]}>
            <h3 className={styles["cards-column__title"]}>{title}</h3>
            <div className={styles["cards-column__count"]}>
              {count > 0 ? `+${count}` : "Нет новостей"}
            </div>
            <div className={styles["cards-column__icons"]}>
              <svg
                className={`${styles["cards-column__icon"]} ${isPinned
                    ? styles["cards-column__icon--pinned"]
                    : styles["cards-column__icon--notpinned"]
                  }`}
                onClick={handlePinClick}
              >
                <use href={`${appIconId}#pin`} />
              </svg>
              <svg
                className={styles["cards-column__icon"]}
                onClick={handleMenuClick}
              >
                <use href={`${appIconId}#menu`} />
              </svg>
            </div>
          </div>

          {isMenuOpen && (
            <div className={styles["cards-column__menu"]}>
              {!isPinned && (
                <button
                  className={styles["cards-column__pin-button"]}
                  onClick={handlePinClick}
                >
                  <svg className={styles["cards-column__icon"]}>
                    <use href={`${appIconId}#pin`} />
                  </svg>
                  Закрепить ленту
                </button>
              )}
            </div>
          )}

          <div className={styles["cards-column__cards-content"]}>
            {children}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CardsColumn;
