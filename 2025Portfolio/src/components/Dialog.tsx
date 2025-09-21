import { X } from "lucide-react";
import { type ProjectDialog } from '../types/project'

interface DialogProps {
  open: boolean;
  onClose: () => void;
  data: ProjectDialog;
}

export default function Dialog({open, onClose, data}: DialogProps) {
  if(!open) return null;

  return (
    <div className="dialog-box">
      <div className="dialog-wrapper">
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
            <div className="detail-box">
              {data.detail.map(d => (
                <div className="detail-wrapper">
                  <h2 className="title">{d.title}</h2>
                  <p className="content">{d.content}</p>
                  <div className="img-box">
                    <img src={d.img} />
                  </div>
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}