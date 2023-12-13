"use strict";
const formCreatingPro = document.getElementById('formCreatingPro');
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
        console.log(packetPrj);
    }
}
function addPrjToDom(pro) {
    let tagLi = document.createElement('li');
    let tagH2 = document.createElement('h2');
    let tagH3 = document.createElement('h3');
    let tagP = document.createElement('p');
    tagH2.innerHTML = pro.title;
    tagH3.innerHTML = pro.description;
    tagP.innerHTML = pro.people.toString();
    tagLi.appendChild(tagH2);
    tagLi.appendChild(tagH3);
    tagLi.appendChild(tagP);
    tagLi.className = 'projects';
    tagLi.id = 'title';
    tagLi.draggable = true;
    tagH2.className = 'projectTitle';
    listsActivePrj.appendChild(tagLi);
}
function dropList(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}
//# sourceMappingURL=app.js.map