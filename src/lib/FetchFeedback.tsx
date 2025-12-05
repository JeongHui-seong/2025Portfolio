import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import FeedbackList from "../components/FeedbackList";

interface feedbackData {
  comm_id: string;
  created_at: string;
  nickname: string;
  comments: string;
  icon: string;
}

export default function FetchFeedback() {
  const [feedback, setFeedback] = useState<feedbackData[]>([]);
  const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

  useEffect(() => {
    getFeedback();

    const subscription = supabase
    .channel("comments-channel")
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "comments" }, (payload) => {
      setFeedback(prev => [payload.new as feedbackData, ...prev]);
    })
    .subscribe();

  return () => {
    supabase.removeChannel(subscription);
  };
  }, [])

  async function getFeedback() {
    try{
      const { data, error } = await supabase.from("comments").select().order("created_at", { ascending: false });
      if(error){
        alert("댓글 불러오기 실패 : " + error);
        return;
      }
      setFeedback(data);
    } catch(err) {
      alert("오류 발생 : " + err);
    }
  }

  return (
    <div className="fetchfeedback-box">
      {feedback.map((f, i) => <FeedbackList key={i} icon = {f.icon}  nickname = {f.nickname} comments = {f.comments} />)}
    </div>
  )
}