import './App.css';
import WeatherBox from './components/WeatherBox';
import StackBox from './components/StackBox';
import FetchProjects from './lib/FetchProjects';
import FeedbackForm from './components/FeedbackForm';
import FetchFeedback from './lib/FetchFeedback';
import Footer from './components/Footer';
import SetTheme from './components/SetTheme';
import useAnimation from './hooks/useAnimation';

function App() {
  const titleAnimation = useAnimation();
  const projectsAnimation = useAnimation();
  const feedbackAnimation = useAnimation();
  return (
    <div className="app">
      <div className='wrap'>
        <div className="left-float">
          <WeatherBox />
          <SetTheme />
        </div>
        <div className={`title-box ${titleAnimation.isVisible ? "fadein" : null}`} ref={titleAnimation.ref}>
          <h2 className='subtitle'>"사용자 중심 사고, 팀워크 중심의 협업, 기술 중심의 완성도"</h2>
          <h1 className='maintitle'>안녕하세요, 개발자 <span className='font-purple'>정희성</span>입니다.</h1>
        </div>
        <StackBox />
        <div className={`projects-box ${projectsAnimation.isVisible ? "fadein" : null}`} ref={projectsAnimation.ref}>
          <h2 className='title'>Projects</h2>
          <div className="project-list">
            <FetchProjects />
          </div>
        </div>
        <div className={`feedback-box ${feedbackAnimation.isVisible ? "fadein" : null}`} ref={feedbackAnimation.ref}>
          <h2 className='title'>Feedback</h2>
          <p className='subtitle'>더 나은 개발자로 성장하기 위해 여러분들의 의견을 듣고 싶습니다.</p>
          <p className='subtitle'>부족한 점이나 개선이 필요한 부분이 있다면 자유롭게 남겨주세요. 감사합니다!🙏</p>
          <FeedbackForm />
          <FetchFeedback />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
