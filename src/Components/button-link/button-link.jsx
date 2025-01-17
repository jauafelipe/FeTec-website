import { Link } from "react-router"
import "./button-link.css"



// eslint-disable-next-line react/prop-types
export const ButtonLink = ({ link, text, style }) => {
    return <Link className="a" to={link}>
        <button className="button" style={style}>{text}</button>
    </Link>
}