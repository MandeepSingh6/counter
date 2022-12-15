let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")
let output = document.querySelector(".number")
let number = 0

increase.addEventListener("click", function () {
    number += 1
    output.style.color = "green"
    print(number)
})
decrease.addEventListener("click", function () {
    number -= 1
    output.style.color = "red"
    print(number)
})
reset.addEventListener("click", function () {
    number = 0
    print(number)

})

function print(x) {
    if (x === 0) {
        output.style.color = "black"
    }
    output.innerHTML = number
}