import './Card.css'

const Card = (props) => {
    const cardExternalStyle = 'card ' + props.className;

    return <div className={cardExternalStyle}>{props.children}</div>;
}

export default Card
