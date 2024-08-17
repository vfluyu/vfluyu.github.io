var date = new Date()
var dia = date.getDate()
var ano = date.getFullYear()
var mes = date.getMonth() +1
var idade = ano - 2012
var idadeSite = ano - 2024
if (mes == 8){
  if (dia == 31){
    idade = ano - 2011
  }
}
else{
  if(mes > 8){
    idade = ano - 2011
  }
}
if (mes == 8){
  if (dia >= 17){
    idadeSite = ano - 2024
  }
}
else{
  if(mes > 8){
    idadeSite = ano - 2024
  }
}

p1 = document.getElementById("p1")
p2 = document.getElementById("p2")

p1.innerHTML = "Sou nativo de Nova Lima, moro em Lavra Mg. Tenho " + idade + " anos, sou estudante do Intituto Presbiteriano Gammon."

p2.innerHTML = "Esse site foi criado dia 17 do 08 de 2024, há " + idadeSite + " anos."
