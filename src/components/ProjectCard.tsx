import { useState } from "react"
import Dialog from "./Dialog";
import { type ProjectCardProps } from '../types/project'
import useAnimation from "../hooks/useAnimation";

export default function ProjectCard({projectData}: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { isVisible, ref } = useAnimation();
  return(
    <>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} data={projectData.dialog}/>
      <div className={`card-box ${isVisible ? "fadein" : ""}`} ref={ref}>
        <div className="card-wrapper">
          <div className="header-box">
            <div className="header-wrapper">
              <h3>{projectData.subtitle}</h3>
            </div>
          </div>
          <div className="thumbnail-box">
            <div className="thumbnail-wrapper">
              <img src={projectData.thumbnail} />
            </div>
          </div>
          <div className="content-box">
            <div className="content-wrapper">
              <h2>{projectData.title}</h2>
              <p>{projectData.date}</p>
              <div className="tag-wrapper">
                {projectData.tags.map(t => <div key={t} className="tag">{t}</div>)}
              </div>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-wrapper">
              {projectData.page ? <a href={projectData.page} target="_blank">바로가기</a> : null}
              <button onClick={() => setDialogOpen(true)}>상세보기</button>
              {projectData.linkType === "external" ? <a href={projectData.link} target="_blank">Github</a> : <a href={projectData.link} download>PDF 다운로드</a>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}