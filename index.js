const getElement = (selection)=> {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw Error ("please check your selection");
    }
}

const navButton = getElement("#nav-button");

const closeBtn = getElement(".nav-close");
const navBar = getElement("#navbar");
const date = getElement("#date");

navButton.addEventListener("click",  ()=>{
    navBar.classList.add("shownav");
});

closeBtn.addEventListener("click", ()=> {
    navBar.classList.remove("shownav");
})

date.innerHTML= new Date().getFullYear();
