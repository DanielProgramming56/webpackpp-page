const  NavBar = () => {
    const nav = document.createElement('nav');
    nav.innerHTML = `
    <div class="navPosition">
    <h1 class="logo">Buger-Arena</h1>
    <ul>
    <li >Home</li>
    <li>Menu</li>
    <li>Contact</li>
    <ul>
    </div>
    `

    return nav;
}

export const home = () => {
    const header = document.createElement('header')
    header.classList.add('header-div')
    header.innerHTML = `
        <div class="main-content">
        <h1>Buy Your Teaste Buger In One Click & Get Free Sandwitch for  <span>$50 </span> Per Order</h1>
        <button type="submit">ODER NOW</button>
        </div>
        <div class="address-content">
        <div class="address">
        <h3>The Major Louge</h3>
        <p> tempor incididunt ut labore et dolore magna
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
         <div class="address">
        <h3>The Major Louge</h3>
        <p> tempor incididunt ut labore et dolore magna
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
         <div class="address">
        <h3>The Major Louge</h3>
        <p> tempor incididunt ut labore et dolore magna
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
        </div>
    `

    return header;
}

export default NavBar
