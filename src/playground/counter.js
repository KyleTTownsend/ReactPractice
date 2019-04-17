const renderCounterApp = () => {
    let myTemplate = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {addOne}>+1</button>
            <button onClick = {minusOne}>-1</button>
            <button onClick = {reset}>clear</button>
        </div>
    );
    ReactDOM.render(myTemplate, appRoot);
};  
let count = 0;
let addOne = (x) => {
    count ++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

let appRoot = document.getElementById("app");



renderCounterApp();