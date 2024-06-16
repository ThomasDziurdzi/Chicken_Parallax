import "./ChickenParallax.css"
import chicken from "../assets/chicken.png"
import coop from "../assets/coop.png"
import fence from "../assets/fence.png"
import grass from "../assets/grass.png"
import leafL from "../assets/leafL.png"
import leafR from "../assets/leafR.png"
import { useEffect, useState } from 'react';


function ChickenParallax(){
    const [offsetY,setOffsetY] = useState(0)

    const handleScroll = () => {
        setOffsetY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    return(
        <header>
            <nav style={{ transform: `translateY(${offsetY * 1}px)` }}>
                <h2>Logo</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div id="parallaxContainer">
                <img src={fence} alt="" className="parallaxLayer" style={{ transform: `translateX(${offsetY * -0.2}px)` }}/>
                <h1 className="parallaxLayer" style={{ transform: `translateY(${offsetY * 1}px)` }}>Chicken Parallax</h1>
                <img src={grass} alt="" className="parallaxLayer" />
                <img src={coop} alt="" className="parallaxLayer"/>
                <img src={chicken} alt="" className="parallaxLayer" style={{transform: `translateY(${offsetY * 2.9}px)` }}/>
                <img src={leafL} alt="" className="parallaxLayer" style={{ transform: `translateX(${offsetY * -0.5}px)` }}/>
                <img src={leafR} alt="" className="parallaxLayer" style={{ transform: `translateX(${offsetY * 0.5}px)` }}/>
            </div>
        </header>
    )
}

export default ChickenParallax