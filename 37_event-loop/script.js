console.log('A is the first Statement'); // Synchronous

setTimeout(() => {
  console.log('B is the Second Statement'); // Macrotask
}, 1000);

console.log('C is the 3rd statement'); // Synchronous