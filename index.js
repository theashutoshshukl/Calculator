let string = "";
let buttons = document.querySelectorAll('.btn');
let btnArr = Array.from(buttons);

btnArr.forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string)
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'c') {
                string = '';
                document.querySelector('input').value = string;
            }
            else {
                string += e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        } catch (error) {
            console.log(error)
        }
    })
})