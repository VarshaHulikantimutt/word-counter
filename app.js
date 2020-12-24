var button = document.getElementById('btn');

button.addEventListener('click', function(){
    var str = document.getElementById('str').value;
    str = str.replace(/(^\s*)|(\s*$)/gi,""); //exclude the start and end spaces of a String
    str = str.replace(/[ ]{2,}/gi," "); //replace multiple spaces with a single space
    var count = str.split(' ').length;
    var outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
});