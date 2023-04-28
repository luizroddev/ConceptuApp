import axios from 'axios';
import {IBeer} from '../../@types/IBeer';
import {IBeerRequestError} from '../../@types/IBeerRequestError';
import {IBeerResponse} from '../../@types/IBeerResponse';
import AxiosAPIClient from '../../apiClient/AxiosAPIClient';
import IAPIClient from '../../apiClient/IAPIClient';

const API_BASE_URL = process.env.API_BASE_URL || 'https://api.punkapi.com/v2/';

const apiClient: IAPIClient = new AxiosAPIClient(API_BASE_URL);

interface QueryParameters {
  [key: string]: string | number;
}

export function parseQueryString(queryString: string): QueryParameters {
  const params: QueryParameters = {};
  const pairs = queryString.split('&');

  for (let pair of pairs) {
    const [key, value] = pair.split('=');
    params[key] = isNaN(parseFloat(value)) ? value : parseFloat(value);
  }

  return params;
}

function handleError(error: any): IBeerRequestError {
  if (axios.isAxiosError(error) && error.response) {
    console.error('Error fetching beers:', error.response.data);
    return error.response.data as IBeerRequestError;
  } else {
    return {
      statusCode: error.statusCode || 400,
      message: error.message || 'An unknown error occurred',
      error: error.error || error || 'Bad Request',
    };
  }
}

function buildRequestParams(
  page: number,
  query: string,
  filter: string,
  perPage: number,
): IBeerRequest {
  let params: IBeerRequest = {
    page,
    per_page: perPage,
  };

  if (query) {
    params.beer_name = query;
  }

  if (filter) {
    const filterParams = parseQueryString(filter);
    params = {...params, ...filterParams};
  }

  return params;
}

export const attemptFetchBeers = async (
  page: number = 1,
  query: string = '',
  filter: string = '',
  perPage: number = 10,
): Promise<IBeerResponse> => {
  try {
    const params = buildRequestParams(page, query, filter, perPage);

    const data = await apiClient.get<IBeer[]>('beers', {params});
    return {
      success: true,
      data,
      error: null,
    };
  } catch (error) {
    const errorData = handleError(error);
    return {
      success: false,
      data: [],
      error: errorData,
    };
  }
};
