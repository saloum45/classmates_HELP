function bissextile(annee)
{
    return(annee%4==0 && annee%100!=0 || annee%400==0); 
}
var annee=window.prompt("saisir une annee");
if(bissextile(annee)){
    document.write ("l'année ")
    document.write( annee+" est bissextile");
}
else{
    document.write ("l'année ")
    document.write(annee+ " n'est pas bissextile");
}