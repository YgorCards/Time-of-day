function carregar() {
    let texto = document.getElementById('msg');
    let image = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    texto.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        image.src = 'images/imagem_web_1.png';
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        image.src = 'images/imagem_web_2.png';
        document.body.style.background = 'orange'
    } else {
        image.src = 'images/imagem_web_3.png';
        document.body.style.background = 'purple'
    }
}

