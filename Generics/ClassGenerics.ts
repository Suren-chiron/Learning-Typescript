// info : Class Generic
// info : with this feature we can create a class that use generic

class DataStorage<T extends string | number | boolean> {
   private data: T[] = [];

   addItem(item: T) {
      this.data.push(item);
   }

   removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
         return;
      }
      this.data.splice(this.data.indexOf(item), 1);
   }

   getItems() {
      return [...this.data];
   }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('mohammad');
textStorage.addItem('MUO');
textStorage.removeItem('mohammad');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
