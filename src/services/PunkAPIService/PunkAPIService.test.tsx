import {attemptFetchBeers, parseQueryString} from '.';
import AxiosAPIClient from '../../apiClient/AxiosAPIClient';

jest.mock('../../apiClient/AxiosAPIClient');

// Mock the API client
const mockedAPIClient = AxiosAPIClient as jest.MockedClass<
  typeof AxiosAPIClient
>;

// Setup the API_BASE_URL
process.env.API_BASE_URL = 'https://api.punkapi.com/v2/';

describe('Beer fetching', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockedAPIClient.mockClear();
  });

  it('should parse query string correctly', () => {
    const result = parseQueryString('key1=value1&key2=10&key3=value3');
    expect(result).toEqual({
      key1: 'value1',
      key2: 10,
      key3: 'value3',
    });
  });

  it('should handle successful API request', async () => {
    // Prepare the mock implementation
    const mockedData = [
      {id: 1, name: 'Beer 1', abv: 8},
      {id: 2, name: 'Beer 2', abv: 9},
      {id: 3, name: 'Beer 3', abv: 11},
    ];
    mockedAPIClient.prototype.get.mockResolvedValue(mockedData);

    // Call the function
    const result = await attemptFetchBeers(1, 'beer', 'abv_lt=10', 10);

    expect(result).toEqual({
      success: true,
      data: mockedData,
      error: null,
    });

    // Check if the API client was called with the right parameters
    expect(mockedAPIClient.prototype.get).toHaveBeenCalledWith('beers', {
      params: {
        page: 1,
        per_page: 10,
        beer_name: 'beer',
        abv_lt: 10,
      },
    });
  });

  it('should handle failed API request', async () => {
    // Prepare the mock implementation
    const mockedError = {
      statusCode: 400,
      message: 'An unknown error occurred.',
      error: 'Bad Request',
    };
    mockedAPIClient.prototype.get.mockRejectedValue(mockedError);

    // Call the function
    const result = await attemptFetchBeers(1, 'beer', 'abv=10', 10);

    expect(result).toEqual({
      success: false,
      data: [],
      error: mockedError,
    });

    // Check if the API client was called with the right parameters
    expect(mockedAPIClient.prototype.get).toHaveBeenCalledWith('beers', {
      params: {
        page: 1,
        per_page: 10,
        beer_name: 'beer',
        abv: 10,
      },
    });
  });
});
