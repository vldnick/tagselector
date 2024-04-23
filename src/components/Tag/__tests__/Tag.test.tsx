import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tag } from '../Tag';

// Mock props
const mockValue = 'tag1';
const mockLabel = 'Tag 1';
const mockOnRemove = jest.fn();

describe('Tag', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Tag value={mockValue} label={mockLabel} onRemove={mockOnRemove} />,
    );

    expect(getByText(mockLabel)).toBeInTheDocument();
  });

  it('calls onRemove when close icon is clicked', () => {
    const { getByRole } = render(
      <Tag value={mockValue} label={mockLabel} onRemove={mockOnRemove} />,
    );
    const closeIcon = getByRole('button');

    fireEvent.click(closeIcon);

    expect(mockOnRemove).toHaveBeenCalledWith(mockValue);
  });
});
