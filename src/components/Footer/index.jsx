import "../Footer/footer.css";

export function Footer() {

    return (
        <>
            <footer className='rodape'>
                <div className="linha-rodape"></div>

                <div className="footer">
                    <div className="logo-footer">
                        <figure><img src="/img/LogoPhisom.svg" alt="" /></figure>
                        <p>Desenvolvimento de
                            sites modernos e
                            personalizados.</p>
                    </div>

                    <div className="inicio">
                        <h5>Início</h5>
                        <samp className="gmail">
                            <p>paixaogabriel246@gmail.com</p>
                            <p>gustavopaixao086@gmail.com</p>
                        </samp>

                        <samp className="telefone">
                            <p>(11) 99176-3589</p>
                            <p>(11) 99289-5877</p>
                        </samp>
                    </div>

                    <div className="quem-somos">
                        <h5>Quem somos</h5>
                    </div>

                    <div className="projetos">
                        <h5>Projetos</h5>
                    </div>

                    <div className="orçamento">
                        <h5>Solicite um orçamento</h5>

                        <p>www.phisom.com.br</p>
                    </div>
                </div>

                <div className="direitos-reservados">
                    <img src="/img/Vector.svg" alt="" />
                    <p>Todos os direitos reservados por Phisom</p>
                </div>
            </footer>
        </>
    )
}