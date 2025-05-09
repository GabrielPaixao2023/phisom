import './header.css';
import React from 'react';
import Logo from "../../../public/img/LogoPhisom.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export function Header() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
  

    const navigate = useNavigate();

    const handleScrollToQuemSomos = (e) => {
        e.preventDefault();
        navigate('/');

        setTimeout(() => {
            const section = document.getElementById('quem-somos');
            if (section) {
                scrollToElementSmoothly(section, 1000); // rolagem suave
            }
        }, 100);
    };

    const handleScrollToProjetos = (e) => {
        e.preventDefault();
        navigate('/');

        setTimeout(() => {
            const section = document.getElementById('quarta-sessao');
            if (section) {
                scrollToElementSmoothly(section, 1200);
            }
        }, 100);
    };

    const scrollToElementSmoothly = (element, duration = 10000) => {
        const targetY = element.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            window.scrollTo(0, startY + distance * ease);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };



    return (
        <>
            <header>
                <div className="center">
                    <figure className='Logo'>
                        <Link to="/" ><img src={Logo} alt="" /></Link>
                    </figure>

                    <nav className="menu-desktop">
                        <ul>
                            <li>
                                <Link to="/" onClick={handleScrollToQuemSomos}>Quem somos</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={handleScrollToProjetos} className="nav-item" id="buttonContato">Projetos</Link>
                            </li>
                            <li>
                                <Link to="/servicos" className="nav-item" id="buttonServiços">Solicite um orçamento</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}