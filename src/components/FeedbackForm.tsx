import { useEffect, useRef, useState } from 'react';
import animals from '../data/animals.json'
import SubmitComment from '../lib/SubmitComment';

export default function FeedbackForm() {
  const [selectedAnimal, setSelectedAnimal] = useState("chicken");
  const [nickname, setNickname] = useState("");
  const [comments, setComments] = useState("");
  const [openSelectIcon, setOpenSelectIcon] = useState(false);
  const iconboxRef = useRef(null);
  const selectedData = animals.find(animal => animal.id === selectedAnimal);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        iconboxRef.current &&
        (iconboxRef.current as HTMLElement).contains &&
        !(iconboxRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpenSelectIcon(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [iconboxRef]);

  console.log(selectedData, "selectedData");
  console.log(nickname, "nickname");
  console.log(comments, "comment");
  return (
    <div className='feedbackform-box'>
      <div className="feedbackform-wrapper">
        <div className="nickname-box">
          <div className="nickname-wrapper">
            <div className="icon-box" ref={iconboxRef} onClick={() => setOpenSelectIcon(!openSelectIcon)}>
              {openSelectIcon ? 
              <ul className="select-icon-box">
                {animals.map(animal => <li key={animal.id} onClick={() => setSelectedAnimal(animal.id)} className='select-icon-wrapper'>
                  <img src={animal.link} alt={animal.id} />
                </li>)}
              </ul> : null}
              <img src={selectedData?.link} alt={selectedData?.id} />
            </div>
            <div className="nickname-input-box">
              <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} placeholder='닉네임을 입력해주세요.' />
            </div>
          </div>
        </div>
        <div className="comment-box">
          <input type="text" value={comments} onChange={e => setComments(e.target.value)} placeholder='내용을 입력해주세요.' />
        </div>
        <div className="submit-box">
          <SubmitComment
            nickname={nickname}
            comments={comments}
            icon={selectedData?.link ?? ""}
            onSuccess={() => {
              setNickname("")
              setComments("")
              setSelectedAnimal("chicken")
            }}
          />
        </div>
      </div>
    </div>
  )
}