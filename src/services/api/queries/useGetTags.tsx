import { useCallback, useState } from 'react';
import { getTagsForArticle } from '../api';
import { ITag } from '../../../types';

export const useGetTags = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ITag[]>([]);
  const [error, setError] = useState<null | string>(null);

  const runQuery = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await getTagsForArticle(id);
      setIsLoading(false);
      setData(data);
    } catch (error: any) {
      setError(error.message as string);
    }
  }, []);

  return {
    runQuery,
    isLoading,
    data,
    error,
  };
};
