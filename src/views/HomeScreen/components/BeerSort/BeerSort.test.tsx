import BeerSort from '.';
import {render, fireEvent} from '@testing-library/react-native';

describe('BeerSort', () => {
  it('should call onSortChange with correct value when a radio button is clicked', () => {
    const mockOnSortChange = jest.fn();
    const {getByLabelText} = render(
      <BeerSort onSortChange={mockOnSortChange} sortBy="" />,
    );

    fireEvent.press(getByLabelText('Name (A-Z)'));
    expect(mockOnSortChange).toHaveBeenCalledWith('name');

    fireEvent.press(getByLabelText('ABV (Low to High)'));
    expect(mockOnSortChange).toHaveBeenCalledWith('abvLow');

    fireEvent.press(getByLabelText('ABV (High to Low)'));
    expect(mockOnSortChange).toHaveBeenCalledWith('abvHigh');
  });
});
