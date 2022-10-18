import React from 'react';
import  {FaFreeCodeCamp} from 'react-icons/fa';
import '../markdown.css';
export const Editor = (props) => {

  return(
    <>
      <div className="editNav">
        <div>
          <FaFreeCodeCamp className='freecodecamp'/>
          <h4>{props.name}</h4>
        </div>
          {props.icon}
      </div>
      {props.type}
    </>
  )
            
}