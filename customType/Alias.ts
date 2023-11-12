// info : Type Alias Custom Type

type testAliasType = 'mt' | 'cm';
function getTypeMetric(metric: testAliasType) {
   console.log(metric);
}
getTypeMetric('mt');

type DetailsPerson = {
   name: string;
   family: string;
   age: number;
};

function person(details: DetailsPerson) {
   console.log(
      'my name is' +
         details.name +
         details.family +
         " and i'm " +
         details.age
   );
}

person({ name: 'mohammad', family: 'karimi', age: 17 });
