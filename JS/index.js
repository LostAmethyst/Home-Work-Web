// alert("Hello, World!") 

// let girlName = 'Алевтина'

// alert (`Привет, ${girlName}`)

// вызвать диалоговое окно с заголовком “Как вас зовут?” 
// и подсказкой в поле ввода “Имя”. 
// А затем вывести имя, которое ввели в поле ввода.

// let test = prompt("Как вас зовут?","Имя")

// // alert (test)

// alert(`Привет, ${test}`) 

// let userName = 'Maks'

// function getName() {
//     let message =  `Привет, ${userName}`
//     alert(message)

// }

// getName()


let userName = prompt("What is your name?", "name")

function getName() {
    let message = "Hello, "
    alert(`${message + userName}.`)

}

getName()