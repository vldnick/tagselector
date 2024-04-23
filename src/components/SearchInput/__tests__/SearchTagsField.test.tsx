import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchTagsField } from '../SearchTagsField';

describe('SearchTagsField', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchTagsField
        onChange={() => {}}
        value=""
        placeholder="Search"
        onFocus={() => {}}
      />,
    );

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('updates input value when user types', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchTagsField
        onChange={onChange}
        value=""
        placeholder="Search"
        onFocus={() => {}}
      />,
    );
    const input = getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(onChange).toHaveBeenCalledWith('test');
  });

  it('calls onFocus when input is focused', () => {
    const onFocus = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchTagsField
        onChange={() => {}}
        value=""
        placeholder="Search"
        onFocus={onFocus}
      />,
    );
    const input = getByPlaceholderText('Search');

    fireEvent.focus(input);

    expect(onFocus).toHaveBeenCalled();
  });

  it('clears input value when clear icon is clicked', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <SearchTagsField
        onChange={onChange}
        value="test"
        placeholder="Search"
        onFocus={() => {}}
      />,
    );
    const clearIcon = getByTestId('clear-icon');

    fireEvent.click(clearIcon);

    expect(onChange).toHaveBeenCalledWith('');
  });
});
