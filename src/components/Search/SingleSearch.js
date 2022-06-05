import React from 'react'
import SingleFooterData from './SingleFooterData';
import { Link } from "react-router-dom"

export default function SingleSearch({singleData}) {

    console.log(singleData)
  return (
    <article className='single-search shadow'>
      <div className='ss-head'>
        <div>
          <h2>{singleData['1. symbol']}</h2>
          <p>{singleData['2. name']}</p>
        </div>

        <h2>{singleData['4. region']}</h2>
      </div>
        <div className="ss-tail">
            <SingleFooterData name='Type' data={singleData["3. type"]}  />
            <SingleFooterData name='Currency' data={singleData["8. currency"]} />
            <SingleFooterData name='Market Open' data={singleData["5. marketOpen"]} />
            <SingleFooterData name='Market Close' data={singleData["6. marketClose"]} />
        </div>

      
    </article>
  );
}
