document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        document.body.style.backgroundColor = 'red';
    } else if (event.key === 'g') {
        document.body.style.backgroundColor = 'green';
    } else if (event.key === 'b' && !event.shiftKey) {
        document.body.style.backgroundColor = 'blue';
    } else if (event.key === 'w') {
        document.body.style.backgroundColor = 'white';
    } else if (event.key === 'b' && event.shiftKey) {
        document.body.style.backgroundColor = 'black';
    } else if (event.key === 'g' && event.shiftKey) {
        document.body.style.backgroundColor = 'gray';
    }
});


let i = 2;


function twice () {
    console.log(i);
    i= i*2

}


function hide () {
    let image = document.getElementById("mypic")
    image.style.opacity = '0'
}
function outtext(value) {
let outPutText = document.querySelector('.output-text')
outPutText.textContent = value
}


let colorInput = document.getElementById("colorInput");

colorInput.addEventListener("input", function() {
   
    let colorValue = colorInput.value;



document.body.style.backgroundColor = colorValue;
})