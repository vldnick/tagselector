import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Suggestions } from '../SuggestionsList';

const mockTags = [
  { value: '1', label: 'Tag 1', count: 5 },
  { value: '2', label: 'Tag 2', count: 8 },
];

describe('Suggestions component', () => {
  it('renders suggestions when isOpen is true', () => {
    const { getByText } = render(
      <Suggestions
        suggestions={mockTags}
        isOpen
        isLoading={false}
        isApplying={false}
        onApply={() => {}}
      />,
    );

    expect(getByText('Tag 1')).toBeInTheDocument();
    expect(getByText('Tag 2')).toBeInTheDocument();
  });

  it('renders loading message when isLoading is true', () => {
    const { getByText } = render(
      <Suggestions
        suggestions={[]}
        isOpen
        isLoading
        isApplying={false}
        onApply={() => {}}
      />,
    );

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders "No tags found" when no suggestions are present after loading', () => {
    const { getByText } = render(
      <Suggestions
        suggestions={[]}
        isOpen
        isLoading={false}
        isApplying={false}
        onApply={() => {}}
      />,
    );

    expect(getByText('No tags found')).toBeInTheDocument();
  });

  it('calls onApply with selected tags when the apply button is clicked', async () => {
    const mockOnApply = jest.fn();
    const { getByText } = render(
      <Suggestions
        suggestions={mockTags}
        isOpen
        isLoading={false}
        isApplying={false}
        onApply={mockOnApply}
      />,
    );

    fireEvent.click(getByText(mockTags[0].label));
    fireEvent.click(getByText(mockTags[1].label));
    fireEvent.click(getByText('Apply'));
    await waitFor(() => expect(mockOnApply).toHaveBeenCalledWith(mockTags));
  });

  it('toggles tag selection when clicked', () => {
    const { getByText } = render(
      <Suggestions
        suggestions={mockTags}
        isOpen
        isLoading={false}
        isApplying={false}
        onApply={() => {}}
      />,
    );

    const tag1 = getByText('Tag 1');
    fireEvent.click(tag1);
    expect(screen.getAllByRole('checkbox').at(0)).toHaveStyle(
      'background-color: #0074BF',
    );

    fireEvent.click(tag1);
    expect(screen.getAllByRole('checkbox').at(0)).toHaveStyle(
      'background-color: #D1D7E0',
    );
  });
});
