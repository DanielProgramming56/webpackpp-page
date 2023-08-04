const menu  = () => {
    const div = document.createElement('div');
    div.classList.add("menu-div")
    div.innerHTML = `
    <div>
        <h1>Menu</h1>
    </div>
    `

    return div

}

export default menu
