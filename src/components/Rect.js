const Rect = (props) => {
    return (
        <div className={`box ${props.color}`} style={props.style}>
          <span className="box-label">
          left: {props.style.left} top: {props.style.top}
          </span>
        </div>
    )
}

export default Rect;