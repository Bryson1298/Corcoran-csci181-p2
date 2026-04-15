const projects = [
  {
    title: "Project 1",
    details: "Frontend app using HTML, CSS, JS",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Project 2",
    details: "Simple game project",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Project 3",
    details: "UI/UX mockup design",
    link_text: "View Design",
    href: "#",
  },
  {
    title: "Project 4",
    details: "API integration project",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Project 5",
    details: "Fullstack application",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Project 6",
    details: "Personal portfolio site",
    link_text: "View Live",
    href: "#",
  },
];

const modal = document.querySelector("#project-modal");
const modal_title = document.querySelector("#modal-title");
const modal_details = document.querySelector("#modal-details");
const modal_link = document.querySelector("#modal-link");
const modal_close = document.querySelector("#modal-close");

const card_buttons = document.querySelectorAll(".project-card");

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;

  modal.showModal();
  document.body.style.overflow = "hidden";

  modal.focus();
}

function onCardClicked(event) {
  const index = Number(event.currentTarget.dataset.index);
  openModalByIndex(index);
}

for (let i = 0; i < card_buttons.length; i++) {
  card_buttons[i].addEventListener("click", onCardClicked);
}

modal_close.addEventListener("click", function () {
  modal.close();
});

modal.addEventListener("close", function () {
  document.body.style.overflow = "";
});
