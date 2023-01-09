
function cop()
{
    var content =document.getElementById("output");
    alert("el texto ha sido copiado");
    content.select();
    var copiado = document.execCommand("copy");
   
    document.getElementById("output").value= "";
}

function encrip()
{
    var palabra = document.getElementById("input").value.toLowerCase();
    var acumulador=""
    for(var letra=0; letra<palabra.length;letra++)
    {
        if ("a" == palabra[letra])
        {
            acumulador=acumulador+"ai";
        }
        if ("e" == palabra[letra])
        {
            acumulador=acumulador+"enter";
        }
        if ("i" == palabra[letra])
        {
            acumulador=acumulador+"imes";
        }
        if ("o" == palabra[letra])
        {
            acumulador=acumulador+"ober";
        }
        if ("u" == palabra[letra])
        {
            acumulador=acumulador+"ufat";
        }
        if("a"!=palabra[letra]&&"e"!=palabra[letra]&&"i"!=palabra[letra]&&"o"!=palabra[letra]&&"u"!=palabra[letra])
        {
            acumulador=acumulador+palabra[letra];
        }
    }
    document.getElementById("output").value=acumulador;
}
        
function desencrip()
{   
    var palabra = document.getElementById("input").value;
    acumulador="";
    for(var letra=0; letra<palabra.length;letra++)
    {
        if ("a" == palabra[letra])
        {
            acumulador=acumulador+"a";
            letra=letra+2;
        }
        if ("e" == palabra[letra])
        {
            acumulador=acumulador+"e";
            letra=letra+5;
        }
        if ("i" == palabra[letra])
        {
            acumulador=acumulador+"i";
            letra=letra+4;
        }
        if ("o" == palabra[letra])
        {
            acumulador=acumulador+"o";
            letra=letra+4;
        }
        if ("u" == palabra[letra])
        {
            acumulador=acumulador+"u";
            letra=letra+4;
        }
        if ("a" == palabra[letra])
        {
            acumulador=acumulador+"a";
            letra=letra+2;
        }
        if ("e" == palabra[letra])
        {
            acumulador=acumulador+"e";
            letra=letra+5;
        }
        if ("i" == palabra[letra])
        {
            acumulador=acumulador+"i";
            letra=letra+4;
        }
        if ("o" == palabra[letra])
        {
            acumulador=acumulador+"0";
            letra=letra+4;
        }
        if ("u" == palabra[letra])
        {
            acumulador=acumulador+"u";
            letra=letra+4;
        }
        if (palabra[letra] != undefined && "a"!=palabra[letra]&&"e"!=palabra[letra]&&"i"!=palabra[letra]&&"o"!=palabra[letra]&&"u"!=palabra[letra])
        {
            acumulador=acumulador+palabra[letra];
        }
    }
    document.getElementById("output").value=acumulador;
}

        

        

   

   