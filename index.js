var qouts = [
    {
        q: "So many books, so little time.",
        qI: "b0.jpg",
        qN: "Frank Zappa",
    },
    {
        q: "Be yourself; everyone else is already taken.",
        qI: "b1.jpg",
        qN: "Oscar Wilde",
    },
    {
        q: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. ",
        qI: "b22jpg.jpg",
        qN: "Marilyn Monroe",
    },
    {
        q: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        qI: "b3.jpg",
        qN: "Albert Einstein",
    },
    {
        q: "A room without books is like a body without a soul.",
        qI: "b4.jpg",
        qN: "Marcus Tullius Cicero",
    },
]


var index;
var lIndex;
var carton = "";
var dis = [];

function change() {



    if (dis.length == qouts.length) dis = [];
    do {
        index = Math.round(Math.random() * ((qouts.length) - 1));
    } while (index == lIndex || dis.includes(index))
    dis.push(index);
    lIndex = index;
    carton = `
    <div class="content py-5  d-flex flex-column  w-100  align-items-center  ">

            <img src="img/${qouts[index].qI}" class="border border-3 rounded-4 border-white" alt="">

            <span class="display-4 fs-2 my-3 fw-bold position-relative  p-2">${qouts[index].qN}</span>

            <p id="pra" class="display-4 fs-4 fw-medium w-75 pt-2 " ><q>${qouts[index].q}</q></p>
        </div>
        <div class="btnCopy  w-100 d-flex pb-2">
        <button onclick="copy()"
        class="btn btn-dark border border-2 fs-4  border-white p-3  text-center rounded-pill "></button>
        <button class="btnn w-25 " onclick="change()">Take Your Quotes</button>
            </div>
    `
    console.log(index);
    document.getElementById("demo").innerHTML = carton;
}

function copy() {
    var copyText = document.getElementById("pra");
    copyText.ariaSelected;
    navigator.clipboard.writeText(copyText.textContent);
    console.log(copyText.textContent);
}


