import React, { useState } from 'react';
import Button from '../../Shared/Button';
import './Hooks1.css';
import Input from './../Input.js';
import List from './../List.js'
const Hooks1 = () => {


	//STATE
	const [arr, setArr] = useState([]);
	const [enteredValue, setEnteredValue] = useState('');
	const [rollNo, setRollNo] = useState();
	const [lastName, setLastName] = useState('');
	const [showError, setShowError] = useState(true);
	const [errorMsg, setErrorMsg] = useState('');

	

//GET  FIRSTNAME INPUT VALUE
	const valueHandler = (e) => {
		setEnteredValue(e.target.value);
	};


//SUBMIT BUTTON CLICK HANDLER
	const addHandler = () => {
		
		const obj = {
			name: enteredValue,
			lastname: lastName,
			rollno: rollNo 
    };
    
		if (obj.name === '') {
			setShowError(true);
			setErrorMsg('Please Enter Name');
    } else if (obj.lastname === '') {
			setShowError(true);
			setErrorMsg('Please Enter  Lastname');
		} else if (obj.rollno === '') {
			setShowError(true);
			setErrorMsg('Please Enter  RollNo');
		} else {
			setShowError(false);
			//  setErrorMsg("value entered successfully");
			setArr((prevState) => [...prevState, obj]);
		}
	};

 //ROLL NUMBER INPUT HANDLER
	const rollNoHandler = (e) => {
		setRollNo(e.target.value);
	};

//LASTNAME INPUT HANDLER
	const lastNameHandler = (e) => {
		setLastName(e.target.value);
	};


	return (
		<div  >
      {/* <h1>HOOKS In React</h1> */}
      
      {/* INPUT COM */}
			<Input
				type="text"
				placeholder="enter name here"
				onChange={valueHandler}
				value={enteredValue}
			/>
			<Input
				type="text"
				placeholder="enter the last name"
				onChange={lastNameHandler}
				value={lastName}
			/>
			<Input
				type="text"
				placeholder="enter roll no"
				onChange={rollNoHandler}
				value={rollNo}
			/>

			<div >{showError ? <p className="text-red-500">{errorMsg}</p> : <p></p>}</div>
			<Button 
				handler={addHandler}
				buttonName="SUBMIT"
			/>

      <h1>LIST</h1>
      {/* LIST COMPONENT */}
		  <List arr= {arr} />

		
		</div>
	);
};

export default Hooks1;
