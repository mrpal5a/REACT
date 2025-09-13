function customRender(creatElement, container){
    const domElement = document.createElement(creatElement.type)
    domElement.innerHTML = creatElement.children
    domElement.setAttribute('href', creatElement.props.href)
    domElement.setAttribute('target', creatElement.props.target)
    container.appendChild(domElement)
}

const creatElement = {
    type : 'a',
    props:{
        href : "https://www.google.com",
        target :"_blank"
    },
    children :"Click me to visit google"
}

const mainContainer = document.querySelector('#root');

customRender(creatElement, mainContainer);