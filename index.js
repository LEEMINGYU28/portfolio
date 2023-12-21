const modalElem = document.getElementById("modal");

modalElem.onwheel = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

modalElem.onclick = document.getElementById("close-btn").onclick = () => {
  modalElem.style.display = "";
};

document.getElementById("modal-box").onclick = (e) => {
  e.stopPropagation();
};

const projectArr = {
  firstProject: { details: "무슨 사이트를 할까 고민하다 클론코딩 보다는 직접 처음부터 해보자는 의미에서 앱으로만 만들어져 있는걸 웹에 만들어보자는 의미에서 시작" },
  secondProject: { details: "랜덤으로 선정된 3명과 팀을 이뤄서 프로젝트 진행<br>팀장:이민규 팀원:김남균,박정완<br> 예약기능등 여러가지 기능이 있는 camping사이트를 조원들과의 회의를 통해 선정해서 진행" },
};

[...document.getElementsByClassName("project-info")].forEach((i) => {
  i.onclick = (e) => {
    modalElem.style.display = "flex";
    modalElem.getElementsByClassName("details")[0].innerHTML =
      projectArr[e.target.dataset.name].details;
  };
});
