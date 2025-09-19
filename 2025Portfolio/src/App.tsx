import './App.css'
import WeatherBox from './components/WeatherBox'
import StackBox from './components/StackBox'

function App() {
  return (
    <div>
      <div className="left-float">
        <WeatherBox />
      </div>
      <div className='title-box'>
        <h2 className='subtitle'>"사용자 중심 사고, 팀워크 중심의 협업, 기술 중심의 완성도"</h2>
        <h1 className='maintitle'>안녕하세요, 개발자 <span className='font-purple'>정희성</span>입니다.</h1>
      </div>
      <StackBox />
      <div className='projects-box'>
        <h2 className='title'>Projects</h2>
        <div className="project-list"></div>
      </div>
    </div>
  )
}

export default App
