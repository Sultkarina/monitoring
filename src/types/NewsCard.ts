export interface NewsCard {
  id: string; // Уникальный идентификатор карточки
  title: string; // Заголовок карточки
  location?: string; // Адрес 
  stats: NewsCardStats; // Статистика (просмотры, лайки, комментарии, репосты)
  reliability: NewsCardReliability; // Надежность 
  content: string; // Краткое описание карточки
  timestamps: Timestamp[]; // Время
  author: NewsCardAuthor; // Автор новости
  actions: NewsCardAction; // Действия
  audioDuration?: string; // Продолжительность аудио
  audioTag?: string; // Тэг аудио
  isNew?: boolean; // Новый тип для статуса карточки 
  statusLabel:string;
  
}

export interface NewsCardStats {
  views: number; // Количество просмотров
  likes: number; // Количество лайков
  comments: number; // Количество комментариев
  reposts: number; // Количество репостов
}

export interface NewsCardAction {
  duplicatesAvailable: boolean; // Есть ли дубли
  duplicatesCount: number; // Количество дублей
  messagesCount: number; // Количество сообщений
  isLocked: boolean; // Заблокирована ли карточка
}

export interface NewsCardReliability {
  label: string; // Метка надежности (например, "Типичный фейк")
  percentage: number; // Процент надежности
}

export interface NewsCardAuthor {
  name: string; // Имя автора
  date: string; // Дата публикации
  time: string; // Время публикации
  socialNetwork: string; // Социальная сеть
}

export interface Timestamp {
  start: string; // Начало временной метки
  end: string; // Конец временной метки
  label: string; // Метка (например, "Возможное возникновение фейка")
}


export interface Column {
  id: string; // Идентификатор колонки
  cards: NewsCard[]; // Карточки
  isPinned?: boolean; // Закреплена ли колонка
  title:string;
  count:number;
}


