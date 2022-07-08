let dia1 = prompt ("Inserte el día en números para conocer el primer signo del zodiaco: ")
let mes1 = prompt ("Inserte el mes en números para conocer el primer signo del zodiaco: ")

let dia2 = prompt ("Inserte el día en números para conocer el segundo signo del zodiaco: ")
let mes2 = prompt ("Inserte el mes en números para conocer el segundo signo del zodiaco: ")

let signouno = ""
let signodos = ""
let signocusp = ""
let signocusp2 = ""

/* 1.1 Aries **/ 
if ( mes1 == 3 && dia1 >= 23 || mes1 == 4 && dia1 <= 18) {
    alert("El primer signo es aries")
    signouno = "aries"
}
/* 1.2 Aries-Tauro **/ 
if (mes1 == 4 && dia1 >= 19 && dia1 <=23){
    alert("El primer signo nació en un día cúspide. Sus dos signos son aries y tauro.")
    signouno = "aries"
    signocusp = "tauro"

/* 1.3 Tauro **/ 
} if ( mes1 == 4 && dia1 >= 24 || mes1 == 5 && dia1 <= 18) {
    alert("El primer signo es tauro")
    signouno = "tauro"
} 

/* 1.4 Tauro-Géminis **/ 
if ( mes1 == 5 && dia1 >= 19 && dia1 <=23){
    alert("El primer signo nació en un día cúspide. Sus dos signos son tauro y geminis.")
    signouno = "tauro"
    signocusp = "geminis"
} 

/* 1.5 Géminis **/ 
if ( mes1 == 5 && dia1 >= 24 || mes1 == 6 && dia1 <= 18) {
    alert("El primer signo es geminis")
    signouno = "geminis"
} 

/* 1.6 Géminis-Cáncer **/ 
if ( mes1 == 6 && dia1 >= 19 && dia1 <= 23){
    alert("El primer signo nació en un día cúspide. Sus dos signos son geminis y cancer.")
    signouno = "geminis"
    signocusp = "cancer"
} 

/* 1.7 Cáncer **/ 
if ( mes1 == 6 && dia1 >= 24 || mes1 == 7 && dia1 <= 19 ) {
    alert("El primer signo es cancer")
    signouno = "cancer"
}

/* 1.8 Cáncer-Leo **/ 
if ( mes1 == 7 && dia1 >= 20 && dia1 <= 24){
    alert("El primer signo nació en un día cúspide. Sus dos signos son cancer y leo.")
    signouno = "cancer"
    signocusp = "leo"
}

/* 1.9 Leo **/ 
if ( mes1 == 7 && dia1 >= 25 || mes1 == 8 && dia1 <= 19 ) {
    alert("El primer signo es leo")
    signouno = "leo"
}

/* 1.10 Leo-Virgo **/ 
if ( mes1 == 8 && dia1 >= 20 && dia1 <= 24){
    alert("El primer signo nació en un día cúspide. Sus dos signos son leo y virgo.")
    signouno = "leo"
    signocusp = "virgo" 
}

/* 1.11 Virgo **/ 
if ( mes1 == 8 && dia1 >= 25 || mes1 == 9 && dia1 <= 19 ) {
    alert("El primer signo es virgo")
    signouno = "virgo"
}

/* 1.12 Virgo-Libra **/ 
if ( mes1 == 9 && dia1 >= 20 && dia1 <= 24){
    alert("El primer signo nació en un día cúspide. Sus dos signos son virgo y libra.")
    signouno = "virgo"
    signocusp = "libra" 
}

/* 1.13 Libra **/ 
if ( mes1 == 9 && dia1 >= 25 || mes1 == 10 && dia1 <= 19 ) {
    alert("El primer signo es libra")
    signouno = "libra"
}

/* 1.14 Libra-Escorpio **/ 
if ( mes1 == 10 && dia1 >= 20 && dia1 <= 24){
    alert("El primer signo nació en un día cúspide. Sus dos signos son libra y escorpio.")
    signouno = "libra"
    signocusp = "escorpio" 
}

/* 1.15 Escorpio **/ 
if ( mes1 == 10 && dia1 >= 25 || mes1 == 11 && dia1 <= 19 ) {
    alert("El primer signo es escorpio")
    signouno = "escorpio"
} 

/* 1.16 Escorpio-Sagitario **/ 
if ( mes1 == 11 && dia1 >= 20 && dia1 <= 24){
    alert("El primer signo nació en un día cúspide. Sus dos signos son escorpio y sagitario.")
    signouno = "escorpio"
    signocusp = "sagitario"
}

/* 1.17 Sagitario **/ 
if ( mes1 == 11 && dia1 >= 25 || mes1 == 12 && dia1 <= 18 ) {
    alert("El primer signo es sagitario")
    signouno = "sagitario"
}

/* 1.18 Sagitario-Capricornio **/ 
if ( mes1 == 12 && dia1 >= 19 && dia1 <= 23){
    alert("El primer signo nació en un día cúspide. Sus dos signos son sagitario y capricornio.")
    signouno = "sagitario"
    signocusp = "capricornio" 
}

/* 1.19 Capricornio **/ 
if ( mes1 == 12 && dia1 >= 24 || mes1 == 1 && dia1 <= 17 ) {
    alert("El primer signo es capricornio")
    signouno = "capricornio"
}

/* 1.20 Capricornio-Acuario **/ 
if ( mes1 == 1 && dia1 >= 18 && dia1 <= 22){
    alert("El primer signo nació en un día cúspide. Sus dos signos son capricornio y acuario.")
    signouno = "capricornio"
    signocusp = "acuario" 
}

/* 1.21 Acuario **/ 
if ( mes1 == 1 && dia1 >= 23 || mes1 == 2 && dia1 <= 16 ) {
    alert("El primer signo es acuario")
    signouno = "acuario"
}

/* 1.22 Acuario-Piscis **/ 
if ( mes1 == 2 && dia1 >= 17 && dia1 <= 22){
    alert("El primer signo nació en un día cúspide. Sus dos signos son acuario y piscis.")
    signouno = "acuario"
    signocusp = "piscis" 
}

/* 1.23 Piscis **/ 
if ( mes1 == 2 && dia1 >= 23 || mes1 == 3 && dia1 <= 17 ) {
    alert("El primer signo es piscis")
    signouno = "piscis"
}

/* 1.24 Piscis-Aries **/ 
if ( mes1 == 3 && dia1 >= 18 && dia1 <= 22){
    alert("El primer signo nació en un día cúspide. Sus dos signos son piscis y aries.")
    signouno = "piscis"
    signocusp = "aries"
}

/* 2.1 Aries **/ 
if ( mes2 == 3 && dia2 >= 23 || mes2 == 4 && dia2 <= 18) {
    alert("aries")
    signodos = "aries"
}

/* 2.2 Aries-Tauro **/ 
if (mes2 == 4 && dia2 >= 19 && dia2 <= 23){
    alert("Naciste en un día cúspide. Tus dos signos son aries y tauro.")
    signodos = "tauro"
    signocusp2 = "aries"
}

/* 2.3 Tauro **/ 
if ( mes2 == 4 && dia2 >= 24 || mes2 == 5 && dia2 <= 18) {
    alert("tauro")
    signodos = "tauro"
}

/* 2.4 Tauro-Géminis **/ 
if ( mes2 == 5 && dia2 >= 19 && dia2 <=23){
    alert("Naciste en un día cúspide. Tus dos signos son tauro y geminis.")
    signodos = "tauro"
    signocusp2 = "geminis"
}

/* 2.5 Géminis **/ 
if ( mes2 == 5 && dia2 >= 24 || mes2 == 6 && dia2 <= 18) {
    alert("geminis")
    signodos = "geminis"
}

/* 2.6 Géminis-Cáncer **/ 
if ( mes2 == 6 && dia2 >= 19 && dia2 <= 23){
    alert("Naciste en un día cúspide. Tus dos signos son geminis y cancer.")
    signodos = "geminis"
    signocusp2 = "cancer"
}

/* 2.7 Cáncer **/ 
if ( mes2 == 6 && dia2 >= 24 || mes2 == 7 && dia2 <= 19 ) {
    alert("cancer")
    signodos = "cancer"
}

/* 2.8 Cáncer-Leo **/ 
if ( mes2 == 7 && dia2 >= 20 && dia2 <= 24){
    alert("Naciste en un día cúspide. Tus dos signos son cancer y leo.")
    signodos = "cancer"
    signocusp2 = "leo"
} 

/* 2.9 Leo **/ 
if ( mes2 == 7 && dia2 >= 25 || mes2 == 8 && dia2 <= 19 ) {
    alert("leo")
    signodos = "leo"
}

/* 2.10 Leo-Virgo **/ 
if ( mes2 == 8 && dia2 >= 20 && dia2 <= 24){
    alert("Naciste en un día cúspide. Tus dos signos son leo y virgo.")
    signodos = "leo"
    signocusp2 = "virgo" 
}

/* 2.11 Virgo **/ 
if ( mes2 == 8 && dia2 >= 25 || mes2 == 9 && dia2 <= 19 ) {
    alert("virgo")
    signodos = "virgo"
}

/* 2.12 Virgo-Libra **/ 
if ( mes2 == 9 && dia2 >= 20 && dia2 <= 24){
    alert("Naciste en un día cúspide. Tus dos signos son virgo y libra.")
    signodos = "virgo"
    signocusp2 = "libra" 
}

/* 2.13 Libra **/ 
if ( mes2 == 9 && dia2 >= 25 || mes2 == 10 && dia2 <= 19 ) {
    alert("libra")
    signodos = "libra"
}

/* 2.14 Libra-Escorpio **/ 
if ( mes2 == 10 && dia2 >= 20 && dia2 <= 24){
    alert("Naciste en un día cúspide. Tus dos signos son libra y escorpio.")
    signodos = "libra"
    signocusp2 = "escorpio" 
}

/* 2.15 Escorpio **/ 
if ( mes2 == 10 && dia2 >= 25 || mes2 == 11 && dia2 <= 19 ) {
    alert("escorpio")
    signodos = "escorpio"
}

/* 2.16 Escorpio-Sagitario **/ 
if ( mes2 == 11 && dia2 >= 20 && dia2 <= 24){
    alert("Naciste en un día cúspide. Tus dos signos son escorpio y sagitario.")
    signodos = "escorpio"
    signocusp2 = "sagitario"
}

/* 2.17 Sagitario **/ 
if ( mes2 == 11 && dia2 >= 25 || mes2 == 12 && dia2 <= 18 ) {
    alert("sagitario")
    signodos = "sagitario"
}

/* 2.18 Sagitario-Capricornio **/ 
if ( mes2 == 12 && dia2 >= 19 && dia2 <= 23){
    alert("Naciste en un día cúspide. Tus dos signos son sagitario y capricornio.")
    signodos = "sagitario"
    signocusp2 = "capricornio" 
} 

/* 2.19 Capricornio **/ 
if ( mes2 == 12 && dia2 >= 24 || mes2 == 1 && dia2 <= 17 ) {
    alert("capricornio")
    signodos = "capricornio"
}

/* 2.20 Capricornio-Acuario **/ 
if ( mes2 == 1 && dia2 >= 18 && dia2 <= 22){
    alert("Naciste en un día cúspide. Tus dos signos son capricornio y acuario.")
    signodos = "capricornio"
    signocusp2 = "acuario" 
}

/* 2.21 Acuario **/ 
if ( mes2 == 1 && dia2 >= 23 || mes2 == 2 && dia2 <= 16 ) {
    alert("acuario")
    signodos = "acuario"
}

/* 2.22 Acuario-Piscis **/ 
if ( mes2 == 2 && dia2 >= 17 && dia2 <= 22){
    alert("Naciste en un día cúspide. Tus dos signos son acuario y piscis.")
    signodos = "acuario"
    signocusp2 = "piscis" 
}

/* 2.23 Piscis **/ 
if ( mes2 == 2 && dia2 >= 23 || mes2 == 3 && dia2 <= 17 ) {
    alert("piscis")
    signodos = "piscis"
}

/* 2.24 Piscis-Aries **/ 
if ( mes2 == 3 && dia2 >= 18 && dia2 <= 22){
    alert("Naciste en un día cúspide. Tus dos signos son piscis y aries.")
    signodos = "piscis"
    signocusp2 = "aries"
}

/** Compatibilidad Geminis*/
if ( signouno == "geminis" && signodos == "geminis"){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "geminis" && signodos == "piscis"){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "geminis" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "geminis" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "geminis" && signodos == "libra"){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "geminis" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "geminis" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "geminis" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "geminis" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "geminis" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "geminis" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "geminis" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
}

/** Cuspides en Geminis */
if ( signocusp == "geminis" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "geminis" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "geminis" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "geminis" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "geminis" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "geminis" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "geminis" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "geminis" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "geminis" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "geminis" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "geminis" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "geminis" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
}

/** Compatibilidad Piscis*/
if ( signouno == "piscis" && signodos == "geminis"){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "piscis" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "piscis" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "piscis" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "piscis" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "piscis" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "piscis" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "piscis" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "piscis" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "piscis" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "piscis" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "piscis" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} 

/** Cuspides en Piscis */
if ( signocusp == "piscis" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "piscis" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "piscis" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "piscis" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "piscis" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "piscis" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "piscis" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "piscis" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "piscis" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "piscis" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "piscis" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "piscis" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " con compatibles.")
} 

/** Compatibilidad Escorpio*/
if ( signouno == "escorpio" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "escorpio" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "escorpio" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "escorpio" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "escorpio" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "escorpio" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "escorpio" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "escorpio" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "escorpio" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "escorpio" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "escorpio" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "escorpio" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
}

/** Cuspides en Escorpio */
if ( signocusp == "escorpio" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "escorpio" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "escorpio" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "escorpio" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "escorpio" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "escorpio" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "escorpio" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "escorpio" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "escorpio" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "escorpio" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "escorpio" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "escorpio" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
}

/** Compatibilidad Tauro*/
if ( signouno == "tauro" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "tauro" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "tauro" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "tauro" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "tauro" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "tauro" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "tauro" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "tauro" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "tauro" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "tauro" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "tauro" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "tauro" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
}

/** Cuspides en Tauro */
if ( signocusp == "tauro" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "tauro" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "tauro" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "tauro" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "tauro" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "tauro" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "tauro" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "tauro" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "tauro" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "tauro" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "tauro" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "tauro" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
}

/** Compatibilidad Libra*/
if ( signouno == "libra" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "libra" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "libra" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "libra" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "libra" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles")
} if ( signouno == "libra" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "libra" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "libra" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "libra" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "libra" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "libra" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "libra" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
}

/** Cuspides en Libra */
if ( signocusp == "libra" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "libra" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "libra" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "libra" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "libra" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "libra" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "libra" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "libra" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "libra" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "libra" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "libra" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "libra" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
}

/** Compatibilidad Cancer*/
if ( signouno == "cancer" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "cancer" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "cancer" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "cancer" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "cancer" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "cancer" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "cancer" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "cancer" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "cancer" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "cancer" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "cancer" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "cancer" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
}

/** Cuspides en Cancer */
if ( signocusp == "cancer" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "cancer" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "cancer" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "cancer" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "cancer" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "cancer" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "cancer" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "cancer" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "cancer" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles")
} if ( signocusp == "cancer" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "cancer" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "cancer" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
}

/** Compatibilidad Sagitario*/
if ( signouno == "sagitario" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "sagitario" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "sagitario" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "sagitario" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "sagitario" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "sagitario" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "sagitario" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "sagitario" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "sagitario" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "sagitario" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "sagitario" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "sagitario" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
}

/** Cuspides en Sagitario */
if ( signocusp == "sagitario" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "sagitario" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "sagitario" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "sagitario" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "sagitario" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "sagitario" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "sagitario" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "sagitario" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "sagitario" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "sagitario" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "sagitario" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "sagitario" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
}

/** Compatibilidad Leo*/
if ( signouno == "leo" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "leo" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "leo" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "leo" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "leo" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "leo" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "leo" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "leo" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "leo" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "leo" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "leo" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "leo" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
}

/** Cuspides en Leo */
if ( signocusp == "leo" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "leo" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "leo" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "leo" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "leo" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "leo" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "leo" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "leo" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "leo" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "leo" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "leo" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "leo" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
}

/** Compatibilidad Acuario*/
if ( signouno == "acuario" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "acuario" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "acuario" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "acuario" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "acuario" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "acuario" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "acuario" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "acuario" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "acuario" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "acuario" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "acuario" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "acuario" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
}

/** Cuspides en Acuario */
if ( signocusp == "acuario" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
  alert("Los signos " + signocusp + " + " + signodos + " son compatibles")
} if ( signocusp == "acuario" && signodos == "piscis" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "acuario" && signodos == "escorpio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "acuario" && signodos == "tauro" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "acuario" && signodos == "libra" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "acuario" && signodos == "cancer" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "acuario" && signodos == "sagitario" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "acuario" && signodos == "leo" ){
    alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "acuario" && signodos == "acuario" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signocusp == "acuario" && signodos == "aries" ){
    alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son compatibles.")
} if ( signocusp == "acuario" && signodos == "virgo" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
} if ( signocusp == "acuario" && signodos == "capricornio" ){
    alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
    alert("Los signos " + signocusp + " + " + signodos + " son incompatibles.")
}

/** Compatibilidad Aries*/
if ( signouno == "aries" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "aries" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "aries" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "aries" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "aries" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "aries" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "aries" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "aries" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "aries" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "aries" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "aries" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "aries" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
}

/** Compatibilidad Virgo*/
if ( signouno == "virgo" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "virgo" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "virgo" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "virgo" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "virgo" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "virgo" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "virgo" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "virgo" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "virgo" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "virgo" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "virgo" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "virgo" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
}

/** Compatibilidad Capricornio*/
if ( signouno == "capricornio" && signodos == "geminis" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "capricornio" && signodos == "piscis" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "capricornio" && signodos == "escorpio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "capricornio" && signodos == "tauro" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "capricornio" && signodos == "libra" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "capricornio" && signodos == "cancer" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "capricornio" && signodos == "sagitario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "capricornio" && signodos == "leo" ){
  alert("Los signos " + signouno + " + " + signodos + " tienen una compatibilidad intermedia.")
} if ( signouno == "capricornio" && signodos == "acuario" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "capricornio" && signodos == "aries" ){
  alert("Los signos " + signouno + " + " + signodos + " son incompatibles.")
} if ( signouno == "capricornio" && signodos == "virgo" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
} if ( signouno == "capricornio" && signodos == "capricornio" ){
  alert("Los signos " + signouno + " + " + signodos + " son compatibles.")
}
