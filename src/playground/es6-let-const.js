var nameVar = 'Andrew';

function a(){
    for(let i = 0; i < 10; i++)
    {
        let a = i;
        var b = i;
    }
    console.log(b);
}
a();