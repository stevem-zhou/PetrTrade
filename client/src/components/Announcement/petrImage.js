import React from 'react';
import './petrImage.css';

// name, instagram handle, date/time of drop
// function PetrImage(name, ig, dt) {

const PetrImage = ({ name, image, ig, dt }) => {
    return (
        <div class="responsive">
            <div class="gallery">
                <a target="_blank" href={image}>
                    <img src={image} alt={name} width="600" height="400"></img>
                </a>
                <div class="desc">{name}</div>
                <div class="desc">{ig}</div>
                <div class="desc">{dt}</div>
            </div>
        </div>
    );
};

export default PetrImage;