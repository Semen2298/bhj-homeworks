const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.onload = function() {
    if (xhr.status !== 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        const title = response.data.title;
        const answers = response.data.answers;
        const pollTitle = document.getElementById("poll__title")
        const pollAnswers = document.getElementById("poll__answers")

        pollTitle.textContent = title;
        
        for (let i = 0; i < answers.length; i++) {
            const btn = document.createElement("button")
            btn.classList.add("poll__answer")
            btn.append(answers[i])
            pollAnswers.appendChild(btn)
            btn.dataset.index = i;

            btn.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!")
                const index = btn.dataset.index;
                const xhrPost = new XMLHttpRequest();
                xhrPost.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                
                xhrPost.onload = function() {
                    if (xhrPost.readyState === 4) {
                        const result = JSON.parse(xhrPost.response);
                        const stat = result.stat;
                        pollAnswers.innerHTML ="";
                        document.querySelector(".poll__answers").style.display = "block";
                        stat.forEach((item) => {
                            const div = document.createElement("div");
                            div.textContent = `${item.answer}: ${item.votes} голосов`;
                            pollAnswers.appendChild(div);
                        })
                    } else {
                        alert(`Ошибка ${xhrPost.status}: ${xhrPost.statusText}`);
                    }
                };
                xhrPost.send(`vote=${response.id}&answer=${index}`);
            })
        }
        

    }
}
