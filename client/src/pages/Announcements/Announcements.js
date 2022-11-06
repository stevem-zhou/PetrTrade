import React from 'react';
import "./Announcements.css";
import PetrImage from '../../components//Announcement/petrImage';
import AnnouncePopup from '../../components/annoucementform/announcepopup';
import AnnouncementForm from '../../components/annoucementform/announcementform';


//name, image, ig, date
function CreateAnnouncement() {
    // if click the button then create the announcement form
    document.getElementById("myForm").style.display = "block";

}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function Announcements() {
    return (
        <div>
            <h1 class="head-spacer"></h1>
            <table id="Announcement-title">
                <tr>
                    <th><AnnouncePopup><AnnouncementForm></AnnouncementForm></AnnouncePopup></th>
                    <th ><h1>Announcements</h1></th>
                </tr>
            </table>

            <div class="form-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                    <h1>Login</h1>

                    <label for="Petr"><b>Petr</b></label>
                    <input type="text" placeholder="Enter your Petr's name" name="Petr" required></input>

                    <label for="Instagram"><b>Instagram</b></label>
                    <input type="instagram" placeholder="Enter your IG Handle" name="Instagram" required></input>

                    <label for="Date"><b>Drop Date</b></label>
                    <input type="date" placeholder="Enter your estimated Drop Date" name="date" required></input>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                </form>
            </div>

            {/*insert component going down-- probably use a for loop*/}

            <PetrImage name={"Petrfrog"} image={"https://ih1.redbubble.net/image.933518353.9101/st,small,507x507-pad,600x600,f8f8f8.jpg"} ig={"john123"} dt={"Novemeber 2, 2022"} />
            <PetrImage name={"Petr"} image={"https://ih1.redbubble.net/image.807069673.6081/st,small,507x507-pad,600x600,f8f8f8.jpg"} ig={"jdsl234"} dt={"January 3, 2023"} />
            <PetrImage name={"Petrdoctor"} image={"https://ih1.redbubble.net/image.2044722965.4965/st,small,507x507-pad,600x600,f8f8f8.jpg"} ig={"kl9011"} dt={"August 5, 2023"} />

        </div>
    );
};

export default Announcements;
