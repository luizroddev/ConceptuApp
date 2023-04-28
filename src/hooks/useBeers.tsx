import {useEffect, useState} from 'react';
import {IBeerResponse} from '../@types/IBeerResponse';
import {IBeerRequestError} from '../@types/IBeerRequestError';
import {attemptFetchBeers} from '../services/PunkAPIService';

const useBeers = () => {
  const [beers, setBeers] = useState<IBeerResponse>({
    success: true,
    data: [],
    error: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IBeerRequestError | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  const loadBeers = async () => {
    setLoading(true);
    setError(null);
    const fetchedBeers = await attemptFetchBeers(page, query, filter);
    if (!fetchedBeers.success) {
      setError(fetchedBeers.error);
    } else {
      if (fetchedBeers.data && fetchedBeers.data.length > 0) {
        setBeers(prevBeers => ({
          success: fetchedBeers.success,
          data: [...prevBeers.data, ...fetchedBeers.data],
          error: fetchedBeers.error,
        }));
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBeers();
  }, [page, query, filter]);

  const searchBeers = (newQuery: string) => {
    setPage(1);
    setFilter('');
    setBeers({success: true, data: [], error: null});
    setQuery(newQuery);
  };

  const searchFilter = (filter: string) => {
    setFilter(filter);
    setPage(1);
    setBeers({success: true, data: [], error: null});
  };

  const loadMoreBeers = () => {
    setPage(prevPage => prevPage + 1);
  };

  return {
    beers,
    loading,
    page,
    error,
    filter,
    searchBeers,
    searchFilter,
    loadMoreBeers,
    query,
  };
};

export default useBeers;
