import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from '.';

describe('SearchBar', () => {
  it('should call setSearchQuery with correct value when text is entered', () => {
    const mockSetSearchQuery = jest.fn();
    const mockHandleSearch = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchBar
        searchQuery=""
        setSearchQuery={mockSetSearchQuery}
        handleSearch={mockHandleSearch}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('Search beers'), 'test');
    expect(mockSetSearchQuery).toHaveBeenCalledWith('test');
  });

  it('should call handleSearch when search bar is submitted', () => {
    const mockSetSearchQuery = jest.fn();
    const mockHandleSearch = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchBar
        searchQuery=""
        setSearchQuery={mockSetSearchQuery}
        handleSearch={mockHandleSearch}
      />,
    );

    fireEvent(getByPlaceholderText('Search beers'), 'submitEditing');
    expect(mockHandleSearch).toHaveBeenCalled();
  });
});
