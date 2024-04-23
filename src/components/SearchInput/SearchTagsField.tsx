import React from 'react';
import styled from 'styled-components';
import { ClearIcon, SearchIcon } from '../Icon';
import { handleEnterKeyDown } from '../../utils/handleEnterKeyPress';
import { Input } from '../Input/Input';

interface ISearchInputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
  onFocus: () => void;
}

export const SearchTagsField: React.FC<ISearchInputProps> = ({
  onChange,
  value,
  placeholder = 'Search',
  onFocus,
}) => {
  const handleClearKeyPress = handleEnterKeyDown(() => onChange(''));

  return (
    <SearchContainer>
      <InputContainer>
        <SearchIcon />
        <Input
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          value={value}
          placeholder={placeholder}
        />
        {value?.length ? (
          <ClearIconWrapper
            data-testid="clear-icon"
            tabIndex={0}
            onKeyDown={handleClearKeyPress}
            onClick={() => onChange('')}
          >
            <ClearIcon />
          </ClearIconWrapper>
        ) : null}
      </InputContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  padding: 8px 4px;
  display: flex;
  width: 100%;
  gap: 4px;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #d1d7e0;
`;

const ClearIconWrapper = styled.div`
  align-self: flex-end;
  cursor: pointer;
`;
