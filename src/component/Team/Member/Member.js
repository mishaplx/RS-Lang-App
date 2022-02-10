import './Member.css'

function Member(props) {
  return (
    <div className="member">
      <div className="member-content">
        <img src={props.avatar} alt="Аватарка" />
        <div className="member-sub-content">
          <h3>
            {props.FIO}
          </h3>
          <span>
            Разработчик
          </span>
          <p className="info-about-member">
            <span>Информация</span>
            {props.description}
          </p>
          <div className="container-github">
            <p>{props.githubName}</p>
            <a href={props.githubLink}>
              <img
                src={`${require('../../../assets/github.png')}`}
                alt="linkToGithub" />
            </a>
            <span>GITHUB-аккаунт</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Member