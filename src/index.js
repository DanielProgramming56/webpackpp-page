import  NavBar from "./runner.js";
import  {home} from "./runner.js";
import  menu from "./menu.js"
import hello from "./contact.js"
const content = document.getElementById('content')


const container = document.createElement('div');
container.classList.add('container')

 // Set the default active content to 'home'
container.appendChild(NavBar());

const navArray = [home(), menu()]
container.appendChild(navArray)


content.appendChild(container)


// Manipulation
const ulNav = document.querySelectorAll('.navPosition ul li');
ulNav.forEach((li) => {
    li.addEventListener('click', () => {

        if(li.textContent == 'Home')
        {
            container.removeChild(navArray[1])
            container.appendChild(navArray[0])
        }
        else if (li.textContent == 'Menu')
        {
            container.removeChild(navArray[0])
            container.appendChild(navArray[1])
        }
        else if (li.textContent === 'contact') {
            container.removeChild(navArray[0])
            
        }
    })
})



content.appendChild(container)

//
