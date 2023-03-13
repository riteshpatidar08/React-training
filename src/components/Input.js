import React from 'react'

function Input({type , placeholder, onChange , value}) {
  return (
		<div className="p-3">
			<input  className="bg-gray-300"
				type={type}
				placeholder= {placeholder}
				onChange={onChange}
				value={value}
			/>
			
		</div>
	);
}

export default Input
