// enabling text area on

textEditorField.document.designMode = "On";

//edit buttons

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


