function clickMenu() {
    var menu = document.getElementById('itens');
    if(menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show')
    }
}