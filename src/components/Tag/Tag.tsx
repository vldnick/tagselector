import React from 'react';
import styled from 'styled-components';
import { ITag } from '../../types';
import { CloseIcon } from '../Icon';

interface ITagProps extends Omit<ITag, 'count'> {
  onRemove: (value: string) => void;
}

export const Tag: React.FC<ITagProps> = ({ value, label, onRemove }) => (
  <StyledTagContainer>
    <StyledLabel>{label}</StyledLabel>
    <StyledIconWrapper role="button" onClick={() => onRemove(value)}>
      <CloseIcon size={20} />
    </StyledIconWrapper>
  </StyledTagContainer>
);

const StyledTagContainer = styled.div`
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

const StyledLabel = styled.span``;

const StyledIconWrapper = styled.div`
  cursor: pointer;
`;
