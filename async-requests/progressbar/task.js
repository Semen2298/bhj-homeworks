const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    
    xhr.upload.onprogress = function(event) {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        progress.value = percentComplete / 100;
    }
    };
    console.log(xhr);
    console.log(formData);

    xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.readyState === 4) {
                console.log('Файл успешно загружен!');
            } else {
                console.error('Произошла ошибка при загрузке файла:', xhr.statusText);
            }
        }
    };

    xhr.send(formData);
});
