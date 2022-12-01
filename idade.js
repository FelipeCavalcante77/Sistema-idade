function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//cria tag img, no html
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'pessoas img/bebehomem.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'pessoas img/jovemhomem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','pessoas img/adultohomem.png')
            }
            else{
                //idoso
                img.setAttribute('src','pessoas img/idosohomem12.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'pessoas img/bebemulher.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'pessoas img/jovemmulher.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','pessoas img/adultamulher.png')
            }
            else{
                //idoso
                img.setAttribute('src','pessoas img/idosamulher.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = '<p> Detectamos ' +genero+ ' com ' +idade+ ' anos. <BR> <BR></p>' 
        res.appendChild(img)

    }
}