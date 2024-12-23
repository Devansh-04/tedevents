import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/navbar/Navbar";
import ScrollButton from '../../../components/scrollButton/scrollButton';
import theme24 from "../../../assets/theme24.jpg";
import logo_23 from "../../../assets/2023_logo.png";
import Footer from "../../../components/footer/Footer"
import styles from "./Event_24.module.css";
import Modal from "./Modal"
import Card from "./speakerCard";
import Card2 from "./memberCard";
import Data from "./speaker'24_Data"
import aleena from "./speakers24/aleena.jpg"
import asutosh from "./speakers24/asutosh.jpg"
import captain from "./speakers24/captain.jpg"
import illina from "./speakers24/illina.jpg"
import Neog from "./speakers24/Neog.jpg"
import rajat from "./speakers24/rajat.jpg"
import mrinal from "./speakers24/mrinal.jpg"
import sudhana from "./speakers24/sudhana.jpg"
import Ashish from "./team24/Ashish_new.jpeg"
import Divyansh from "./team24/Divyansh_square.jpg"
import Harsh from "./team24/Harsh_square.jpg"
import Kanv from "./team24/Kanv_square.png"
import Manish from "./team24/Manish_square.jpg"
import Pankaj from "./team24/Pankaj1_square.jpg"
import Pranjal from "./team24/Pranjal_square.jpg"
import Punakshit from "./team24/Punakshit.jpg"
import Rajeev from "./team24/Rajeev.jpg"
import Ravi from "./team24/Ravi_square.jpg"
import Sankalp from "./team24/Sankalp_square.jpg"
import Sravya from "./team24/Sravya_square.jpg"
import Triparna from "./team24/Triparna Di_square.jpg"
import Newsletter from '../../../components/Newsletter/newsletter';

const Event_24 = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const openModal = ({name, about, description, image, youtubeLink}) => {
    setSelectedSpeaker({name, about, description,image, youtubeLink});
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <div id={styles.body}>
        <header>
          <div>
            <img src={logo_23} alt="theme logo" />
            <div id={styles.theme}>
              <h1>Theme 2024:</h1>
              <h1>Echoes of Stillness</h1>
            </div>
          </div>
          <h2>February 11, 2024</h2>
        </header>
        <main>
          <div id={styles.banner}>
            <img src={theme24} alt="theme'24" />
          </div>
          <div id={styles.about}>
            <h2>About</h2>
            <p>
            The theme for TEDxIITGuwahati 2024 is Echoes of Stillness. What’s that? It’s about fathoming the importance of taking break in process of reaching our goals.
            In today's fast-paced world, it is important to take breaks. These breaks aren't just about relaxing; they're like a timeout to help us grow. Taking a step back lets us think about our journey, what really matters, and it re-energizes us. Like the cicada rests to come back stronger, our breaks become the fertile ground for personal changes. During these breaks, we recharge our energy and also learn more about ourselves. It's a time of self-discovery, where we find hidden strengths and better understand what we want.The lessons learned during these breaks are like a guide for the next steps in our journey.
            The outcome of our breaks might not always be obvious success, but the experience is priceless. It's like a caterpillar in a cocoon — change takes time and patience. When we take a break, we get to let go of old habits, improve our skills, and come out stronger.
            So, taking a break is like celebrating our ability to grow. Whether it's spent relaxing or learning something new, these pauses help us discover more about ourselves and become better people. By honoring rest, we set the stage for a more meaningful and purposeful journey, recognizing that the process is just as important as the destination.
            </p>
          </div>
          <div id={styles.speakers}>
            <h2>Speakers</h2>
            <div id={styles.speakerContainer}>
            <Card func={() => openModal({ name: 'ALEENA RAIS', about: 'Educator and Influencer', description: `${Data.Aleena}`, image: `${aleena}`, youtubeLink:'VhFoTRWZ1FQ' })} name='ALEENA RAIS' id='#aleena' image={aleena} />
            <Card func={() => openModal({name: 'RAJAT RATHOR',about: 'Police Officer and Singer',description: `${Data.Rajat}`,image: `${rajat}`, youtubeLink:'kUsjKNRI4I8'})} name='RAJAT RATHOR' id='#rajat' image={rajat} />
            <Card func={() => openModal({name: 'ILINA SINHA',about: 'IITG Student',description: `${Data.illina}`,image: `${illina}`, youtubeLink:'RN0b4KsWnLc'})} name='ILINA SINHA' id='#illina' image={illina} />
            <Card func={() => openModal({name: 'CAPT SATENDRA SANGWAN',about: 'Former Military Officer',description: `${Data.sangwan}`,image: `${captain}`, youtubeLink:'xf34xGkjZjU'})} name='CAPT SATENDRA SANGWAN' id='#captain' image={captain} />
            <Card func={() => openModal({name: 'RITUPARNA NEOG',about: 'Social Activist',description: `${Data.Rituparna}`,image: `${Neog}`, youtubeLink:'99rzpc-FIr8'})} name='RITUPARNA NEOG' id='#Neog' image={Neog} />
            <Card func={() => openModal({name: 'ASUTOSH KASHYAP',about: 'Filmmaker and Environmental Activist',description: `${Data.Asutosh}`,image: `${asutosh}`, youtubeLink:'NtUgrPrpVjc&t=1s'})} name='ASUTOSH KASHYAP' id='#asutosh' image={asutosh} />
            <Card func={() => openModal({name: 'SUDHANA SANKAR',about: 'Bharatanatyam Dancer',description: `${Data.Sudhana}`,image: `${sudhana}`, youtubeLink:'BhzZ3c7OtD0'})} name='SUDHANA SANKAR' id='#sudhana' image={sudhana} />
            <Card func={() => openModal({name: 'MRINAL TALUKDAR',about: 'Journalist and Author',description: `${Data.Mrinal}`,image: `${mrinal}`, youtubeLink:'QrjvQuds_gk'})} name='MRINAL TALUKDAR' id='#mrinal' image={mrinal} />
            
            </div>
          </div>
          <div id={styles.team}>
            <h2>Organizing Team</h2>
            <div id={styles.teamContainer}>
            <Card2 name='Sravya Vardhani' about='Organizer' image={Sravya}/>
            <Card2 name='Pranjal Saxena' about='Co-Organizer & Content Head' image={Pranjal}/>
            <Card2 name='Ravi Garlay' about='Content Core' image={Ravi}/>
            <Card2 name='Kanv Chaudhary' about='Content Core' image={Kanv}/>
            <Card2 name='Rajeev Verma' about='Design Head' image={Rajeev}/>
            <Card2 name='Kodudula Ashish Reddy' about='WebOps Head' image={Ashish}/>
            <Card2 name='Harsh Gupta' about='Marketing Head' image={Harsh}/>
            <Card2 name='Divyansh Dadheech' about='Events Head' image = {Divyansh}/>
            <Card2 name='Manish Kumar' about='Events Core' image={Manish}/>
            <Card2 name='Sankalp Setia' about='Speakers Head' image={Sankalp}/>
            <Card2 name='Pankaj Kumar Jha' about='Speakers Core' image={Pankaj}/>
            <Card2 name='Triparna Kalita' about='Speakers Core' image={Triparna}/>
            <Card2 name='Punakshith Singh' about='PR & Media Head' image = {Punakshit}/>
        
            </div>
          </div>
        </main>


        {selectedSpeaker && (
          <Modal
            name={selectedSpeaker.name}
            about={selectedSpeaker.about}
            image={selectedSpeaker.image}
            description = {selectedSpeaker.description}
            func={closeModal}
            youtubeLink={selectedSpeaker.youtubeLink}
          />
        )}
        {selectedSpeaker && <div onClick={closeModal} id={styles.overlay}></div>}

      </div>
      <Newsletter/>
      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default Event_24;