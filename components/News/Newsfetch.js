import React, { useEffect, useState } from 'react'
import Newsadd from './Newsadd'

const Newsfetch = () => {
    const [news,setnews]=useState([]);

    async function getdata()
    {
        const response=await fetch('https://newsapi.org/v2/everything?q=India%20election&language=en&apiKey=049d891ec7c14527b64b63b6af02f94a');
        const output = await response.json();
        console.log(output);
        setnews(output?.articles)
    }

    useEffect(()=>
    {
        getdata();
    },[]);

  return(
  <div id="newsitems">
    {
  news.map(function(value)
  {
    return(<Newsadd {...value}/>)
  })}
  </div>  
  )
}

export default Newsfetch
