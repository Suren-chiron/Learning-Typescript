const formCreatingPro = document.getElementById('formCreatingPro') as HTMLFormElement;
const titlePrj = document.getElementById('title') as HTMLInputElement;
const descriptionPrj = document.getElementById('description') as HTMLInputElement;
const peoplePrj = document.getElementById('people') as HTMLInputElement;
const listsActivePrj = document.getElementById('listsOFActiveProject') as HTMLUListElement;

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
      console.log(packetPrj);
   }
}

function addPrjToDom(pro: TPrjStructure) {
   let tagLi = document.createElement('li') as HTMLLIElement;
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
   //    tagLi.addEventListener('dragstart', (event) => {
   //       event!.dataTransfer!.setData('text', event.target);
   //    });
   tagLi.draggable = true;
   tagH2.className = 'projectTitle';
   listsActivePrj.appendChild(tagLi);
}

function dropList(ev : any) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData('text');
   ev.target.appendChild(document.getElementById(data));
}
