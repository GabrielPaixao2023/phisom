import '../css/home.css'
import '../components/hover-botao/fancyButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export function Home() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, {
            threshold: 0.1
        });

        const elements = document.querySelectorAll('.reveal-left, .reveal-right');
        elements.forEach(el => observer.observe(el));

        // Cleanup quando o componente for desmontado
        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    /* Função que redireciona do quem somos até a segunda sessao do site */

    useEffect(() => {
        if (location.hash === '#quem-somos') {
            setTimeout(() => {
                const target = document.getElementById('quem-somos');
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 200);
        }
    }, [location]);

    return (
        <>
            <section className='primeira-sessao'>
                <div className="trasformamos">
                    <h1>Transformamos <span className='ideias'>ideias</span> em
                        <span className='ideias'> experiências</span> digitais</h1>
                    <p>Sistemas modernos, rápidos e sob medida para o seu negócio!</p>

                    <div className="solicite-orcamento">
                        <button className="fancy-button">Solicite um orçamento</button>
                    </div>
                </div>

                <div className="primeiraImg">
                    <img src="/img/primeiraImg.svg" alt="" />
                </div>
            </section>

            <section className='segunda-sessao' id="quem-somos">
                <div className="sobre">
                    <h2>Sobre a Phisom</h2>
                    <p>Na Phisom, transformamos ideias em experiências digitais. Somos uma empresa especializada na criação de sites modernos, funcionais e responsivos, com foco total na performance, design e experiência do usuário.
                        Acreditamos que um bom site não é apenas bonito — ele precisa comunicar, engajar e converter. Por isso, unimos estratégia, criatividade e tecnologia para desenvolver soluções personalizadas para cada cliente, seja um pequeno negócio local ou uma grande empresa em crescimento.</p>
                </div>
            </section>

            <section className='terceira-sessao'>
                <div className="servicos">
                    <h2>Como podemos te ajudar?</h2>
                </div>

                <div className="cards-servicos">
                    <div className="card">
                        <img src="/img/institucionais.svg" alt="" />
                        <p className="titulo" id='titulo'>Sites <br /> institucionais</p>
                        <div className="descricao-hover">
                            <p>
                                Criação de sites profissionais voltados para apresentar sua empresa, serviços e valores de forma clara, moderna e confiável.
                            </p>
                            <p>
                                Ideal para fortalecer sua presença online e transmitir credibilidade aos seus clientes.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/img/portfolios.svg" alt="" />
                        <p id='titulo1'>Portfólios</p>
                        <div className="descricao-hover">
                            <p>Mostre seus melhores trabalhos em um site elegante e responsivo.</p>
                            <p>Ideal para designers, fotógrafos, artistas e freelancers.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/img/e-commerces.svg" alt="" />
                        <p id='titulo'>E-commerces</p>
                        <div className="descricao-hover">
                            <p>Criação de lojas virtuais completas, com foco em conversão.</p>
                            <p>Plataforma segura, moderna e de fácil gestão.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/img/landing-pages.svg" alt="" />
                        <p id='titulo'>Landing Pages</p>
                        <div className="descricao-hover">
                            <p>Páginas otimizadas para campanhas, lançamentos e captação de leads.</p>
                            <p>Design atrativo com foco em resultado.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="quarta-sessao" id="quarta-sessao">
                <div className="projetos">
                    <h3>
                        Ainda na dúvida? Veja alguns de <br />
                        nossos projetos!
                    </h3>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        loop={true}
                        className="carrossel-projetos"
                    >
                        <SwiperSlide>
                            <div className="projeto-card d-oliveira">
                                <img src="/img/imgD-oliveira.svg" alt="" />
                                <a
                                    href="https://www.d-oliveirasolucoes.com.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="fancy-button">D’ oliveirasolucoes</button>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="projeto-card eletricCompany">
                                <img src="/img/imgEletricCompany.svg" alt="" />
                                <a
                                    href="https://www.electriccsys.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="fancy-button">Electric Company</button>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="projeto-card deploy">
                                <img src="/img/imgDeploy.svg" alt="" />
                                <a
                                    href="https://www.deploysolution.com.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="fancy-button">Deploy Solution</button>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="projeto-card sanpel">
                                <img src="/img/imgSanPel.svg" alt="" />
                                <a
                                    href="https://www.sanpelcaldsolda.com.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="fancy-button">San Pel</button>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>


            <section className='quinta-sessao'>
                <div className="diferencias">
                    <h3>Nossos diferenciais</h3>

                    <div className="atendimento reveal-left">
                        <img src="/img/ok.svg" alt="" />
                        <div className="descricaoAtendimento">
                            <h4>Atendimento direto com os desenvolvedores</h4>
                            <p>Você fala com quem realmente entende do assunto. <br />
                                Nada de intermediários ou demora nas respostas.</p>
                        </div>
                    </div>

                    <div className="design-container reveal-right">
                        <div className="descricaoDesign">
                            <h4>Design moderno e personalizado</h4>
                            <p>
                                Criamos interfaces únicas para cada cliente, com foco em <br />
                                estética, identidade visual e experiência do usuário.
                            </p>
                        </div>
                        <img src="/img/ok.svg" alt="Ícone" />
                    </div>

                    <div className="atendimento reveal-left">
                        <img src="/img/ok.svg" alt="" />
                        <div className="descricaoAtendimento">
                            <h4>Sites rápidos e responsivos</h4>
                            <p>Desempenho é prioridade, todos os sites são otimizados <br />
                                para carregar rápido e funcionar bem em qualquer dispositivo.</p>
                        </div>
                    </div>

                    <div className="design-container reveal-right">
                        <div className="descricaoDesign">
                            <h4>Código limpo e boas práticas</h4>
                            <p>
                                Trabalhamos com as melhores tecnologias e padrões do <br />
                                mercado, garantindo segurança e manutenção fácil.
                            </p>
                        </div>
                        <img src="/img/ok.svg" alt="Ícone" />
                    </div>
                </div>
            </section>

        </>
    )
}