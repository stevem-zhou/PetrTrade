import React, {useState}from "react";
import axios from "axios";

const NODE_URL="http://localhost:3001"

const AnnouncementForm = (announcement) => {
    const [newDate, setNewDate] = useState();
    const [newTime, setNewTime] = useState();
    const [newImage, setNewImage] = useState();
    const [newInstagram, setNewInstagram] = useState();

    function handle_submit(){
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

    function changedate(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewDate(event.target.value);
    }
    
    function changetime(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewTime(event.target.value);
    }

    function changeimage(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewImage(event.target.value);
    }

    function changeinstagram(event){
        event.preventDefault();
        console.log(event.target.value);
        setNewInstagram(event.target.value);
    }

    return (<div className="form">
           
            <h1> Create an Announcement </h1>
            <form onSubmit={handle_submit}>

            <label for="date">Date:</label>
            <input onChange={changedate} type="text" id="date" name="date"></input>

            <label for="time;">Time:</label>
            <input onChange = {changetime}type="text" id="time" name="time"></input>

            <label for="image">Image:</label>
            <input onChange={changeimage}type="text" id="image" name="captiimageon"></input>

            <label for="instagram">Instagram:</label>
            <input onChange={changeinstagram}type="text" id="instagram" name="instagram"></input>

            <button type="submit" value="Submit"> Submit</button>
            </form>
            </div>)
};

export default AnnouncementForm;

