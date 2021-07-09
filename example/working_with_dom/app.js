const root = document.getElementById('root');
// First Pass - Basic Layout
const render = root => {
    root.innerHTML = `<div> I EXIST! </div>`;
}

render(root);

// Second Pass - Easier to add more layout
const render1 = root => {
    root.innerHTML = App();
}

const Welcome = () => { // Pure function
    return `Welcome to my JavaScript Program!`;
}

const App = () => { // Higher-order and pure function
    return `
        <h1>${Welcome()}<h1>
        <div> I EXIST! </div>
    `
}
render1(root);