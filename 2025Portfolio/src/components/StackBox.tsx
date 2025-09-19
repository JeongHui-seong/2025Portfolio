export default function StackBox() {
  return (
    <div className="stack-box">
      <div className="header-box">
        <div className="header-wrapper">
          <h2 className="title">💻 My Stack</h2>
          <a href="https://github.com/JeongHui-seong" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
      <div className="content-box">
        <div className="content-wrapper">
          <p>
            <span className="red-font">const </span>
            <span className="blue-font">developer</span> = {"{"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp; name : <span className="green-font">"정희성"</span>, <br />
            &nbsp;&nbsp;&nbsp;&nbsp; major : [<span className="green-font">"HTML"</span>, <span className="green-font">"CSS"</span>, <span className="green-font">"JavaScript"</span>, <span className="green-font">"React"</span>, <span className="green-font">"Nextjs"</span>], <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Minor : [<span className="green-font">"Python"</span>, <span className="green-font">"Spring Boot"</span>], <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Database : [<span className="green-font">"Oracle"</span>, <span className="green-font">"MongoDB"</span>, <span className="green-font">"PostgreSQL"</span>, <span className="green-font">"MySQL"</span>], <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Design Tools: [<span className="green-font">"Photoshop"</span>, <span className="green-font">"Illustrator"</span>, <span className="green-font">"Figma"</span>], <br />
            &nbsp;&nbsp;&nbsp;&nbsp; DevOps & Tools: [<span className="green-font">"Github"</span>, <span className="green-font">"Docker"</span>, <span className="green-font">"Linux"</span>] <br />
            {"};"}
          </p>
        </div>
      </div>
    </div>
  )
} 