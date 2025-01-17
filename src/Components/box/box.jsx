import "./box.css"


// eslint-disable-next-line react/prop-types
export const Box = ({ images, text, element }) => {
    return (
        <>
            <div className="box">
                <div>
                    <img src={images} alt="images" /></div>
                <div>
                    <h3>{text}</h3>
                </div>
                <div className="button-element">
                    {element}
                </div>
            </div>

        </>
    )
}