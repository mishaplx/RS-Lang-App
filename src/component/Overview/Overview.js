import './Overview.css'

function Overview() {
  const srcImage = `${require('../../assets/overview.jpg')}`
  return (
    <div className="overview">
      <img src={srcImage} alt="overviewImage" />
      <div className="overview-content">
        <h1>
          Приложение для тех,
        </h1>
        <span> кто изучает английский язык</span>
        <p>Изучай английский с помощью данного приложения, увеличивай свой словарный запас, а также учись воспринимать английские слова на слух. Ставь цель и добивайся!</p>
      </div>
    </div>
  )
}

export default Overview