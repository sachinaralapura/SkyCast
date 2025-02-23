// A common component to render card throughout the app
const CardLayout = (props) => {
    return(
        <div className={`card-container ${props.className ?? ''}`}>
            {props.children}
        </div>
    )
}

export default CardLayout;