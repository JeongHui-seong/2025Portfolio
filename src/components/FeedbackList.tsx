interface feedback{
  icon: string;
  nickname: string;
  comments: string;
}

export default function FeedbackList({icon, nickname, comments}:feedback) {
  return (
    <div className="feedbacklist-box">
      <div className="feedbacklist-wrapper">
        <div className="nickname-box">
          <div className="nickname-wrapper">
            <div className="icon-box">
              <img src={icon} alt="" />
            </div>
            <p className="nickname">{nickname}</p>
          </div>
        </div>
        <div className="comment-box">
          <p className="comment">{comments}</p>
        </div>
      </div>
    </div>
  )
}