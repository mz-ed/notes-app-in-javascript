const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
  }
}

showNotes();

function updateStorage() {
  const notes = notesContainer.innerHTML;
  localStorage.setItem("notes", notes);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage(); // Update storage when a new note is created.
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage(); // Update storage when a note is deleted.
  } else if (e.target.tagName === "P") {
    e.target.onkeyup = function () {
      updateStorage(); // Update storage when a note is edited.
    };
  }
});
