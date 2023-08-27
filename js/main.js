const logInBtn = document.querySelector('.btn-login');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');


function openPage() {
    modal.style.display = 'block'
}

function closePage() {
    modal.style.display = 'none'
}

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        closePage();
    }
})

logInBtn.addEventListener('click', openPage);
closeBtn.addEventListener('click', closePage);