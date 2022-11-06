import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import React from 'react';
import "./Listings.css";
import Listing from '../../components/Listing/Listing';



//id,  name, image, caption,  contact, date, time, status
/*    const listingsXXX = [
        { id: "1", name: "Petr1", image: "https://newuniversity.org/wp-content/uploads/2018/11/IMG_20181120_1707501.jpg", caption: "3", contact: "4", date: "M/D/Y", time: "4:20PM", status: "Alive" },
        { id: "2", name: "Peterjhbkrjne", image: "https://newuniversity.org/wp-content/uploads/2018/11/IMG_20181120_1707501.jpg", caption: "3", contact: "4", date: "M/D/Y", time: "4:20PM", status: "Alive" },
        { id: "3", name: "Pe", image: "https://newuniversity.org/wp-content/uploads/2018/11/IMG_20181120_1707501.jpg", caption: "3", contact: "4", date: "M/D/Y", time: "4:20PM", status: "Alive" }
    ];*/

//useEffect(async =>)

const NODE_APP = "http://localhost:3001";

// images is the parameter - array or struct that stores image url of Petr user has inputted
function Listings(images) {
    const [listings, setListings] = useState([]);

    const getData = async () => {
        try {
            // const results = await NODE_APP.get('/listing');
            const results = await axios.get(`${NODE_APP}/listing`);
            setListings(results.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);



    return (
        <div class="listings">
            <header><div class="petrTitle"></div></header>
            <div class="gallery">
                {/* <Listing id={"1"} name={"PETR ONE"} image={"https://newuniversity.org/wp-content/uploads/2018/11/IMG_20181120_1707501.jpg"} caption={"default ptr"} contact={"1"} date={"1"} time={"1"} status={"1"} />
                <Listing id={"2"} name={"PETR TWO"} image={"https://findicons.com/files/icons/1714/dropline_neu/128/dialog_information.png"} caption={"msyeter pter"} contact={"1"} date={"1"} time={"1"} status={"1"} />
                <Listing id={"3"} name={"PE"} image={"https://findicons.com/files/icons/1714/dropline_neu/128/dialog_information.png"} caption={"nullpetr"} contact={"1"} date={"1"} time={"1"} status={"1"} />
                <Listing id={"4"} name={"PETR FIVE"} image={"https://findicons.com/files/icons/1714/dropline_neu/128/dialog_information.png"} caption={""} contact={"1"} date={"1"} time={"1"} status={"1"} /> */}

                {listings.map(l => <Listing id={l.id} name={l.name} image={l.image} caption={l.image} contact={l.contact} date={l.date} time={l.time} status={l.status} /> )}
            </div>
            <table id="post">
                <tr>
                    <th><button>POST</button></th>
                    <th><h1>Petr Sticker Trade</h1></th>
                </tr>
            </table>
        </div>
    )
}

export default Listings;