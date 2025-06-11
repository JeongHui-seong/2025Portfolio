import supabase from "./supabaseClient.js";

// 라이트, 다크 모드 토글
const themeToggle = document.querySelector(".theme_toggle");

const toggleTheme = () => {
  const body = document.body;

  if (body.getAttribute("data-theme") == "dark") {
    body.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️"
  }
}

themeToggle.addEventListener("click", toggleTheme);

// nav 위치 active
const $navUl = document.querySelector(".nav_ul");
const $navAbout = document.querySelector(".nav_about");
const $navProject = document.querySelector(".nav_project");
const $navFeedback = document.querySelector(".nav_feedback");
const $section1 = document.getElementById("section1");
const $section2 = document.getElementById("section2");
const $section3 = document.getElementById("section3");
const sectionMargin = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--mt-120"));

const clearNavActive = () => {
  for (const li of $navUl.children) {
    li.classList.remove("nav_active");
  }
};

window.addEventListener("scroll", () => {
  const sec1 = $section1.getBoundingClientRect();
  const sec2 = $section2.getBoundingClientRect();
  const sec3 = $section3.getBoundingClientRect();

  clearNavActive();

  if (sec1.bottom > 0) {
    $navAbout.classList.add("nav_active");
  } else if (sec2.top - sectionMargin < 0 && sec2.bottom > 0) {
    $navProject.classList.add("nav_active");
  } else if (sec3.top - sectionMargin < 0 && sec3.bottom > 0) {
    $navFeedback.classList.add("nav_active");
  }
});

// nav 요소 클릭시 해당 위치로
const moveToSection = (sec) => {
  window.scrollTo({
    top: sec.offsetTop,
    behavior: "smooth"
  });
}

$navAbout.addEventListener("click", () => moveToSection($section1));
$navProject.addEventListener("click", () => moveToSection($section2));
$navFeedback.addEventListener("click", () => moveToSection($section3));

// scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade_show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.4
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// 댓글 supabase DB에 넣기
const btnCommSubmit = document.querySelector(".feedback_box .submit");
const commName = document.getElementById("inp_name");
const commContent = document.getElementById("inp_content");

const addComment = () => {
  const nameValue = commName.value;
  const contentValue = commContent.value;

  const commentData = {
    nickname: nameValue,
    comments: contentValue
  };

  fetch("https://yyyteojoqgajfcbkmhdu.supabase.co/rest/v1/comments", {
    method: "POST",
    headers: {
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5eXRlb2pvcWdhamZjYmttaGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NDExODgsImV4cCI6MjA2NTIxNzE4OH0.w-e8t4YmIgzUO-TjuICPDfA5DqJlX8vvboQkv-Bllc8",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5eXRlb2pvcWdhamZjYmttaGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NDExODgsImV4cCI6MjA2NTIxNzE4OH0.w-e8t4YmIgzUO-TjuICPDfA5DqJlX8vvboQkv-Bllc8",
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify(commentData)
  }).then(() => console.log("데이터 삽입 성공")).catch(err => console.log(err))
}
btnCommSubmit.addEventListener("click", () => {
  addComment();
  commName.value = '';
  commContent.value = '';
});

// 댓글 불러오기
const fetchComment = () => {
  fetch("https://yyyteojoqgajfcbkmhdu.supabase.co/rest/v1/comments?select=nickname,comments&order=created_at.desc", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5eXRlb2pvcWdhamZjYmttaGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NDExODgsImV4cCI6MjA2NTIxNzE4OH0.w-e8t4YmIgzUO-TjuICPDfA5DqJlX8vvboQkv-Bllc8",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5eXRlb2pvcWdhamZjYmttaGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NDExODgsImV4cCI6MjA2NTIxNzE4OH0.w-e8t4YmIgzUO-TjuICPDfA5DqJlX8vvboQkv-Bllc8"
    }
  }).then(res => res.json()).then(data => renderComments(data)).catch(err => console.log(err));
}

const renderComments = (data) => {
  const commentBox = document.querySelector(".comment_box");
  commentBox.innerHTML = '';

  if (!data || data.length === 0) {
    const commentList = document.createElement("li");
    commentList.classList = "comment_list";
    commentList.innerHTML = `등록된 댓글이 없습니다. 첫 피드백을 달아주시면 감사하겠습니다 🙏`
    commentBox.appendChild(commentList);
  }

  data.forEach(comment => {
    console.log(comment)
    const commentList = document.createElement("li");
    commentList.classList = "comment_list";
    commentList.innerHTML = `
                  <p class="name">${comment.nickname}</p>
              <p class="content">${comment.comments}</p>
              `
    commentBox.appendChild(commentList);
  });
}

fetchComment();

// 실시간 댓글 감지

const renderNewComment = (comment) => {
  const commentBox = document.querySelector(".comment_box");
  const commentList = document.createElement("li");
  commentList.classList = "comment_list";
  commentList.innerHTML = `
                  <p class="name">${comment.nickname}</p>
              <p class="content">${comment.comments}</p>
              `
  commentBox.prepend(commentList);
}

const channels = supabase.channel('comments-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'comments' },
    (payload) => {
      const newComment = { nickname: payload.new.comments, comments: payload.new.comments }
      renderNewComment(newComment)
    }
  )
  .subscribe();


