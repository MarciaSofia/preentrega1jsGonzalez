/* SIMULADOR DE CALCULADOR DE PROMEDIOS */
let nombreProfesor = prompt("Ingrese su nombre: ")
/* saludo de bienvenida */
const saludo = nombre => {
    alert("Bienvendido/a Profe " + nombre + "\nVamos a calcular promedios")
}  
saludo(nombreProfesor)

/* pido nombre y notas del alumno */
let nombreAlumno = prompt ("Ingrese el nombre del alumno: ")
let instaciasEvaluativas = Number(prompt("Ingrese la cantidad de evaluaciones"))

/* pido las notas del alumno */
let nota = 0
let totalnotas = 0
for (let i = 0; i < instaciasEvaluativas; i++) {
    nota = Number(prompt("Ingrese la nota del alumno: "))
    totalnotas = totalnotas + nota
}
/* funcion para calcular promedio */
function calculadorpromedio(num1, num2) {
    promedio = num1 / num2
    alert("El promedio final del alumno " + nombreAlumno + " es: " + promedio)
    return promedio        
}
calculadorpromedio(totalnotas, instaciasEvaluativas)

/* vamos a chequear si el alumno esta aprobado */
while (promedio != 0) {
    if (promedio >= 6) {
        alert("El alumno esta aprobado")
    } else {
            alert("El alumno esta desaprobado")
        }  
    break
    }
alert("Gracias vuelva cuando guste")
