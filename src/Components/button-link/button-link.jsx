import "./button-link.css"



// eslint-disable-next-line react/prop-types
export const ButtonLink = ({ link, text, style }) => {
    return <a className="a" href={link}>
        <button className="button" style={style}>{text}</button>
    </a>
}