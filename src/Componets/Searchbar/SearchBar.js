import React from "react";
import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";
//import { SearchTestData } from "./SearchTestData";


export default function SearchBar({ placeholder, data }) {
  return (
    <>
      <div className="GlobalSearch">
        <div className="searchInputs">
          <input type="text" placeholder={placeholder} className="searcharea" />

          <div className="SearchIcon">
            <SearchIcon />
          </div>
        </div>

        
      </div>
      
    </>
  );
}
