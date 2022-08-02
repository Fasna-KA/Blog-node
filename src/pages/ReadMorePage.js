
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react';
import Card from "../components/Card";


const ReadMorePage = () => {

    const[data,setData]=useState([])
  
  useEffect(() =>{
    fetch(`https://fasna.herokuapp.com/api/details`).then (res=>res.json()).then(data=> setData(data))

  },[])


const location = useLocation();

const {title, img, description,category,date} = location.state;
console.log(title)
  return (

    <div className='read_more_page'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <h4>
          {category}/{date}
        </h4>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>

        <p>{description}</p>

        <br/>
      <div style={{width:'85%', margin: '10px auto'}}>
       <h1 className="title head-title"> Read More From {category}</h1>  
       {data.sort(()=> Math.random() - Math.random()).slice(0,3).map((n)=>{ return(
         <Card
         key={n.id}
         articleid={n.id}
         imgUrl={n.Image}
         title={n.title}
         description={n.description.slice(0, 200)}
         author={n.author}
         category={n.category}
         date={n.date}
         />
         )})}
      </div>

      
    </div>
  )
}

export default ReadMorePage