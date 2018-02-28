import { NewsListType } from '../news-list';

export interface INews {
  counterLike: number;
  description: string;
  id: number;
  title: string;
  type: NewsListType;
  url: string;
  urlToImage: string;
}

export const fromServer = (record: any): INews => ({
  counterLike: record.counterLike || 0,
  description: record.description || '',
  id: record.id,
  title: record.title,
  type: record.type,
  url: record.url || '',
  urlToImage: record.urlToImage || ''
});
