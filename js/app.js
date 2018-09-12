console.log("Working");

//  ===== OBJECT LITERAL =====
// const book1 = {
//   title: 'A Song of Fire and Ice',
//   author: 'George R.R Martin',
//   year: 2012,
//   getSummary: function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`
//   }
// }

// ===== OBJECT CONSTRUCTOR =====
// function Game(title,author,year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function(){
//        return `${this.title} was developed by ${this.author} in ${this.year}`
//      }
// }
//
// const game1 = new Game('Super Mario Bros','Nintendo',1985);
// const game2 = new Game('League of Legends','Riot Games',2008);

// console.log(game1);
// console.log(game1.getSummary());
// console.log(game2.getSummary());
// console.log(Object.values(game2));

// ===== PROTOTYPES =====
// function Game(title,author,year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
//
// function Publisher(name,nationality,start){
//   this.name = name;
//   this.nationality = nationality;
//   this.start = start;
// }
// // adding PROTOTYPE
// Game.prototype.getSummary = function(){
//   return `${this.title} was developed by ${this.author} in ${this.year}`;
// };
//
// Object.prototype.logThis = function(){
//   console.log('SHOURYUKEN!');
//   return 'SHOURYUKEN!'
// }
//
// Array.prototype.description = function(){
//   console.log('You must defeat Shen Long to stand a chance');
//   return 'You must defeat Shen Long to stand a chance';
// }
//
// const pub1 = new Publisher('Capcom','Japan',1990);
// const game1 = new Game('Street Fighter','Capcom',1992);
// const array1 = [1,2,3,4,5];
//
// game1.getSummary();
// pub1.logThis();
// array1.description();

// ===== CLASSES =====
class Game {
  constructor(name,genre,company,platform){
    this.name = name;
    this.genre = genre;
    this.company = company;
    this.platform = platform
  }
  getSummary(){
    return `${this.name} was developed by ${this.company} for the ${this.platform}`
  }
}

const game1 = new Game('Street Fighter V','Fighter','Capcom','PS4');
console.log(game1);
console.log(game1.getSummary());
