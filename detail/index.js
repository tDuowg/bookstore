const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const dataBooks = JSON.parse(localStorage.getItem('dataBooks'));
const book = dataBooks.find(book => book.id == id);

document.getElementById('nameBook').innerHTML = book.nameBook;
document.getElementById('totalRating').innerHTML = book.totalRating;
document.getElementById('price').innerHTML = book.price;
document.getElementById('description').innerHTML = book.description;
document.getElementById('category').innerHTML = `Danh Mục: ${book.category}`;
document.getElementById('status').innerHTML = `Tình trạng: ${book.status}`;
document.getElementById('thumbnail').src = book.thumbnail;
document.getElementById('image1').src = book.image1;
document.getElementById('image2').src = book.image2;