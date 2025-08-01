import React from "react";
import Input from "../Elements/Input";

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <section className="search-bar">
      <Input
        type="text"
        placeholder="Search notes ..."
        value={keyword}
        onChange={(event) => onKeywordChange(event.target.value)}
      />
    </section>
  );
}

export default SearchBar;
