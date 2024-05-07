let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll")

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const title = response.data.title;
        const arrAnswers = response.data.answers;
        const pollTitle = document.getElementById("poll__title")
        const pollAnswers = document.getElementById("poll__answers")
        console.log(response)

        pollTitle.append(title)

        for (const answer of arrAnswers) {
            const button = document.createElement('button');
            button.classList.add('poll__answer'); 
            button.textContent = answer;
            pollAnswers.appendChild(button);
        }
        pollAnswers.addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!")
            location.reload()
        })
    }
})

xhr.send();