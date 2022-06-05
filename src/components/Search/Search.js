import axios from 'axios';
import React, { useState } from 'react'
import SearchResult from './SearchResult';


const apiKey = '3FR39AG8VJR9IQQP';

export default function Search() {
    const [query, setQuery] = useState('')
    const [searchData, setSearchData] = useState([])

    const keyDownHandler = (e) => {
      if (e.keyCode === 13) {
        console.log(e.keyCode);
        axios
          .get(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&&apikey=${apiKey}`
          )
          .then((res) => {
            console.log(res);
            if (res.data && res.data.bestMatches) {
              setSearchData([...res.data.bestMatches]);
            }
          })
          .catch((err) => console.log(err));
      }
    };

  return (
    <div className='search'>
        <input type="text" value={query} onKeyDown={keyDownHandler} onChange={e=>setQuery(e.target.value)} />
        <SearchResult data={searchData}/>
        
    </div>
  )
}
