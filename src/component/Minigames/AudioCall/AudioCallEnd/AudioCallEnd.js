import './AudioCallEnd.css'

function AudioCallEnd() {
  return (
    <div className='end'>
      <div className='end-content'>
        <h1>Конец игры</h1>
        <div className='correct-container'>
          <p>Количество верных ответов: {localStorage.getItem('correct')}</p>
        </div>
      </div>
    </div>
  )
}

export default AudioCallEnd