const decreaseBtn =
document.getElementById('decrease');
const increaseBtn =
document.getElementById('increase');
const guestCount =
document.getElementById('guest-count');
let count = 1;

decreaseBtn.addEventListener('click', ()=> {
    if (count > 1){
        count--;
        guestCount.textContent = count;
        updateButtons();
        }
});

increaseBtn.addEventListener('click', ()=> {
    if (count < 12){
        count++;
        guestCount.textContent = count;
        updateButtons();
    }
});

function updateButtons(){
decreaseBtn.disabled = count === 1;
increaseBtn.disabled = count === 12;
}


