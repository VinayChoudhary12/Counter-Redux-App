import './Item.css';
import { useState } from 'react';

function Item(props){
    function clickHandler(){
    console.log('u touch me');
    setTitle("popcorn");
}
 const [name, setTitle] = useState(props.name);
    return(
        <div>
            <p className="nirma">{name}</p>
            {props.children}
            <button onClick={clickHandler}>click me</button>
        </div>
    );
};
export default Item;