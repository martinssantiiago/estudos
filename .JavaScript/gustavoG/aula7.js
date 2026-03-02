function ver() {
    const localização = document.querySelector('#pais')
    const res = document.querySelector('#res')   
    const resu = (localização.value)
      
    if (localização.value != "Brasil") {
        res.innerHTML = ('VOCE È ESTRANGEIRO')
    } else {
        res.innerHTML = ('VOCE È BRASILEIRO')
    }
} 