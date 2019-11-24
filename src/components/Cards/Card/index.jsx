import React from 'react'; 
import './style.css'; 



const Card = (props) => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="cardTitle">
                    {props.companyName}
                </div>
                <div className="cardImg">

                </div>
                <button className="button cprimary">{props.companyDescription}</button>
            </div>
        </React.Fragment>
    )
}

export default Card; 

