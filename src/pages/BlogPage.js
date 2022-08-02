import React,{useState,useEffect} from "react";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";

const BlogPage = ({category}) => {

  const[data,setData]=useState([])
  
  useEffect(() =>{
    fetch(`https://fasna.herokuapp.com/api/details`).then (res=>res.json()).then(data=> setData(data))

  },[])

  return (
    <div className="category_page bollywood_container">
      <div className="column_main">
        <h1 className="title head-title">{category}</h1>
        {data.sort(()=> Math.random() - Math.random()).slice(5)
          .filter((article) => {
            return article.category === category;
          })
          .map((n) => (
            <Card
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title}
              description={n.description}
            />
          ))}
      </div>
      <div className="sub_column">
        <h1 className="side_title title">Top Posts</h1>
        {data.sort(()=> Math.random() - Math.random()).slice(0,10)
          .map((n) => (
            <SmallCard
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title.slice(0, 25)}
              category={n.category}
              date={n.date}
              description={n.description}
            />
          ))}
          <div className="advertisements"><img src="https://th.bing.com/th/id/OIP.1CMfn_6eP1o_XQjAcrfUMQHaHa?pid=ImgDet&w=153&h=153&c=7" alt="ads"/>
          <h4>Advertisements</h4>
          </div>
      </div>
    </div>
  );
};

export default BlogPage;