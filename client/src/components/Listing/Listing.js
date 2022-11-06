import React from 'react';
import "./Listing.css";

//can pass in variable 


// petrType, image url, caption,  contact info, date/time, status



const Listing = ({ id, name, image, caption, contact, date, time, status }) => {
    return (
        <div class="oneListing">
            <h4>{name}</h4>
            <div class="imageClassL"><img class="imageScale" src={image} alt=""/></div>
            <h5>{caption}</h5>
            <p class="pL">{contact}<br/>
                {date},{time}<br/>
                {status}</p>
        </div>
    );
};

export default Listing;
