const details = "Hey. These are some details you can now see!";
let isHidden = false;
const toggle = (e) => {
    isHidden = isHidden ? false : true;
    render();
};
const render = () => {
    let template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {toggle}>
            {isHidden ? 'Show details' : 'Hide details'}
        </button>
        <p hidden = {isHidden}>{details}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
let appRoot = document.getElementById("app");

render();