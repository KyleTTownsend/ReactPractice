console.log("Hello World");

let app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['Option 1', 'Option 2']
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option
    if(option.value && !app.options.includes(option.value)){
        app.options.push(option.value);
        option.value = '';
    }
    render();
};
const onRemoveAll = (e) => {
    app.options = [];
    render();
}
const nums = [55, 101, 1000];
const onMakeDecision = (e) => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
};
let render = () =>{
    let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'no options' }</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick = {onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key = {option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type = 'text' name = 'option'></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
let appRoot = document.getElementById("app");


render()
