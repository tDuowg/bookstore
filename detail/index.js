const urlParams = new URLSearchParams(window.location.search); // Lấy url
const id = urlParams.get('id'); // Lấy id từ url

const dataBooks = JSON.parse(localStorage.getItem('dataBooks')); // Lấy dataBooks từ localStorage
const book = dataBooks.find(book => book.id == id); // Tìm sách theo id

document.getElementById('nameBook').innerHTML = book.nameBook; // Gán tên sách vào thẻ có id là nameBook
document.getElementById('totalRating').innerHTML = book.totalRating; // Gán tổng số sao vào thẻ có id là totalRating
document.getElementById('price').innerHTML = book.price;
document.getElementById('description').innerHTML = book.description;
document.getElementById('category').innerHTML = `Danh Mục: ${book.category}`;
document.getElementById('status').innerHTML = `Tình trạng: ${book.status}`;
document.getElementById('thumbnail').src = book.thumbnail;
document.getElementById('image1').src = book.image1;
document.getElementById('image2').src = book.image2;