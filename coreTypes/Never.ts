// info : Never Type

// when we want throw an error or something that return anything we use never

function fail(msg: string): never {
   throw new Error(msg);
}
