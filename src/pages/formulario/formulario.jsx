import "./formulario.css"
import { Header } from "../../Components/header/header"
import { ButtonLink } from "../../Components/button-link/button-link"



export const FormPage = () => {
    return (
        <main>
            <Header />
            <div className="box-form">
                <form action="">
                    <input type="text" name="nome" placeholder="nome" />
                    <input type="text" name="nome" placeholder="nome da empresa" />
                    <input type="email" name="nome" placeholder="email exemplo:julio@gmail.com" />
                    <input type="tel" name="nome" placeholder="numero de telefone" />
                    <ButtonLink style={{
                        width: 150,
                        height: 60,
                        marginTop: 20,
                        fontSize: 20
                    }} text={"enviar"} />
                </form>
            </div>
        </main>

    )
}