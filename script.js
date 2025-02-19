let btn = document.getElementById('my_btn');
let user_input = document.getElementById('user_input');
let result = document.getElementById('output');

btn.onclick = function() {
    let inputValue = user_input.value.trim(); 

    if (inputValue.length > 2) {
        alert("Enter a Valid Number!");
        return;
    }

    for (let ch of inputValue) {
        if (ch < '0' || ch > '9') {
            alert("Enter a Valid Number!");
            return;
        }
    }

    let num = parseInt(inputValue);
    
    if (num > 10 || num < 1) {
        alert("Enter a Valid Number!");
        return;
    }

    function generate_random_number() {
        return Math.floor(Math.random() * 10) + 1;
    }

    let comp_number = generate_random_number();
    result.classList.remove("opacity-0");

    if (Math.abs(num - comp_number) >= 5 && num > comp_number) {
        result.innerHTML = "<h2 class='text-red-500 font-bold text-xl'>Too High!</h2>";
    } else if (Math.abs(num - comp_number) >= 5 && num < comp_number) {
        result.innerHTML = "<h2 class='text-red-500 font-bold text-xl'>Too Low!</h2>";
    } else if (num > comp_number) {
        result.innerHTML = "<h2 class='text-orange-500 font-bold text-xl'>Little High!</h2>";
    } else if (num < comp_number) {
        result.innerHTML = "<h2 class='text-orange-500 font-bold text-xl'>Little Low!</h2>";
    } else {
        result.innerHTML = "<h2 class='text-green-500 font-bold text-xl'>Congratulations, your guess is right!</h2>";
    }
};
