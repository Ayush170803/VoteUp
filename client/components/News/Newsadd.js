import React from 'react'
import './Header.css';
const Newsadd = ({title,description,urlToImage,source,url}) =>
{
 return(
    <div id="cards">
    <img src={urlToImage}/>
    <h3>{source.name}</h3>
    <h2>{title}</h2>
    <h5>{description}</h5>
    <a href={url}>Read more &gt;</a>
    </div>
 );
}
 export default Newsadd;


