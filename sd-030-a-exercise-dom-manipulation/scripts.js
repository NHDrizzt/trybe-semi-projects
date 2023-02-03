// Ponto 1
const changeSecondParagraph = () => document.querySelectorAll(".center-content > p")[1].innerText = 'Voando'
changeSecondParagraph();

// Ponto 2
const changeMainColor = () => document.querySelector(".main-content").style.backgroundColor = "rgb(76, 164, 109)"
changeMainColor();

// Ponto 3
const changeCenterContentColor = () => document.querySelector(".main-content .center-content").style.backgroundColor = "hsl(0, 0%, 100%)"
changeCenterContentColor()

// Ponto 4
const changeH1Text = () => document.querySelector("h1").innerText = "Desafio - JavaScript"
changeH1Text()

// Ponto 5
const changeFirstParagraphToUpperCase = () => {
    let text = document.querySelector('p')
    text.innerText = text.innerText.toUpperCase()
}
changeFirstParagraphToUpperCase()

// Ponto 6

const paragraphContentInsideFooter = () => {
    let allParagraphsCenterContent = document.querySelectorAll('.center-content p')
    for (const iterator of allParagraphsCenterContent) {
        document.querySelector('footer p').innerHTML += `${iterator.innerText} `
    }
}

paragraphContentInsideFooter()