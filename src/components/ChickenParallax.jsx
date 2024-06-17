import './ChickenParallax.css';
import fence from '../assets/fence.png';
import grass from '../assets/grass.png';
import coop from '../assets/coop.png';
import chicken from '../assets/chicken.png';
import leafL from '../assets/leafL.png';
import leafR from '../assets/leafR.png';
import chickenLogo from '../assets/chickenlogo.png'
import { useState } from 'react';
import { useEffect } from 'react';

function ChickenParallax() {

    const [offsetY, setOffsetY] = useState(0);

    //Met à jour l'état 'offsetY' avec la valeur actuelle de window.scrollY
    //Lorsqu'on fait défiler la page, handleScroll est appelée et la position actuelle de défilement est stockée dans offsetY
    const handleScroll = () => {
        setOffsetY(window.scrollY);

    };

    console.log(window.scrollY) //https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY

    //useEffect est utilisé pour exécuter du code après que le composant a été monté (et éventuellement après chaque rendu).
    //Le tableau vide [] comme deuxième argument signifie que cet effet ne doit s'exécuter qu'une seule fois, après le premier rendu du composant.
    //window.addEventListener('scroll', handleScroll) ajoute un gestionnaire d'événements pour l'événement scroll sur l'objet window. Cela signifie que chaque fois que l'utilisateur fait défiler la page, la fonction handleScroll sera appelée.
    //La fonction de nettoyage return () => { window.removeEventListener('scroll', handleScroll); } est exécutée lorsque le composant est démonté. Cela supprime le gestionnaire d'événements de défilement pour éviter les fuites de mémoire.
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
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
            <div id='parallaxContainer'>
                <img src={fence} alt="fence" className="parallaxLayer" style={{ transform: `translateX(${offsetY * -0.2}px)` }} /> {/* TranslateX: défilement horizontal */}
                <h1 className="parallaxLayer" style={{ transform: `translateY(${offsetY * 0.9}px)` }}>Chicken Parallax</h1 > {/* TranslateY: défilement vertical */}
                <img src={grass} alt="grass" className="parallaxLayer" />
                <img src={coop} alt="coop" className="parallaxLayer" />
                <img src={chicken} alt="chicken" className="parallaxLayer" style={{ transform: `translateY(${offsetY * 1.5}px)` }} />
                <img src={leafL} alt="leaf left" className="parallaxLayer" style={{ transform: `translateX(${offsetY * -0.8}px)` }} />
                <img src={leafR} alt="leaf right" className="parallaxLayer" style={{ transform: `translateX(${offsetY * 0.8}px)` }} />
            </div>
        </header>
    )
}

export default ChickenParallax

// Résumé du fonctionnement global:

// Lorsque le composant ChickenParallax est monté, useEffect ajoute un gestionnaire d'événements scroll à la fenêtre.
// À chaque défilement, handleScroll est appelé, mettant à jour l'état offsetY avec la position actuelle de défilement verticale (window.scrollY).
// Les transformations CSS sont appliquées aux éléments de l'interface en utilisant la valeur de offsetY pour créer un effet de parallaxe.