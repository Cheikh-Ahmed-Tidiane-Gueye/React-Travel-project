import { useEffect } from 'react'

import './home.css'
import './home.scss'

import video from '../../assets/video.mp4'

import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  // scoll animation
  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <section className='home'>
      <div className="overlay"></div>

        <video src={video} muted autoPlay loop type="video.mp4"></video>

        <div className="homeContent container">

          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">Nos forfaits</span>
            <h1 data-aos="fade-up" className="homeTitle">Recherchez vos vacances</h1>
          </div>

          <div data-aos="fade-up" className="cardDiv grid">

            <div className="destinationInput">
              <label htmlFor="city">Recherchez votre déstination :</label>
              <div className="input flex">
                <input type="text" placeholder='Entrer le nom ici ...' />
                <GrLocation className='icon'/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">selectionner votre date :</label>
              <div className="input flex">
                <input type="date" placeholder='Entrer le nom ici ...' />
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Prix maximum :</label>
                <h3 className="total">3.060.000 F CFA</h3>
              </div>
              <div className="input flex">
                <input type="range" max={3060000} min={612000}/>
              </div>
            </div>

            <div className="searchOption flex">
              <HiFilter className='icon'/>
              <span>PLUS DE FILTRES</span>
            </div>

          </div>

          <div data-aos="fade-up" className="homeFooterIcon flex">

            <div className="rightIcons">
              <FiFacebook className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <SiTripadvisor className="icon"/>
            </div>

            <div className="leftIcons">
              <BsListTask className="icon"/>
              <TbApps className="icon"/>
            </div>

          </div>
        </div>
    </section>
  )
}
