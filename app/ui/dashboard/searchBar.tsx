'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

type Props = {
  placeholder: string;
  searchTerm: string;
  setSearchTerm: any;
  handleChange: any;
}

export default function SearchBar({ placeholder, searchTerm, setSearchTerm, handleChange }:Props) {

  // const {searchTerm, setSearchTerm, handleChange} = props

  return (
    <div className="mb-3 relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        value={searchTerm} onChange={handleChange}/>
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
