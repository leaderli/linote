const fs = require('fs')
const path = require('path')
const {readTitles} = require(path.resolve('script/loadArticle'))
readTitles('./data').map(({title, dir}) => {
    el = document.createElement("li");
    text = document.createTextNode(`${title.split('.md')[0]}`);
    el.appendChild(text)
    el.addEventListener('click', function (e) { // clicking on sidebar titles
        fs.readFile(dir, (err, data) => {
            if (err) throw err;
            fileDir = dir;
            document.getElementById('content').innerHTML = data;
        });
    })
    document.getElementById('titles').appendChild(el)
})


const click = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
});

document.getElementById('titles').children[0].dispatchEvent(click)
