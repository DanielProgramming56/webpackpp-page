const contact  = () => {
    const div = document.createElement('div');
    div.classList.add("menu-div")
    div.innerHTML = `
    <div>
        <h1>Menu</h1>
    </div>
    `

    return div

}


const person (name) => {
    const proto = {
        sayName(){
            return 'Hello ' + this.name 
        },
        return this.sayName()
    }

    return Object.assign(Object.create(proto, {name: name}))
}

const areas = person('Daniel')
console.log(areas.output)


export default contact;
