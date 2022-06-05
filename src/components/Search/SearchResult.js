import React from 'react'
import SingleSearch from './SingleSearch'
import { Link } from 'react-router-dom';

export default function SearchResult({data}) {
  return (
    <div className='search-result'>
      {data.length > 0
        ? data.map((el, i) => (
            <Link key={i} target='_blank' to={`/${el['1. symbol']}`}>
              <SingleSearch singleData={el} />
            </Link>
          ))
        : ' No Search Result'}
    </div>
  );
}
