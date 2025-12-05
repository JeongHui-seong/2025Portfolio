import { createClient } from "@supabase/supabase-js";

interface commentData{
  nickname: string;
  comments: string;
  icon: string;
  onSuccess?: () => void;
}

export default function SubmitComment({nickname, comments, icon, onSuccess}:commentData) {
  const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);
  
  async function createComment() {
    try{
      if (nickname.trim().length === 0) {
        alert("닉네임을 작성해주세요.");
        return;
      }
      if (comments.trim().length === 0) {
        alert("내용을 작성해주세요.");
        return;
      }

      const { error } = await supabase
        .from('comments')
        .insert([
          {nickname, comments, icon}
        ]);

        if (error) {
          alert("댓글 저장 실패 : " + error.message);
          return;
        }

        alert("댓글 저장 성공");
        onSuccess?.();
    } catch (err) {
      alert("오류 발생 : " + err);
    }
  }
  return(
    <button className="btn-submit" onClick={() => createComment()}>댓글 남기기</button>
  )
}