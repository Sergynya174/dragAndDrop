const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

const dragover = (evt) => {
  evt.preventDefault();
};

const dragenter = (evt) => {
  evt.target.classList.add("hovered");
};

const dragleave = (evt) => {
  evt.target.classList.remove("hovered");
};

const drop = (evt) => {
  evt.target.classList.remove("hovered");
  evt.target.append(item);
};

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
}

const dragstart = (evt) => {
  evt.target.classList.add("hold");
  setTimeout(() => evt.target.classList.add("hide"), 0);
};

const dragend = (evt) => {
  evt.target.classList.remove("hold");
  evt.target.classList.remove("hide");
};

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);
