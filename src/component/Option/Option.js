import './Option.css'

function Option({ image, title, description }) {
  return (
    <div className="option">
      <div className="option-content">
        <img src={image} alt="Картинка" />
        <div className="option-sub-content">
          <h3>
            {title}
          </h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Option