let string = "";
let button = document.querySelectorAll('button');
button = Array.from(button);
button.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=') {
            string = eval(string);
        }
        else if(e.target.innerHTML == 'C') {
            string = "";
        }
        else if(e.target.innerHTML == 'Del') {
            string = string.toString().slice(0,-1);
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
        }
        document.querySelector('input').value = string;
    })
})
