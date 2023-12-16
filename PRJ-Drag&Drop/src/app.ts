const titlePrj = <HTMLInputElement>document.getElementById('title')!;
const descriptionPrj = <HTMLInputElement>document.getElementById('description')!;
const peoplePrj = <HTMLInputElement>document.getElementById('people')!;
const listsActivePrj = <HTMLUListElement>document.getElementById('listsOFActiveProject')!;

type TPrjStructure = {
   title: string;
   description: string;
   people: number;
};

function createPrj(e: Event) {
   e.preventDefault();
   if (titlePrj.value.length !== 0 && descriptionPrj.value.length !== 0 && peoplePrj.value.length !== 0) {
      let packetPrj: TPrjStructure = {
         title: titlePrj.value,
         description: descriptionPrj.value,
         people: +peoplePrj.value,
      };
      addPrjToDom(packetPrj);
   }
}

function addPrjToDom(prj: TPrjStructure) {
   let tagLi = <HTMLLIElement>document.createElement('li');
   let tagH2 = <HTMLHeadingElement>document.createElement('h2');
   let tagH3 = <HTMLHeadingElement>document.createElement('h3');
   let tagP = <HTMLParagraphElement>document.createElement('p');
   tagH2.innerHTML = prj.title;
   tagH3.innerHTML = prj.description;
   tagP.innerHTML = prj.people.toString();

   tagLi.appendChild(tagH2);
   tagLi.appendChild(tagH3);
   tagLi.appendChild(tagP);
   tagLi.className = 'projects';
   tagLi.id = Math.random().toString();
   tagLi.draggable = true;
   tagLi.addEventListener('dragstart', (event: DragEvent) => {
      event.dataTransfer!.setData('text', tagLi.id);
   });
   tagH2.className = 'projectTitle';
   listsActivePrj.appendChild(tagLi);
}

function dropList(ev: DragEvent) {
   ev.preventDefault();
   let data = ev.dataTransfer!.getData('text');
   ev.target!.appendChild(document.getElementById(data));
}

function allowDrop(ev: DragEvent) {
   ev.preventDefault();
}
