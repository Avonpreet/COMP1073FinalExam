function baby(){
fetch('https://avonpreet.github.io/COMP1073FinalExam/Q3/cats.json')
.then((resp) => resp.json())
.then(function(data) {

let catsdata = data;
allcats(catsdata);
});
}

function allcats(jsonObj) {
 let allcats = jsonObj.allcats;
for (let i = 0; i < allcats.length; i++) {
let article = document.createElement('article');
let h2 = document.createElement('h2');
let img = document.createElement('img');
let p = document.createElement('p');
let list = document.createElement('ul');
let hr = document.createElement('hr');
let br = document.createElement('br');
let section = document.querySelector('section');
img.setAttribute('src', allcats[i].photo);
img.setAttribute('alt', allcats[i].name);
img.setAttribute('height', '500px');
img.setAttribute('width', '500px');
h2.textContent = allcats[i].name + " Age("+allcats[i].age")";
p.textContent = 'species: ' + allcats[i].species;
let favFoods = allcats[i].favFoods;
for (let j = 0; j < favFoods.length; j++) {
let listItem = document.createElement('li');
listItem.innerHTML = favFoods[j];
list.appendChild(listItem);
}
article.appendChild(img);
article.appendChild(h2);
article.appendChild(p);
article.appendChild(list);
article.appendChild(hr);
article.appendChild(br);
section.appendChild(article);
}
}
