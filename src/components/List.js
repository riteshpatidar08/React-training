import React from 'react'

function List({ arr }) {

    const renderedList = arr.map((ele, i) => {
      return  <div key={i}>
          {ele.name}
            <span style={{ marginLeft: '10px' }}>{ele.lastname}</span>
            <span style={{ marginLeft: '10px' }}>{ele.rollno}</span>
        </div>
    })
        

    return (
			<div>
				{arr.length !== 0 && renderedList}
				{arr.length === 0 && <p>please enter the value</p>}
				{/* {arr.length === 0 ? <p>please enter the value</p> : renderedList} */}
			</div>
		);
        
  
  
}

export default List;
