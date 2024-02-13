const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  
  rl.question('what is your favorite type of food? ', (food) => {
  
    rl.question('Where do you want to travel most? ', (place) => {
  
      rl.question('Whats your favorite genre of books? ', (genre) => {
  
        rl.question('What do you enjoy doing most on the weekends? ', (activity) => {

          console.log(`${name} loves ${activity} on the weekends, eating ${food} whenever they can, would travel to ${place} if they could, and loves reading ${genre} books.`);
          
          rl.close();
        });
      });
    });
  });
});




