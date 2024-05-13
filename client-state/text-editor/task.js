const editor = document.getElementById("editor");
const close = document.getElementById("close");
const editorValueStorage = localStorage.getItem("textEditor");

if (editorValueStorage) {
    editor.value = editorValueStorage;
};

editor.addEventListener('input', () => {
    localStorage.setItem("textEditor", editor.value)
});

close.addEventListener('click', () => {
    editor.value = "";
    localStorage.clear();
});