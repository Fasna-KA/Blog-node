import React from 'react'
import { Link } from 'react-router-dom'

const SmallCard = (props) => {
  const { imgUrl, title, articleid, category,description, date} = props;
  return (
    <Link className='link' state={{ title: title, img: imgUrl, description: description,category:category,date:date, id: articleid }}  to={`/category/${articleid}`}>
      <div className='sub_card' >
        <div className="card_data" >
          <div className="card_images">
            <img src={imgUrl} alt="data not found" />
          </div>
          <div className='small_card_data'  >
            <h4>{title} ...<span style={{color:"gray"}}>Read More</span></h4>
            <p><span>{category}</span>/{date}</p>
          </div>
        </div>
      </div>
      </Link>
  )
}

export default SmallCard;