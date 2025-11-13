const input = document.querySelector("input");
const ul = document.querySelector("ul");
const clean = document.querySelector(".clean");

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    innerH = `<li class="i">${input.value} <button id="check">✅</button> <button id="remove">❌</button> </li>`
    ul.innerHTML += innerH;
    input.value = "";
}  )

ul.addEventListener("click", e => {
    if (e.target.id === "check") {
        e.target.parentElement.classList.toggle("test");
    } else if (e.target.id === "remove") {
        e.target.parentElement.remove();
    }

})

clean.addEventListener("click", e => {
    ul.innerHTML = ``;
})