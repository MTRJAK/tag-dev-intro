const questionList = document.getElementById("questionList");
const addQuestionBtn = document.getElementById("addQuestionBtn");

let questions = JSON.parse(localStorage.getItem("questions")) || [];

function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function renderQuestions() {
  questionList.innerHTML = "";
  questions.forEach((q, i) => {
    const container = document.createElement("div");
    container.className = "question";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = q.title;
    titleInput.placeholder = "문항 제목";
    titleInput.oninput = () => {
      questions[i].title = titleInput.value;
      saveQuestions();
    };

    const textarea = document.createElement("textarea");
    textarea.value = q.content;
    textarea.placeholder = "내용을 입력하세요...";
    textarea.oninput = () => {
      questions[i].content = textarea.value;
      saveQuestions();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.onclick = () => {
      questions.splice(i, 1);
      saveQuestions();
      renderQuestions();
    };

    const actions = document.createElement("div");
    actions.className = "actions";
    actions.appendChild(deleteBtn);

    container.appendChild(titleInput);
    container.appendChild(textarea);
    container.appendChild(actions);
    questionList.appendChild(container);
  });
}

addQuestionBtn.onclick = () => {
  questions.push({ title: "", content: "" });
  saveQuestions();
  renderQuestions();
};

renderQuestions();
