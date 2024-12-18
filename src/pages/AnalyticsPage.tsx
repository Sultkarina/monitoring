import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import NewsCard from "../components/NewsCard/NewsCard";
import NewsCardOpen from "../components/NewsCard/NewsCardOpen";
import { NewsCard as NewsCardType } from "../types/NewsCard";
import CardsColumn from "../components/CardsColumn/CardsColumn";
import styles from "./AnalyticsPage.module.scss";

const Analytics: React.FC = () => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  // Данные карточек
  const cardData1: NewsCardType = {
    id: "1",
    title: "Песков заявил о продолжении переговоров Россия-Украина по видеосвязи",
    location: "г. Москва, Московская обл., Россия",
    stats: { views: 123, likes: 10, comments: 123, reposts: 50 },
    reliability: { label: "Типичный фейк", percentage: 56 },
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl dignissim quis turpis nunc pellentesque. Et, morbi pretium nunc adipiscing nunc ultrices dignissim sit justo. Ultrices tempor pellentesque tincidunt posuere urna enim eget non tortor. Blandit nam netus vulputate libero sem. Mattis massa lorem neque natoque amet, ullamcorper. Sit nisl sem augue quis elit id auctor scelerisque. Aliquet elementum faucibus nulla id pharetra at tempus. Sit tempus volutpat integer euismod ultrices tortor nisl, tempor. Pulvinar eget quisque sit molestie habitant magna felis, metus, non. Lectus aliquet proin posuere purus sed. A a, aliquam augue fringilla donec scelerisque ridiculus quis tristique. Suscipit nunc quisке senectus malesuada euismod imperdiet. Ultricies massa ut magna at orci, eget fringilla.`,
    timestamps: [
      { start: "12:23", end: "12:58", label: "Возможное возникновение фейка" },
      { start: "24:12", end: "25:15", label: "Возможное возникновение фейка" },
    ],
    author: { name: "Ольга Бузова", date: "12.03.2022", time: "12:56", socialNetwork: "vk" },
    actions: { duplicatesAvailable: true, duplicatesCount: 5, messagesCount: 5, isLocked: false },
    isNew: true, statusLabel: "Новое", audioDuration: "03:45",
  };

  const cardData2: NewsCardType = {
    id: "2",
    title: "Новые данные о фальшивых новостях на Instagram",
    location: "г. Санкт-Петербург, Россия",
    stats: { views: 200, likes: 15, comments: 50, reposts: 10 },
    reliability: { label: "Фальшивое видео", percentage: 95 },
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    timestamps: [
      { start: "15:30", end: "16:00", label: "Фальшивые новости на Instagram" },
    ],
    author: { name: "Максим Иванов", date: "15.10.2023", time: "14:30", socialNetwork: "instagram" },
    actions: { duplicatesAvailable: true, duplicatesCount: 3, messagesCount: 0, isLocked: true },
    isNew: false, statusLabel: "Новое", audioDuration: "03:45", 
  };

  const [columnData, setColumnData] = useState([
    { id: "1", cards: [cardData1, cardData2], isPinned: false, title:"Внешняя политика", count: 2 },
    { id: "2", cards: [cardData1, cardData2, cardData1], isPinned: false, title:"Внутренняя политика", count: 12 },
    { id: "3", cards: [cardData1, cardData2, cardData1, cardData2], isPinned: false, title:"Экономика", count: 32 },
    { id: "4", cards: [cardData1, cardData2], isPinned: true, title:"Внешняя политика", count: 1 },  // Закрепленная колонка
    { id: "5", cards: [cardData1, cardData2], isPinned: false, title:"Внутренняя политика", count: 4 },
    { id: "6", cards: [cardData1, cardData2], isPinned: false, title:"Экономика", count: 5 },
  ]);

  const handlePin = (columnId: string) => {
    setColumnData((prevColumns) => {
      const updatedColumns = prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, isPinned: !column.isPinned }
          : column
      );
      return updatedColumns.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
    });
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = columnData[source.index];

    if (sourceColumn.isPinned) {
      return;
    }

   
    setColumnData((prevColumns) => {
      const updatedColumns = [...prevColumns];
      const [movedColumn] = updatedColumns.splice(source.index, 1);  
      updatedColumns.splice(destination.index, 0, movedColumn);      
      return updatedColumns;
    });
  };

  return (
    <PageWrapper headerTitle="Аналитика">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={styles.pageContainer}>
          {expandedCardId && (
            <div
              className={styles.pageOverlay}
              onClick={() => setExpandedCardId(null)}
            />
          )}
          <Droppable droppableId="columns" direction="horizontal">
            {(provided) => (
              <div
                className={styles.columnsWrapper}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {columnData.map((column, index) => (
                  <Draggable
                    key={column.id}
                    draggableId={column.id}
                    index={index}
                    isDragDisabled={column.isPinned}  
                  >
                    {(draggableProvided) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        className={styles.column}
                      >
                        <CardsColumn
                          cardsData={column.cards}
                          columnId={column.id}
                          onPin={handlePin}
                          isPinned={column.isPinned ?? false}
                          index={index}
                          title={column.title} 
                          count={column.count} 
                        >
                          <div className={styles.cardContainer}>
                            {column.cards.map((card) =>
                              expandedCardId === card.id ? (
                                <NewsCardOpen
                                  key={card.id}
                                  data={card}
                                  onClose={() => setExpandedCardId(null)}
                                  onAudioToggle={() => {}}
                                />
                              ) : (
                                <NewsCard
                                  key={card.id}
                                  data={card}
                                  onExpand={() => setExpandedCardId(card.id)}
                                  className={expandedCardId ? styles.cardHidden : ""}
                                />
                              )
                            )}
                          </div>
                        </CardsColumn>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </PageWrapper>
  );
};

export default Analytics;
