import { useState } from 'react'
import './navbar.css';
import './navbar.scss';
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

export default function Navbar() {

  const [active, setActive] = useState('navBar')

  // Fonction pour toggle navBAr
  function showNav() {
    setActive('navBar activeNavbar')
  }

  // Fonction pour faire disparaitre navBAr
  function removeNavbar() {
    setActive('navBar')
  }

  return (
    <section className='navBarSection' >
        <header className="header flex">

          <div className="logoDiv">
            <a href="#" className="logo">
              <h1>
                <SiYourtraveldottv className="icon" /> Voyage
              </h1>
            </a>
          </div>
          
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">Accueil</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Offres</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Boutique</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">À propos</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Pages</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">News</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Contacts</a>
              </li>

              <button className='btn' >
                <a href='#'>Reserve maintenant</a>
              </button>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className='icon'/>
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon' />
          </div>

        </header>
    </section>
  )
}