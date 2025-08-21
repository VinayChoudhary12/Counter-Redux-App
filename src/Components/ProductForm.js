import './ProductForm.css';
import { useState } from 'react';

function ProductForm() {
const [title,setTitle]=useState('');
const [date,setDate]=useState('');

function TitleChangeHandler(event){
    console.log(event.target.value);
    setTitle(event.target.value);
}
function DateChangeHandler(event){
    setDate(event.target.value);
    console.log(event.target.value);
    event.preventDefault()
}
function defaultHandler(event){
 event.preventDefault();
 const obj={
    printtitle:title,
    printdate:date,
 };
 console.log(obj);
 setTitle('');
 setDate('');
}

    return(
        <form onSubmit={defaultHandler}>
            <div className="Title"> 
            <label>Title</label>
        <input type="text" value={title} onChange={TitleChangeHandler}></input>
            </div>
            <div className="date_box">
                <label>Date</label>
                <input type="date" min="02\12\2004" max="20\07\2025" onChange={DateChangeHandler} value={date}></input>
            </div>
            <div className="button_tag">
                <button>Touch Me</button>
            </div>
        </form>

    );
}

export default ProductForm;