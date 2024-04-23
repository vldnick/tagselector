import React from 'react';
import styled from 'styled-components';
import { ITag } from '../../types';
import { CloseIcon } from '../Icon';

interface ITagProps extends Omit<ITag, 'count'> {
  onRemove: (value: string) => void;
}

export const Tag: React.FC<ITagProps> = ({ value, label, onRemove }) => (
  <TagContainer>
    <Label>{label}</Label>
    <IconWrapper role="button" onClick={() => onRemove(value)}>
      <CloseIcon />
    </IconWrapper>
  </TagContainer>
);

const TagContainer = styled.div`
  padding: 4px 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  border: 1px solid #d1d7e0;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  flex-grow: 0;
`;

const Label = styled.span``;

const IconWrapper = styled.div`
  cursor: pointer;
`;
