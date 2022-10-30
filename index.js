const getAdvice = async () =>{
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()

    console.log(data)

    document.getElementById("advice").innerHTML = "Advice #" + data.slip.id
    document.getElementById("text").innerHTML = '"' + data.slip.advice + '"'
}

getAdvice()
