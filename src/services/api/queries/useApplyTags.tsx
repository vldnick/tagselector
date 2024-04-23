import { useCallback, useState } from 'react';
import { patchTags } from '../api';
import { ITag } from '../../../types';

export const useApplyTags = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const runQuery = useCallback(async (id: string, tags: ITag[]) => {
    setIsLoading(true);
    setError(null);
    try {
      await patchTags(
        id,
        tags.map((tag) => tag.value),
      );
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
