function carregar() {
    let msg = document.querySelector("#text")
    let img = document.querySelector("#foto")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `AGORA SAO ${hora} HORAS`
    if (hora >= 0 && hora < 12) {
        img.src = `manha.jpg`
        document.body.style.background = `#FFD580`
    } else if(hora >= 12 && hora < 18) {
        img.src = `tarde.jpg`
        document.body.style.background = `#FF914D`
    } else {
        img.src = `noite.jpg`
        document.body.style.background = `#0B1D51`
    }
}
