window.onload = function(){
    let position = 0
    setInterval(function() {
        let square = document.getElementById('square')
        position += 1
        square.style.left = position
        square.style.top = position
    },25)
}