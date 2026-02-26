function ver() {
    const input = document.querySelector("#senha");

    if(input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}




