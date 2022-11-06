import React, {useState}from "react";
import axios from "axios";

const NODE_URL="http://localhost:3001"

const AnnouncementForm = (announcement) => {
    const [newDate, setNewDate] = useState();
    const [newTime, setNewTime] = useState();
    const [newImage, setNewImage] = useState();
    const [newInstagram, setNewInstagram] = useState();

    function handle_submit(event){
        event.preventDefault();
        axios.post(
            `${NODE_URL}/announcements`,
            {
                "date": newDate,
                "time": newTime,
                "image": newImage,
                "instagram": newInstagram,
            }
        );
    };
    

    return (<div className="form">
           
            <h1> Create an Announcement </h1>
            <form onSubmit={handle_submit}>

            <label for="date">Date:</label>
            <input onChange={setNewDate} type="text" id="date" name="date"></input>

            <label for="time;">Time:</label>
            <input onChange = {setNewTime}type="text" id="time" name="time"></input>

            <label for="image">Image:</label>
            <input onChange={setNewImage}type="text" id="image" name="captiimageon"></input>

            <label for="instagram">Instagram:</label>
            <input onChange={setNewInstagram}type="text" id="instagram" name="instagram"></input>

            <button type="submit" value="Submit"> Submit</button>
            </form>
            </div>)
};

export default AnnouncementForm;

