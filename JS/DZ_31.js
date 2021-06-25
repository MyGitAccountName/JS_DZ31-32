let numOfColor = 1;
let timer;
let timer2;
let sec = 9;

function chooseBlock(a) {
    if (!a.classList.contains("chosen")) {
        const elems = document.getElementsByClassName("chosen");
        for (let i of elems) {
            i.classList.remove("chosen");
        }
        a.classList.add("chosen");
    }
}

function showBlock(numOfTask) {
    document.querySelector("#advertisement").style.display = "none";
    document.querySelector(".time").style.display = "none";
    document.querySelector(".close").style.display = "none";
    document.querySelector(".time").innerHTML = "10";
    sec = 9;
    clearInterval(timer2);
    for (let b of document.querySelectorAll(".tasks > div")) {
        b.style.display = "none";
    }
    document.querySelector(`#task${numOfTask}`).style.display = "block";
}

const elems = document.querySelectorAll(".menu li a");

for (let elem of elems) {
    elem.addEventListener('click', function(){chooseBlock(elem);});
}

function swapText() {
    const inputFirst = document.querySelector(".task1__text_1");
    const inputSecond = document.querySelector(".task1__text_1:nth-of-type(2)");

    let tmp = inputFirst.value;
    inputFirst.value = inputSecond.value;
    inputSecond.value = tmp;
}

function checkDataLength(a) {
    if (a.value.length === +a.getAttribute("data-length")) {
        a.classList.remove("red");
        a.classList.add("green");
    }
    else {
        a.classList.remove("green");
        a.classList.add("red");
    }
}

const elems2 = document.querySelectorAll(".task1__text_2");
for (let elem of elems2) {
    elem.addEventListener('focusout', function(){checkDataLength(elem);});
}

function changeImage(img) {
    switch (img.src.slice(-6,-4)) {
        case "M1": {
            img.src = "images/M2.jpg";
            break;
        }
        case "M2": {
            img.src = "images/M1.jpg";
            break;
        }
    }
}

const pic = document.querySelector("#task2>img");
pic.addEventListener('click', function(){changeImage(pic);});

const lights = [{id:1, r:"#ff0000", y:"#999222", g:"#2d4f2d"},
    {id:2, r:"#ff0000", y:"#fff345", g:"#2d4f2d"},
    {id:3, r:"#753737", y:"#999222", g:"#25ff5b"},
    {id:4, r:"#753737", y:"#fff345", g:"#2d4f2d"}];

function changeLight() {
    if (numOfColor === 4) numOfColor = 1;
    else numOfColor++;
    document.querySelector(".lred").style.backgroundColor = lights.find(x => x.id === numOfColor).r;
    document.querySelector(".lyellow").style.backgroundColor = lights.find(x => x.id === numOfColor).y;
    document.querySelector(".lgreen").style.backgroundColor = lights.find(x => x.id === numOfColor).g;
}

function addZero(a) {
    if (+a < 10) return '0' + a;
    else return a;
}

function comment() {
    if (!isNaN(document.querySelector(".task4__text").value)) alert("Укажите имя!");
    else if (document.querySelector("#comment").value.length < 3) alert("Мало текста!");
    else if (document.querySelector("#comment").value.length > 100) alert("Много текста!");
    else {
        let name = document.querySelector(".task4__text").value;
        let date = new Date();
        let text = document.querySelector("#comment").value;

        let s1 = document.createElement('span');
        s1.classList.add("comment__name");
        s1.innerHTML = name;

        let s2 = document.createElement('span');
        s2.classList.add("comment__date");
        s2.innerHTML = (`${addZero(date.getDate())}.${addZero(date.getMonth()+1)}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`);

        let p1 = document.createElement('p');
        p1.classList.add("comment__text");
        p1.innerHTML = text;

        document.querySelector(".commentList").appendChild(s1);
        document.querySelector(".commentList").appendChild(s2);
        document.querySelector(".commentList").appendChild(p1);
    }
}

const task5 = document.querySelector(".menu li:last-of-type a");

function showBanner() {
    document.querySelector("#advertisement").style.display = "block";
    document.querySelector(".time").style.display = "block";
    clearInterval(timer2);
    timer2 = setInterval(showTime, 1000);
}

function showTime() {
    if (sec > 0) document.querySelector(".time").innerHTML = `${sec--}`;
    else {
        document.querySelector(".time").style.display = "none";
        document.querySelector(".close").style.display = "block";
    }
}

task5.addEventListener('click', function(){
    clearTimeout(timer);
    timer = setTimeout(showBanner,3000)});

function hideBanner() {
    document.querySelector("#task5").style.display = "none";
}