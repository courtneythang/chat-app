import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input rounded-full"
      ></input>
      <button type="submit" className="btn btn-circle search">
        <IoSearchSharp className="outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
