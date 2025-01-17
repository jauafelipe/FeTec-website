import './home.css'
import { Box } from '../../Components/box/box'
import { ButtonLink } from '../../Components/button-link/button-link'
import { Header } from '../../Components/header/header'
import { Link } from 'react-router'

export const Home = () => {

    return (
        <>
            <main>
                <Header />
                <div className='box-presentation'>
                    <div className="text-and-button">
                        <h1>Venha transformar suas ideias em realidade conosco</h1>
                        <p>Desenvolvimento de software sob medida para sua empresa</p>
                        <ButtonLink link="/formulario" text="saiba mais" />
                    </div>
                    <div className="content-images">
                        <div className="img1">
                            <img src="/images/analise.png" alt="" />
                        </div>

                        <div className="img2">
                            <img src="/images/homem_comPC.png" alt="" />
                        </div>

                        <div className="img3">
                            <img src="/images/negocio.png" alt="" />
                        </div>
                        <div className="img4">
                            <img src="/images/escalabilidade.png" alt="" />
                        </div>
                    </div>


                </div>



                <div className="escolha-texto">
                    <h1>Por que escolher nossos serviços?</h1>
                </div>


                <div className='escolha'>
                    <div>
                        <img src="/images\escolha_servicos\solucao.png" alt="" />
                        <h3>Soluções personalizadas para atender às suas necessidades.</h3>
                    </div>
                    <div>
                        <img src="\images\escolha_servicos\suporte-tecnico.png" alt="" />
                        <h3>Suporte especializado em todas as etapas do projeto.</h3>
                    </div>
                    <div>
                        <img src="/images/escolha_servicos/usando-o-telefone.png" alt="" />
                        <h3>Atraia mais clientes com uma presença online impactante.</h3>
                    </div>

                </div>


                <div className='box-container'>
                    <div>
                        <Box
                            images="/images/box/processo.png"
                            text={"Tenha total transparência e controle. Acompanhe cada etapa do projeto em tempo real."}
                            element={<ButtonLink link={"/formulario"} text={"Saiba mais"} />}
                        />
                    </div>
                    <div>
                        <Box
                            images="/images/box/design-de-interface-do-usuario.png"
                            text={"Experiência visual incrível e navegação intuitiva. Designs criados para encantar e converter."}
                            element={<ButtonLink link={"/formulario"} text="Saiba mais" />}
                        />
                    </div>
                    <div>
                        <Box
                            images="/images/box/orcamento.png"
                            text={"Soluções acessíveis sem abrir mão da qualidade. Perfeito para o seu negócio."}
                            element={<ButtonLink link={"/formulario"} text={"Saiba mais"} />}
                        />
                    </div>
                </div>
                <div className="content-finish">
                    <h1>Pronto para elevar sua empresa ao próximo nível? ?</h1>
                    <div>
                        <Box
                            images={"/images/logo.png"}
                            text={"Escale seu negocio no digital com a gente HOJE!"}
                            element={<ButtonLink link={"/formulario"} text={"estou pronto"} />} />
                    </div>
                </div>

                <footer className='footer'>
                    <h1 style={{ color: "#fff" }}>
                        para mais contato clique nas imagens
                    </h1>
                    <div className="imgs">
                        <Link href="/">
                            <img src="/images/logo.png" alt="" />
                        </Link>
                        <Link href="https://www.instagram.com/fefo_dev/?theme=dark">
                            <img src="/images/ig.png" alt="" /></Link>
                        <Link href="mailto:jauafelipe345@gmail.com?subject=serviço de software ou desejo escalar meu negocio no online&body=Digite aqui">
                            <img src="/images/gmail.png" alt="" /></Link>
                    </div>
                </footer>
            </main>
        </>
    )
}

