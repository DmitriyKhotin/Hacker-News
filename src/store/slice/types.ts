type Milliseconds = number;
export type UnixTime = Milliseconds;

export type Id = number;
export type URL = string;
export type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export interface IIdentificator {
  id: Id;
}

interface IItem {
  deleted: boolean;
  type: ItemType;
  by: string;
  time: UnixTime;
  text: string;
  dead: boolean;
  parent: Id;
  poll: Id;
  kids: Id[];
  url: URL;
  score: number;
  title: string;
  parts: Id[];
  descendants: number;
}

export interface INews extends IIdentificator, Partial<IItem> {}

export interface INewsState {
  news: INews[];
  timer: {
    timerId: ReturnType<typeof setInterval>;
    currentTime: Milliseconds;
  };
  currentNews: INews;
  loading: boolean;
  error: string;
}
