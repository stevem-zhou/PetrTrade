import React from 'react';
import "./Listings.css";
import Listing from '../../components/Listing/Listing';


//id,  name, image, caption,  contact, date, time, status
const listings = [
    { id: "1", name: "Petr1", image: "https://newuniversity.org/wp-content/uploads/2018/11/IMG_20181120_1707501.jpg", caption: "3", contact: "4", date: "M/D/Y", time: "4:20PM", status: "Alive" },
    { id: "2", name: "Peterjhbkrjne", image: "https://newuniversity.org/wp-content/uploads/2018/11/IMG_20181120_1707501.jpg", caption: "3", contact: "4", date: "M/D/Y", time: "4:20PM", status: "Alive" },
    { id: "3", name: "Pe", image: "https://newuniversity.org/wp-content/uploads/2018/11/IMG_20181120_1707501.jpg", caption: "3", contact: "4", date: "M/D/Y", time: "4:20PM", status: "Alive" }
];

// images is the parameter - array or struct that stores image url of Petr user has inputted
function Listings(images) {
    return (
        <div class="listings">
            <header>            <div class="petrTitle"></div>
            </header><div class="gallery">            <Listing id={"1"} name={"1"} image={"https://newuniversity.org/wp-content/uploads/2018/11/IMG_20181120_1707501.jpg"} caption={"1"} contact={"1"} date={"1"} time={"1"} status={"1"} />            <Listing id={"2"} name={"1"} image={"https://findicons.com/files/icons/1714/dropline_neu/128/dialog_information.png"} caption={"1"} contact={"1"} date={"1"} time={"1"} status={"1"} />
                <Listing id={"3"} name={"1"} image={"https://findicons.com/files/icons/1714/dropline_neu/128/dialog_information.png"} caption={"1"} contact={"1"} date={"1"} time={"1"} status={"1"} />
                <Listing id={"4"} name={"1"} image={"https://findicons.com/files/icons/1714/dropline_neu/128/dialog_information.png"} caption={"1"} contact={"1"} date={"1"} time={"1"} status={"1"} />

            </div>
            <table id="post">
                <tr>
                    <th><button>POST</button></th>
                    <th><h1>Petr Sticker Trade</h1></th>
                </tr>
            </table>

            {/* listings.map(i => <Listing id={i.id} name={i.name} image={i.image} caption={i.caption} contact={i.contact} date={i.date} time={i.time} status={i.status} />)
            
            try a while loop to add in images at the src? */}
            <table>
                {/* for(let i=0; i< images.length; i++){

                }

                <tr>
                    <td><a href="#">
                        <img height="250" src=i  />
                    </a></td>
                </tr>
                 */}
            </table>


        </div>
    )
}

export default Listings;