function customReact(reactElement, mainContainer){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)
    mainContainer.appendChild(domElement)
    */

    //using for loop for multiple attributes
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for(let prop in reactElement.props){
        if(prop === "Children") continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const mainContainer = document.getElementById('root')

const reactElement = {
    type :'a',
    props:{
        href :"https://www.google.com",
        target:"_blank"
    },
    Children: "click me to visit google com"
}

customReact(reactElement, mainContainer)