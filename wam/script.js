let audio1 = new Audio();
let audio2 = new Audio();
audio1.src = 'wam/sounds/wryyyy.mp3';
audio2.src = 'wam/sounds/konodioda.mp3';
let clicked = false;

const krots = document.getElementsByClassName('fff');

function showKrot(id) {
    document.getElementById(id).style.visibility = 'visible';
}

window.addEventListener('DOMContentLoaded', function () {
    let timeLeft = document.getElementsByClassName('time')[0];
    let time = timeLeft.textContent;
    let result = 0;

    for (let i = 0; i < krots.length; i++) {
        krots[i].addEventListener('click', function () {
            let target = event.target;
            if (krots[i].id === target.id && time !== 0 && clicked !== true) {
                clicked = true;
                result = result + 1;
                document.getElementById('2222').textContent = result;
                audio1.play();
            }
        });
    }

    setTimeout(function () {
        timer = setInterval(function () {
            let mole = krots[Math.floor(Math.random() * krots.length)];

            if (time !== 0) {
                showKrot(mole.id);
                setTimeout(function () {
                    document.getElementById(mole.id).style.visibility = 'hidden';
                }, 900);
                clicked = false;
            }
            time--;
            timeLeft.textContent = time;

            if (time === 0) {
                clicked = true;
                clearInterval(timer);
                audio2.play();

                document.getElementById('s2').textContent = result;

                let max_points = JSON.parse(localStorage.getItem(s1));
                if (max_points < result) {
                    localStorage.setItem(s1, JSON.stringify(result));
                }
                document.getElementById('s1').textContent = max_points;

                document.getElementById('end').style.visibility = 'visible';

                document.getElementById('1000').addEventListener('click', function (event) {
                    location.reload();
                })
            }
        }, 1000)
    }, 3000);
})
