// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.


function capitalizeAuthorName(author) {
    return author.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  
  const books = [
    { title: "Book1", author: "author1", year: 2005 },
    { title: "Book2", author: "author2", year: 2012 },
    { title: "Book3", author: "author3", year: 2008 },
    
  ];
  
  
  const filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({ ...book, author: capitalizeAuthorName(book.author) }));
  
  
  console.log("Original Books:", books);
  console.log("Filtered Books (Published after 2010 with Capitalized Author Names):", filteredBooks);
  