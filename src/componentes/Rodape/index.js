import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="rodape">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com">
                            <img src="/imagens/fb.png" alt="fb" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">
                            <img src="/imagens/tw.png" alt="tw" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">
                            <img src="/imagens/ig.png" alt="ig" />
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img className='logo' src="/imagens/logo.png" alt="Logo da Organo"/>
            </section>

            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape

