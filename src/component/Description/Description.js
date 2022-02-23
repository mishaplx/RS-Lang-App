import './Description.css'
import Option from '../Option/Option'
import { Link } from 'react-router-dom'

function Description() {
  const sources = [
    `${require(`../../assets/options/book.jpg`)}`,
    `${require(`../../assets/options/stats.jpg`)}`,
    `${require(`../../assets/options/games.jpg`)}`
  ]
  const options = [
    { image: sources[0], title: 'Учебник', description: 'Около 3600 слов можно найти в электронном учебнике, пользуйтесь им для изучения или повторения уже изученных английских слов, разбитых на разделы от легкого к более сложному' },
    { image: sources[1], title: 'Статистика', description: 'В процессе изучения английских слов, формируется статистика, следите за своим прогрессом изучения и достигайте высоких показателей' },
    { image: sources[2], title: 'Мини-игры', description: 'Играйет в мини-игры (Аудиовызов, Спринт), улучшай свои навыки изучения английского языка, также тренируй свою память, запоминая слова и воспринимай их на слух' }
  ]
  return (
    <div className='description'>
      <div className="description-content">
        <h2>
          Описание и возможности приложения
        </h2>
        <div className="description-content-options">
          <Link to="/RS-Lang-App/textbook">
          <Option image={options[0].image} title={options[0].title} description={options[0].description} />
          </Link>
          <Link to="/RS-Lang-App/statistics">
          <Option image={options[1].image} title={options[1].title} description={options[1].description} />
          </Link> 
          <Link to="/RS-Lang-App/minigames">
          <Option image={options[2].image} title={options[2].title} description={options[2].description} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Description