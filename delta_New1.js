document.write(" équation de type ax²+bx+x=0 <br>");

var a=window.prompt("saisir a");
var b=window.prompt("saisir b");
var c=window.prompt("saisir c");
var x,delta,x1,x2,x0;
if(a==0){
    if(b==0){
        if(c==0){
            document.write("la solutuin est dans R <br>")
        }else{
            document.write("la solution est imossible <br>")
        }
    }else{
        document.write("a = 0 donc x = -c/b <br>");
        x=-c/b;
        document.write("la solution est x = " + x);
    }
}else{
    delta=(b*b)-(4*a*c);
    document.write("l'équation est: ");
    document.write(a+"x²+");
    document.write(b+"x+");
    document.write(c+" = 0");
    if(delta==0){
        x0=-b/(2*a);
        document.write(" <br> delta = "+delta);
        document.write(" <br>le resultat est "+x0);
    }else if(delta>0){
        document.write(" <br> delta = "+delta);
        x1=-b+Math.sqrt(delta)/(2*a);
        x2=-b-Math.sqrt(delta)/(2*a);
        document.write("<br>x1 = "+x1);
        document.write(" <br> x2 = "+x2);
        
    }else{
        document.write(" <br> delta = "+delta);
        document.write(" <br>la solution est un ensemble vide");
    }
}
