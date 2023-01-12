let title = document.getElementsByClassName('item-grid-card__title')
let authors = document.getElementsByClassName('item-grid-music-preview__author')
let mp3 = document.getElementsByTagName('audio')

let res = [];

for (let i = 0; i < title.length; i++) {

    let obj =
        {
            title: title[i].innerText,
            author: authors[i].innerText,
            mp3: mp3[i].src
        }

    res.push(obj)
}

console.log(res);
