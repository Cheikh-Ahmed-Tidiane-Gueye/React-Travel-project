import {useEffect} from 'react';

import './main.css'
import './main.scss'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck  } from "react-icons/hi";

import img0 from '../../assets/img0.jpg'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.webp'

import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Main() {

  const Data = [
    {
      id: 0,
      imgSrc: img0,
      destTitle: 'Monument de la Renaissance Africaine',
      location: 'Sénégal',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' Gratuitement',
      description: "Le Monument de la Renaissance africaine est un groupe sculpté monumental, œuvre du sculpteur Virgil Magherusan, situé à Ouakam, une commune d'arrondissement de Dakar."
    },
    {
      id: 1,
      imgSrc: img1,
      destTitle: 'Bora Bora',
      location: 'New Zeeland',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 420.504 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Machu Piccu',
      location: 'Peru',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 360.432 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Great Barrier Reef',
      location: 'Australia',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 420.504 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: 'Cappadocia',
      location: 'Turkey',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 480.576 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 660.792 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: 'Cinque Terre',
      location: 'Italy',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 504.605 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: 'Angkor Wat',
      location: 'Cambodia',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 474.569 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: 'Taj Mahal',
      location: 'India',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 540.648 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: 'Bali Island',
      location: 'Indonesia',
      grade: 'DÉTENTE CULTURELLE',
      fees: ' 300.360 F CFA',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos quae earum! Fugit facere rerum vel omnis, distinctio quam debitis fuga ipsum dolore, quis quisquam natus numquam itaque aspernatur reprehenderit'
    },

  ]

  // scoll animation
  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">
    
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Les déstinations les plus visitées</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return(
              <div key={id} data-aos="fade-up" className="sigleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span> {grade} <small>+1</small> </span>
                    </div>
                    <div className="price">
                      <h5> {fees} </h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p> {description} </p>
                  </div>

                  <button className='btn flex'>
                    DETAILS
                    <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>

            ) 
          })
        }
      </div>

    </section>
  )
}
