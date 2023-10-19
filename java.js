let a =+prompt("Son kiriting juft yoki toqligini aniqlaymiz")
while (isNaN(a) || a == 0) {
    a = +prompt("Nmadir notogri "+"  iltimos son kiriting")
}
if(a % 2 == 0){
    alert("juft ")
}else if(a % 2 > 0){
    alert("toq ")
}

