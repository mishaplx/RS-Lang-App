import Member from '../Member/Member'
import './Team.css'

function Team() {
  const avatars = [
    `${require(`../../assets/team/misha.jpg`)}`,
    `${require(`../../assets/team/misha.jpg`)}`,
    `${require(`../../assets/team/nikita.jpg`)}`
  ]
  const members = [
    { avatar: avatars[0], FIO: 'Михаил Плехневич', description: '24 года, изучаю JS 6 месяцев Разработал:........ Навыки: JavaScript, TypeScript, GIT, Webpack, SASS/SCSS, NodeJs(основы), React(основы) ', githubLink: 'https://github.com/mishaplx', githubName: 'mishaplx' },
    { avatar: avatars[1], FIO: 'Виталий Сорока', description: 'инфа о тебе.....', githubLink: 'https://github.com/vitalysoroko95', githubName: 'vitalysoroko95' },
    { avatar: avatars[2], FIO: 'Никита Кислый', description: `20 лет, студент 3-го курса, БарГу, по специальности "Информационные системы и технологии". Навыки: JavaScript, TypeScript, GIT, Webpack, SASS/SCSS, NodeJs(основы), React(основы)`, githubLink: 'https://github.com/KISLY74', githubName: 'KISLY74' }
  ]
  return (
    <div className="team">
      <div className="team-content">
        <h2>
          О команде
        </h2>
        <div className="team-content-members">
          <Member
            avatar={members[0].avatar}
            FIO={members[0].FIO}
            description={members[0].description}
            githubLink={members[0].githubLink}
            githubName={members[0].githubName} />
          <Member
            avatar={members[1].avatar}
            FIO={members[1].FIO}
            description={members[1].description}
            githubLink={members[1].githubLink}
            githubName={members[1].githubName} />
          <Member
            avatar={members[2].avatar}
            FIO={members[2].FIO}
            description={members[2].description}
            githubLink={members[2].githubLink}
            githubName={members[2].githubName} />
        </div>
      </div>
    </div>
  )
}

export default Team