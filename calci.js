let screen = document.getElementById("screen");
let button = document.querySelectorAll("table");
let value = "";
for (x of button) {
    x.addEventListener('click', (e) => {
        let text = e.target.innerText;
        // console.log(text);
        if(text == 'C')
        {
            screen.value = "";
            value = "";
        }
        else if(text == 'x')
        {
            value += '*';
            screen.value = value;
        }
        else if(text == '=')
        {
            screen.value = eval(value);
            value = screen.value;
        }
        else{
            value += text;
            screen.value = value;
        }

    })
}
