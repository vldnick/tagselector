import React, { useState } from 'react';
import { ITag } from '../../types';
import styled from 'styled-components';
import { handleEnterKeyDown } from '../../utils/handleEnterKeyPress';

interface ISuggestionsList {
  suggestions: ITag[];
  buttonTitle?: string;
  isOpen: boolean;
  isLoading: boolean;
  isApplying: boolean;
  onApply: (tags: ITag[]) => void;
}

export const Suggestions: React.FC<ISuggestionsList> = ({
  suggestions,
  isOpen,
  buttonTitle = 'Apply',
  isLoading,
  onApply,
  isApplying,
}) => {
  const [selectedItems, setSelectedItems] = useState<ITag[]>([]);

  if (!isOpen) {
    return null;
  }

  const handleSelect = (item: ITag) => {
    if (
      selectedItems.findIndex(
        (selectedItem) => selectedItem.value === item.value,
      ) >= 0
    ) {
      setSelectedItems((prevState) =>
        prevState.filter((selectedItem) => selectedItem.value !== item.value),
      );
      return;
    }

    setSelectedItems((prevState) => [...prevState, item]);
  };

  return (
    <SuggestionsContainer>
      <SuggestionsList aria-live="polite">
        {!isLoading ? (
          suggestions.length === 0 ? (
            <CenteredContainer>No tags found</CenteredContainer>
          ) : (
            suggestions.map((item) => {
              const isSelected =
                selectedItems.findIndex(
                  (selectedItem) => selectedItem.value === item.value,
                ) >= 0;

              return (
                <ListItem
                  tabIndex={0}
                  onKeyDown={handleEnterKeyDown(() => handleSelect(item))}
                  key={item.value}
                  onClick={() => handleSelect(item)}
                >
                  <Checkbox role="checkbox" checked={isSelected}>
                    {isSelected ? <Mark /> : null}
                  </Checkbox>
                  <Label>{item.label}</Label>
                  <Counter>+{item.count}</Counter>
                </ListItem>
              );
            })
          )
        ) : (
          <CenteredContainer>Loading...</CenteredContainer>
        )}
      </SuggestionsList>
      <Button
        type="submit"
        onClick={() => onApply(selectedItems)}
        disabled={isApplying}
      >
        {isApplying ? 'Loading...' : buttonTitle}
      </Button>
    </SuggestionsContainer>
  );
};

const SuggestionsContainer = styled.div`
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
`;

const CenteredContainer = styled.div`
  min-height: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SuggestionsList = styled.ul`
  min-height: 200px;
  max-height: 500px;
  overflow: auto;
`;

const Counter = styled.div`
  color: #f0f2f5;
  font-size: 12px;
  align-self: flex-end;
`;

const ListItem = styled.li`
  display: grid;
  font-size: 14px;
  grid-template-columns: auto 1fr auto;
  width: 100%;
  gap: 4px;
  box-sizing: border-box;
  padding: 8px 4px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #f9fafb;
  }

  & ${Counter} {
    color: #d1d7e0;
  }
`;

const Checkbox = styled.div<{ checked: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ checked }) => (checked ? '#0074BF' : '#D1D7E0')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mark = styled.div`
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
`;

const Label = styled.span`
  font-size: 12px;
`;

const Button = styled.button<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: #0074bf;
  border: none;
  width: 100%;
  border-radius: 4px;
  padding: 8px 0;
  color: white;
`;
