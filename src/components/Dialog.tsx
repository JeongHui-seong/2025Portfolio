import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { type ProjectDialog } from '../types/project'
import useAnimation from "../hooks/useAnimation";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  data: ProjectDialog;
}

export default function Dialog({open, onClose, data}: DialogProps) {
  if(!open) return null;
  const { ref, isVisible } = useAnimation();
  const [videoLoaded, setVideoLoaded] = useState(false);

  return createPortal(
    <div className="dialog-box" onClick={onClose}>
      <div className={`dialog-wrapper ${isVisible ? "fadein" : ""}`} ref={ref} onClick={e => e.stopPropagation()}>
        <div className="header-box">
          <div className="header-wrapper">
            <p>{data.title}</p>
            <button onClick={onClose}>
              <X className="btn-close"/>
            </button>
          </div>
        </div>
        <div className="content-box">
          <div className="content-wrapper">
            <ul className="subscribe-box">
              <li className="subscribe-wrapper">
                <span className="title">일자</span>
                <p className="subscribe">{data.date}</p>
              </li>
              <li className="subscribe-wrapper">
                <span className="title">기술</span>
                <p className="subscribe">{data.tech}</p>
              </li>
              <li className="subscribe-wrapper">
                <span className="title">역할</span>
                <p className="subscribe">{data.part}</p>
              </li>
              <li className="subscribe-wrapper">
                <span className="title">설명</span>
                <p className="subscribe">{data.description}</p>
              </li>
            </ul>
            {data.video !== null ? 
              (<div className="video-wrapper">
                <h2 className="title">시연 영상</h2>
                <div className={`video-box ${data.platform === "mobile" ? "mobile-videobox" : "desktop-videobox"}`}>
                  {!videoLoaded && <Skeleton height={200}/>}
                  <video onLoadedData={() => setVideoLoaded(true)} src={data.video} muted autoPlay></video>
                </div>
              </div>
            ) : null}

            <div className="detail-box">
              {data.detail.map(d => (
                <div className="detail-wrapper">
                  <h2 className="title">{d.title}</h2>
                  <p className="content">{d.content}</p>
                  <div className={data.platform == "mobile"? "img-box mobile" : "img-box desktop"}>
                    <img src={d.img} />
                  </div>
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}