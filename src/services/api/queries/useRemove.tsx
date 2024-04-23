import { useCallback, useState } from 'react';
import { deleteTag } from '../api';

export const useRemoveTag = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const runQuery = useCallback(async (id: string, tagValue: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteTag(id, tagValue);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message as string);
    }
  }, []);

  return {
    runQuery,
    isLoading,
    error,
  };
};
