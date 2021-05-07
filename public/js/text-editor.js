// enabling text area on

textEditorField.document.designMode = "On";

//commands to edit buttons

const editButtons = document.querySelectorAll(".text-editor__edit-btns");

for (let i = 0; i < editButtons.length; i++) {
  editButtons[i].addEventListener("click", () => {
    let cmd = editButtons[i].getAttribute("data-cmd");

    if (cmd === "bold" || cmd === "italic" || cmd === "insertUnorderedList") {
      textEditorField.document.execCommand(cmd, false, null);
    }
  });
}

// save - read buttons

// const fileSelector = document.getElementById("file-selector");
// document.getElementById('file-selector').onchange = () => {
//     const file = document.getElementById('fileLoader');
//     const fileReader = new fileReader();
//     fileReader.onload = function(event) {
//         const text = event.target.result;
//         document.getElementById("text-editor__field").value = text;
//     }
//     fileReader.readAsText(file, 'UTF-8');
// }





