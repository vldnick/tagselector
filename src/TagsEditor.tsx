import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchTags } from './services/api/queries/useSearchTags';
import { useApplyTags } from './services/api/queries/useApplyTags';
import { ITag } from './types';
import { useGetTags } from './services/api/queries/useGetTags';
import { useRemoveTag } from './services/api/queries/useRemove';
import { Tag } from './components/Tag/Tag';
import styled from 'styled-components';
import { Suggestions } from './components/SuggestionsList/SuggestionsList';
import { SearchTagsField } from './components/SearchInput/SearchTagsField';
import { useDebounce } from 'use-debounce';
import { useClickAway } from './utils/useClickAway';

interface ITagsEditorProps {
  articleId: string;
}

const SEARCH_DELAY = 300;

export const TagsEditor: React.FC<ITagsEditorProps> = ({ articleId }) => {
  const [appliedTags, setAppliedTags] = useState<ITag[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue] = useDebounce(inputValue, SEARCH_DELAY);
  const [isListOpen, setIsListOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {
    runQuery: searchTags,
    isLoading: areTagsSearching,
    data: suggestions,
  } = useSearchTags();
  const { runQuery: fetchTags, data: tags } = useGetTags();
  const { runQuery: applyTags, isLoading: areTagsApplying } = useApplyTags();
  const { runQuery: removeTag, isLoading: isTagRemoving } = useRemoveTag();

  useEffect(() => {
    if (!articleId) {
      return;
    }

    fetchTags(articleId);
  }, [articleId]);

  useEffect(() => {
    setAppliedTags(tags);
  }, []);

  const handleApply = async (tags: ITag[]) => {
    try {
      await applyTags(articleId, tags);
      setAppliedTags((prevState) => [...prevState, ...tags]);
      handleCloseList();
      setInputValue('');
    } catch (error) {
      // toast or something
    }
  };

  const handleRemove = async (tagValue: string) => {
    try {
      await removeTag(articleId, tagValue);
      setAppliedTags((prevState) =>
        prevState.filter((tag) => tag.value !== tagValue),
      );
    } catch (error) {
      // toast or something
    }
  };

  useEffect(() => {
    searchTags(debouncedValue);
  }, [debouncedValue]);

  const appliedTagsValues = appliedTags.map((item) => item.value);
  const filteredSuggestions = suggestions.filter(
    (suggestion) => !appliedTagsValues.includes(suggestion.value),
  );

  const handleInputFocus = useCallback(() => {
    if (inputValue.length) {
      handleOpenList();
    }
  }, [inputValue]);

  const handleOpenList = useCallback(() => {
    setIsListOpen(true);
  }, []);

  const handleCloseList = useCallback(() => {
    setIsListOpen(false);
  }, []);

  useEffect(() => {
    if (!inputValue) {
      handleCloseList();
      return;
    }

    handleOpenList();
  }, [inputValue]);

  useClickAway(containerRef, handleCloseList);

  const shouldShowLoading = areTagsSearching || (isListOpen && !debouncedValue);

  return (
    <Container ref={containerRef}>
      <Title>Tags</Title>
      <SearchTagsField
        onFocus={handleInputFocus}
        value={inputValue}
        onChange={setInputValue}
      />
      <Suggestions
        suggestions={filteredSuggestions}
        isLoading={shouldShowLoading}
        isOpen={isListOpen}
        onApply={handleApply}
        isApplying={areTagsApplying}
      />
      {!isListOpen ? (
        <TagsContainer
          $isEmpty={appliedTags.length === 0}
          $isRemoving={isTagRemoving}
        >
          {appliedTags.map((tag, index) => (
            <Tag
              key={tag.value + index}
              onRemove={handleRemove}
              label={tag.label}
              value={tag.value}
            />
          ))}
        </TagsContainer>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
  border: 1px solid #d1d7e0;
  padding: 16px 8px 8px;
  color: #12171b;
  width: 300px;

  & * {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, 'Helvetica Neue', Arial, sans-serif;
  }

  & svg {
    display: block;
  }
`;

const Title = styled.h4`
  display: block;
  font-size: 20px;
  box-sizing: border-box;
  padding: 8px 0 0 8px;
  margin-bottom: 16px;
  font-weight: 600;
`;

const TagsContainer = styled.div<{ $isEmpty: boolean; $isRemoving: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-start;
  padding: 8px;
  cursor: ${({ $isRemoving }) => ($isRemoving ? 'wait' : 'auto')};
`;
