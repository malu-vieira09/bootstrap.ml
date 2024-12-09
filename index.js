var menuativo = false
function aparecermenu(isindex) {
    let ponto = "."
    if(isindex) {
        ponto = ""
    }
    var itens = document.getElementById("menu-itens")
    if(menuativo === false){
        itens.innerHTML = 
            `<ul style="display: flex; margin: 0 auto;">
            <li class="item-menu"><a href=".${ponto}/index.html">Página Inicial</a></li>
            <li class="item-menu"><a href=".${ponto}/html/form.html">Login</a></li>
            <li class="item-menu"><a href=".${ponto}/html/historia.html">História</a></li>
            <li class="item-menu"><a href=".${ponto}/html/pessoas.html">Pessoas Importantes</a></li>
            <li class="item-menu"><a href=".${ponto}/html/curiosidades.html">Curiosidades</a></li>
            <li class="item-menu"><a href=".${ponto}/html/perguntas.html">Caixa de Perguntas</a></li>
            </ul>`
            menuativo = true
    }else{
        itens.innerHTML = 
        ``
        menuativo = false
    }
}


