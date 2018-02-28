export const NEWS_LIST_TYPES = {
  CONFLICTS: 'conflicts',
  EMERGENCY: 'emergency'
};

export type NewsListType = string;

export interface INewsList {
  error: any;
  items: {};
  loading: boolean;
}
