"use strict";
const titlePrj = document.getElementById('title');
const descriptionPrj = document.getElementById('description');
const peoplePrj = document.getElementById('people');
const listsActivePrj = document.getElementById('listsOFActiveProject');
function createPrj(e) {
    e.preventDefault();
    if (titlePrj.value.length !== 0 && descriptionPrj.value.length !== 0 && peoplePrj.value.length !== 0) {
        let packetPrj = {
            title: titlePrj.value,
            description: descriptionPrj.value,
            people: +peoplePrj.value,
        };
        addPrjToDom(packetPrj);
    }
}
function addPrjToDom(prj) {
    let tagLi = document.createElement('li');
    let tagH2 = document.createElement('h2');
    let tagH3 = document.createElement('h3');
    let tagP = document.createElement('p');
    tagH2.innerHTML = prj.title;
    tagH3.innerHTML = prj.description;
    tagP.innerHTML = prj.people.toString();
    tagLi.appendChild(tagH2);
    tagLi.appendChild(tagH3);
    tagLi.appendChild(tagP);
    tagLi.className = 'projects';
    tagLi.id = Math.random().toString();
    tagLi.draggable = true;
    tagLi.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', tagLi.id);
    });
    tagH2.className = 'projectTitle';
    listsActivePrj.appendChild(tagLi);
}
function dropList(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}
function allowDrop(ev) {
    ev.preventDefault();
}
//# sourceMappingURL=app.js.map