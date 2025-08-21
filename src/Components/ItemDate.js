import './ItemDate.css';
function ItemDate(props){
    const date=props.date;
    const month=props.month;
    const year=props.year;
    return(
<div className="mfg-date">
    <span className="month"> {month}</span>
    <span className="year"> {year}</span>
       <span className="date"> {date}</span>
</div>
    );
};
export default ItemDate;