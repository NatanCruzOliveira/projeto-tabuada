var txtn = window.document.getElementById('txtn')
var tab = window.document.getElementById('seltab')

function calcular () {

    
    if (txtn.value.length == 0) {
        alert('[ERRO] Digite um número!')
    } else {
        var n = Number(txtn.value)
        tab.innerHTML = ''


        for (c=1; c <= 10; c += 1) {
        
        var item = document.createElement('option')
        tab.appendChild(item)

        item.text = `${n} x ${c} = ${n*c}` 
        item.value = `tab${c}`

        }        
    }
}