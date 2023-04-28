import {useEffect, useState} from 'react';
import {IBeer} from '../@types/IBeer';

export const useSort = (beers: IBeer[], sortBy: string) => {
  const [sortedBeers, setSortedBeers] = useState<IBeer[]>([]);

  useEffect(() => {
    let newSortedBeers = [...beers];
    switch (sortBy) {
      case 'name':
        newSortedBeers.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'abvLow':
        newSortedBeers.sort((a, b) => a.abv - b.abv);
        break;
      case 'abvHigh':
        newSortedBeers.sort((a, b) => b.abv - a.abv);
        break;
    }
    setSortedBeers(newSortedBeers);
  }, [beers, sortBy]);

  return sortedBeers;
};
