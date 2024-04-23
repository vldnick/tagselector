import { mockedFetch } from '../mockRequest';
import { tags } from './mockData';

export const getTags = (query: string) =>
  mockedFetch({ data: tags.slice(0, Math.floor(Math.random() * 9) + 2) });

export const getTagsForArticle = (articleId: string) =>
  mockedFetch({ data: tags.slice(0, 2) });
export const patchTags = (articleId: string, appliedTags: string[]) =>
  mockedFetch({ data: 'success' });
export const deleteTag = (articleId: string, tagValue: string) =>
  mockedFetch({ data: 'success' });
