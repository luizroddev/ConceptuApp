import {IBeer} from './IBeer';
import {IBeerRequestError} from './IBeerRequestError';

export interface IBeerResponse {
  success: boolean;
  data: IBeer[];
  error: IBeerRequestError | null;
}
