import React, { useRef, useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { setSearched } from '../../slices/productSlice';

import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>('');
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearchChange = (): void => {
    const val: string = searchInput.current!.value;
    setSearch(val);
    dispatch(setSearched(val));
  };
  // const handleSearchChange = useCallback(() => {
  //   const val:string = searchInput.current!.value
  //   setSearch(val);
  //   dispatch(setSearched(val));
  // }, [])

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={search}
        ref={searchInput}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export { SearchBar };
