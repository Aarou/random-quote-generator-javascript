window.onload = () => {
    var quote = document.getElementsByTagName('H2')[0]
    var author = document.getElementsByTagName('H2')[1]

    var generateButton = document.getElementById('generate-button')
    var body = document.querySelector('.body')


    const colors = ["rgb(255, 0, 0)", "rgb(255, 127, 0)", "rgb(255, 255, 0)", "rgb(127, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 127)", "rgb(0, 255, 255)", "rgb(0, 127, 255)", "rgb(0, 0, 255)", "rgb(127, 0, 255)"]
    var randomColor = colors[Math.floor((Math.random() * 10) + 1)]

    const dash = "-"

    generateButton.addEventListener('click', () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                quote.textContent = data.content
                author.textContent = dash.concat(data.author)
                randomColor = colors[Math.floor((Math.random() * 10) + 1)]
                generateButton.style.color = randomColor
                body.style.backgroundColor = randomColor
                quote.style.color = randomColor
                author.style.color = randomColor
            })
    })
}