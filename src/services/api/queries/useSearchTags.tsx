import { useCallback, useState } from 'react';
import { getTags } from '../api';
import { ITag } from '../../../types';

export const useSearchTags = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ITag[]>([]);
  const [error, setError] = useState<null | string>(null);

  const runQuery = useCallback(async (query: string) => {
    if (query.length === 0) {
      setData([]);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await getTags(query);
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
