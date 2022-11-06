import React, {useState}from "react";
import axios from "axios";

const NODE_URL="http://localhost:3001"

const ListingForm = (listing) => {
    const [newName, setNewName] = useState();
    const [newImage, setNewImage] = useState();
    const [newCaption, setNewCaption] = useState();
    const [newContactInfo, setNewContactInfo] = useState();
    const [newDate, setNewDate] = useState();

    
    function handle_submit(event){
        event.preventDefault();
        axios.post(
            `${NODE_URL}/listing`,
            {
                "name": newName,
                "image": newImage,
                "caption": newCaption,
                "contactinfo": newContactInfo,
                "date": newDate
            }
        );
    };

    
    function changename(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewName(event.target.value);
    }

    function changeimage(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewImage(event.target.value);
    }
    function changecaption(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewCaption(event.target.value);
    }
    function changecontactinfo(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewContactInfo(event.target.value);
    }
    function changenewdate(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewDate(event.target.value);
    }
    

    return (<div className="form">
           
            <h1 class="center"> Create a Listing </h1>
            <form onSubmit={handle_submit}>

            <label for="name">Listing name:</label>
            <input onChange={changename} type="text" id="name" name="name"></input>

            <label for="imageurl;">Image URL:</label>
            <input onChange = {changeimage}type="text" id="imageurl" name="imageurl"></input>

            <label for="caption">Caption:</label>
            <input onChange={changecaption}type="text" id="caption" name="caption"></input>

            <label for="contactinformation">Contact Info:</label>
            <input onChange={changecontactinfo}type="text" id="contactinformation" name="contactinformation"></input>

            <label for="date">Date:</label>
            <input onChange={changenewdate}type="text" id="date" name="date"></input>

            <button type="submit" value="Submit"> Submit</button>
            </form>
            </div>)
};

export default ListingForm;

