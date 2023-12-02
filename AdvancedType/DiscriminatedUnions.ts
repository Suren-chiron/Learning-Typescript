type Bird = {
   type: 'Bird';
   flyingSpeed: number;
};

type Horse = {
   type: 'Horse';
   runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
   let speed;
   switch (animal.type) {
      case 'Bird':
         speed = animal.flyingSpeed;
         break;
      case 'Horse':
         speed = animal.runningSpeed;
         break;
   }
   console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'Bird', flyingSpeed: 100 });
moveAnimal({ type: 'Horse', runningSpeed: 100 });
