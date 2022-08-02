import React from 'react'
import { NavLink} from 'react-router-dom';

const CardHome = (props) => {
    const { imgUrl, title, articleid, date, category,description } = props;
    return (
        <NavLink className='link width' state={{ title: title, img: imgUrl, description: description,category:category,date:date, id: articleid }} to={`/category/${articleid}`}>
          
            <div className="card__Home" >
              <div className='card__image'>
                <img src={imgUrl} alt="img not found" />
              </div>
              <div className='home__bigcard__data'  >
                <h3 >{title}</h3>
                
                <p><span>{category}</span>/{date}</p>              
              </div>
          
            
          </div></NavLink>
    )
          
}

export default CardHome;