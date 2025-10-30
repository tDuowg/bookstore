import { addProduct, getAllProducts } from "../firebase/config.js";
const dataBooks = [
    {
        id: 1,
        thumbnail: "https://bizweb.dktcdn.net/thumb/large/100/469/746/products/bc608beb-0ae8-4bd5-8a24-e6db54034757.jpg?v=1722544068957",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65SUmhVKSCEK9KzJtBGCYqJhfFiQwVZ_X0wJfzjD9P-xPJNGDuJIkdac2V0jOL2hoqq8&usqp=CAU",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczp3Ex68YIYrmvn4sUB-zO9tghK8HAhFkTJkZm7FXz2vDhsMhhgES-L0dOrJ3E6zo1AA&usqp=CAU",
        nameBook: "Oxford activity book for children (Sách màu) Sách tiếng anh",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 3,
        price: "100.000đ",
        totalRating: 90,
        category: "Truyện tranh tiếng Anh",
        status: 10,
    },
    {
        id: 2,
        thumbnail: "https://hanoibookstore.com/storage/oxford-activity-book-for-children-sach-den-trang-sach-tieng-anh-400x400.jpg",
        image1: "https://i.pinimg.com/736x/2b/33/96/2b3396cb3044e6f0cd24f27e21e62dd3.jpg",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmguiAwvAZjgfSRr7YpXnXqMD0TDdueVsasbyY3rmm7OCFHwb-HJd2cehFZ88C-20uE8&usqp=CAU",
        nameBook: "Oxford activity book for children (Sách đen trắng) Sách tiếng anh",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 4,
        price: "59.000đ",
        totalRating: 100,
        category: "Sách truyện tiếng Anh",
        status: 10,
    },
    {
        id: 3,
        thumbnail: "https://hanoibookstore.com/storage/oxford-reading-and-writing-skill-sach-mau6-400x400.jpg",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMgscD0mha8epZ-69TMnObUuSd12xMi279w&s",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnqhuu_QJl_453F_KhBgOmt3Ddvjyu5Qp31KDjDsSlQxrQCEVkcFU0nyOqU_H_eLvlfE&usqp=CAU",
        nameBook: "Oxford Reading and Writing Skill (Sách màu)",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 4,
        price: "70.000đ",
        totalRating: 100,
        category: "Sách Tiếng Anh theo bộ",
        status: 10,
    },
    {
        id: 4,
        thumbnail: "https://hanoibookstore.com/storage/high-performance-web-sites-hanoi-bookstore-400x400.webp",
        image1: "https://m.media-amazon.com/images/I/51aid-AzVbL._AC_UF1000,1000_QL80_.jpg",
        image2: "https://hanoibookstore.com/storage/high-performance-web-sites-hanoi-bookstore-400x400.webp",
        nameBook: "High Performance Web Sites",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 4,
        price: "150.000đ",
        totalRating: 100,
        category: "Sách truyện tiếng Anh",
        status: 10,
    },
    {
        id: 5,
        thumbnail: "https://hanoibookstore.com/storage/get-ready-starter-mover-flyer-3-cuon-moi-sach-mau1-400x400.jpg",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-7aHLUZimKQTg3lWtZ9SEdnEjgQ-J9Hiwg&s",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqzvJEQPO2tnMQbx5bc6IRN_w0vcNni6fyA&s",
        nameBook: "Get Ready Starter, Mover, Flyer 3 cuốn mới (Sách màu)",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 4,
        price: "120.000đ",
        totalRating: 100,
        category: "Truyện tranh tiếng Anh",
        status: 10,
    },
    {
        id: 6,
        thumbnail: "https://hanoibookstore.com/storage/soft-skills-the-software-developers-life-manual-400x400.jpg",
        image1: "https://hanoibookstore.com/storage/soft-skills-the-software-developers-life-manual-400x400.jpg",
        image2: "https://m.media-amazon.com/images/I/71E8eCHtu9L._AC_UF350,350_QL80_.jpg",
        nameBook: "Soft Skills - The Software Developers Life Manual",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 4,
        price: "25.000đ",
        totalRating: 100,
        category: "Sách ngoại ngữ",
        status: 10,
    },
    {
        id: 7,
        thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRAspaAF1WgpU-bcbOsFfcLd3cBSAkm4EV10kaM3wSJR_0vBnpXDyXcGwDTJb4cKCzLtgRGNI6fC1vAS881-7qDGBdjTD2tKmJF138sZJxm",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeP6Fn2ZHysHM0TILTUlTLZPsOd2YRjhsUQ&s",
        image2: "https://ichef.bbci.co.uk/images/ic/480xn/p0kjmf3l.jpg.webp",
        nameBook: "The Life-Changing Magic of Tidying Up",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 4,
        price: "180.000đ",
        totalRating: 100,
        category: "Sách tiếng Anh",
        status: 10,
    },
    {
        id: 8,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dq9SlmTa_RhpWOpHn05Eb6P4otp1y6pY0w&s",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAb45KAAJT2PgEC7_XAwT-YdXGzdihj0sIA&s",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulAoheOkqxeaHxPQqiTdC4mX7iiX6QJCDKTrt0IQS4dgEA9i7K1t2uEU-laZsoROgs58&usqp=CAU",
        nameBook: "Tiếng Hàn Tổng Hợp (Kèm file nghe - Sách đen trắng)",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 4,
        price: "230.000đ",
        totalRating: 100,
        category: "Sách Tiếng Hàn",
        status: 10,
    },
    {
        id: 9,
        thumbnail: "https://vcdn1-giaitri.vnecdn.net/2018/03/20/co-gai-den-tu-hom-qua3-2984-14-6777-2518-1521549733.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=u8TzC1ZXZ6dyPZfTp3J_3Q",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mxRFMTJqcr6qXBip7xP5FDtm8juMhxPJaw&s",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7h7nTk6wmGdHLNt81lpgX3l1CfXysUVAHViTvNuspD6uo3YMEpKDaIArWnsguvIi0lw&usqp=CAU",
        nameBook: "Sách Cô Gái Đến Từ Hôm Qua",
        description: "Là quyển sách nổi tiếng của tác giả Nguyễn Nhật Ánh, kể về câu chuyện tình yêu tuổi học trò.",
        rating: 5,
        price: "40.000đ",
        totalRating: 100,
        category: "",
        status: 10,
    },
    {
        id: 10,
        thumbnail: "https://product.hstatic.net/200000343865/product/hai-van-dam-duoi-bien---tb-2022_5a19e0cf6a0a4e2fa4af35cf1400cddd_c51c8b730dbd4ffaa3c8049aef635d99.jpg",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKE0zuSVWj-bdsdvvXslejR5Fn1dOz0aE-onV_37ugPSdtjNS8IvcOdFNfED2Ivtf0adw&usqp=CAU",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AqTWV6A4CkqTb4OzHEqPe2WgKqq4QDp9eg&s",
        nameBook: "2 vặn dặm dưới đắy biển",
        description: "Khoa học viễn tưởng, phiêu lưu mạo hiểm",
        rating: 4,
        price: "230.000đ",
        totalRating: 100,
        category: "",
        status: 10,
    },
    {
        id: 11,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrp80NnBIdlLnUR3I8u8A952eLsqAjiFBrXg&s",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXB471biIc_jarSWx7TmLJ8j7Fcl9XaRtfNg&s",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYsstyza5YoWWgJM2nrOuZeitxyVXsiNcyw&s",
        nameBook: "Combo 6 quyển sách của Nguyễn Nhật Ánh",
        description: "Những cuốn sách nổi tiếng của tác giả Nguyễn Nhật Ánh",
        rating: 4,
        price: "350.000đ",
        totalRating: 100,
        category: "",
        status: 10,
    }
]


localStorage.setItem('dataBooks', JSON.stringify(dataBooks));

const countRow = Math.ceil(dataBooks.length / 4); // Math.ceil làm tròn lên phép tính

let html = '';
for (let i = 0; i < countRow; i++) {
    html += '<div class="outstanding-product">';
    for (let j = 0; j < 4; j++) {
        const index = (i * 4) + j;
        if (index >= dataBooks.length) {
            html += '<div class="item-1"></div>';
        } else {
            html += `
            <div class="item">
                <img src="${dataBooks[index].thumbnail}"
                    alt="" />
                <p class="item-description">${dataBooks[index].nameBook}</p>
                <p class="item-title">${dataBooks[index].description}</p>
                <div class="item-bottom">
                    <div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <p>${dataBooks[index].price}</p>
                    </div>
                    <button type="button" class="btn btn-outline-dark" onclick="handleBuy(${dataBooks[index].id})">Mua ngay</button>
                </div>
            </div>
        `
        };
    }
    html += "</div>";
}
const user = JSON.parse(localStorage.getItem("currentUser"));

let productOutstanding = document.getElementById('product-outstanding'); // Lấy element có id là product-outstanding
productOutstanding.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2>Sản phẩm nổi bật</h2>
        ${user.role == 'admin' ? '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Thêm sản phẩm</button>' : ''}
    </div>
    ${html} 
`; // Gán html vào element có id là product-outstanding

function handleBuy(id) {
    window.location.href = `../detail/index.html?id=${id}`
}


// Lấy các element từ form thêm sản phẩm
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productQuantity = document.getElementById('productQuantity');
let productCategory = document.getElementById('productCategory');
let Thumbnail = document.getElementById('thumbnailUrl');
let ImageDescription1 = document.getElementById('imageDescription1');
let ImageDescription2 = document.getElementById('imageDescription2');
let description = document.getElementById('description');
let btnSaveProduct = document.getElementById('saveProduct');
btnSaveProduct.onclick = async function () {
    let newProduct = {
        nameBook: productName.value,
        price: productPrice.value,
        status: parseInt(productQuantity.value),
        category: productCategory.value,
        thumbnail: Thumbnail.value,
        imagel: ImageDescription1.value,
        image2: ImageDescription2.value, 
        description: description.value,
    };
    await addProduct(newProduct);
    alert('Thêm sản phẩm thành công');
    location.reload();  // Tải lại trang để hiển thị sản phẩm mới
}