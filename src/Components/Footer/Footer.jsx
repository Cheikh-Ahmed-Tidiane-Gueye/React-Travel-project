import { useEffect } from 'react'

import './footer.css';
import './footer.scss';

import video1 from '../../assets/video1.mp4';

import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Footer() {

  // scoll animation
  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])

  return (
     <section className="footer">

        <div className="videoDiv">
          <video src={video1} loop autoPlay muted type="video"></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>RESTER EN CONTACT</small>
              <h2>Voyager avec nous</h2>
            </div>

            <div className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder='Entrer votre adresse email'/>
              <button data-aos="fade-up" className="btn flex" type='submit'>
                ENVOYER  <FiSend className='icon/>'/>
              </button>
            </div>

          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className='logo flex'>
                   <MdOutlineTravelExplore className='icon' />Voyage.
                </a>
              </div>

              <div data-aos="fade-up" className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laborum soluta distinctio deserunt unde ea similique? 
                Debitis harum reprehenderit possimus, 
                cum repellendus cumque necessitatibus voluptates sequi eaque laboriosam optio, 
                recusandae enim!
              </div>

              <div data-aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className='icon'/>
                <AiFillYoutube className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaTripadvisor className='icon'/>
              </div>
            </div>

            <div className="footerLinks grid">

              {/* Groupe 1 */}
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  NOTRE AGENCE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Assurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Agence
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Tourisme
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Paiement
                </li>
              </div>

              {/* Groupe 2 */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                PARTENAIRES
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Réservations
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Voiture de location
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Auberges du monde
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Tripadvisor
                </li>
              </div>

              {/* Groupe 3 */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  DERNIÈRE MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Dakar
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Londre
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> New York
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Indonesi
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Europe
                </li>
              </div>

            </div>

            <div className="footerDiv flex">
              <small>MEILLEURS THÈMES DE VOYAGE EN LIGNE</small>
              <small>COPYRIGHT RESERVED</small>
            </div>
          </div>
        </div>
     </section>
  )
}
