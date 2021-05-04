import React, { useState } from "react";
import "./scss/index.scss";

const SearchBox = () => {
  const [value, setValue] = useState<string | null>("");

  return (
    <div className="search-box" onClick={() => setValue("")}>
      <input
        type="search"
        placeholder=" "
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <span></span>
    </div>
  );
};

export default SearchBox;
