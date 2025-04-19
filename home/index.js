const dataBooks = [
    {
        id: 1,
        thumbnail: "https://bizweb.dktcdn.net/thumb/large/100/469/746/products/bc608beb-0ae8-4bd5-8a24-e6db54034757.jpg?v=1722544068957",
        image1: "https://bizweb.dktcdn.net/thumb/large/100/469/746/products/bc608beb-0ae8-4bd5-8a24-e6db54034757.jpg?v=1722544068957",
        image2: "https://bizweb.dktcdn.net/thumb/large/100/469/746/products/bc608beb-0ae8-4bd5-8a24-e6db54034757.jpg?v=1722544068957",
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
        image1: "https://hanoibookstore.com/storage/oxford-activity-book-for-children-sach-den-trang-sach-tieng-anh-400x400.jpg",
        image2: "https://hanoibookstore.com/storage/oxford-activity-book-for-children-sach-den-trang-sach-tieng-anh-400x400.jpg",
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
        image1: "https://hanoibookstore.com/storage/oxford-reading-and-writing-skill-sach-mau6-400x400.jpg",
        image2: "https://hanoibookstore.com/storage/oxford-reading-and-writing-skill-sach-mau6-400x400.jpg",
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
        image1: "https://hanoibookstore.com/storage/high-performance-web-sites-hanoi-bookstore-400x400.webp",
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
        image1: "https://hanoibookstore.com/storage/get-ready-starter-mover-flyer-3-cuon-moi-sach-mau1-400x400.jpg",
        image2: "https://hanoibookstore.com/storage/get-ready-starter-mover-flyer-3-cuon-moi-sach-mau1-400x400.jpg",
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
        image2: "https://hanoibookstore.com/storage/soft-skills-the-software-developers-life-manual-400x400.jpg",
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
        image1: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRAspaAF1WgpU-bcbOsFfcLd3cBSAkm4EV10kaM3wSJR_0vBnpXDyXcGwDTJb4cKCzLtgRGNI6fC1vAS881-7qDGBdjTD2tKmJF138sZJxm",
        image2: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRAspaAF1WgpU-bcbOsFfcLd3cBSAkm4EV10kaM3wSJR_0vBnpXDyXcGwDTJb4cKCzLtgRGNI6fC1vAS881-7qDGBdjTD2tKmJF138sZJxm",
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
        thumbnail: "https://hanoibookstore.com/storage/ca-bo-11-400x400.jpg",
        image1: "https://hanoibookstore.com/storage/ca-bo-11-400x400.jpg",
        image2: "https://hanoibookstore.com/storage/ca-bo-11-400x400.jpg",
        nameBook: "Tiếng Hàn Tổng Hợp 1 (Kèm file nghe - Sách đen trắng)",
        description: "Là bộ sách tiếng Anh dành cho trẻ em, giúp trẻ em học tập tiếng Anh một cách dễ dàng và hiệu quả.",
        rating: 4,
        price: "230.000đ",
        totalRating: 100,
        category: "Sách Tiếng Hàn",
        status: 10,
    },
    {
        id: 9,
        thumbnail: "",
        image1: "",
        image2: "",
        nameBook: "",
        description: "",
        rating: 4,
        price: "230.000đ",
        totalRating: 100,
        category: "",
        status: 10,
    },
    {
        id: 10,
        thumbnail: "",
        image1: "",
        image2: "",
        nameBook: "",
        description: "",
        rating: 4,
        price: "230.000đ",
        totalRating: 100,
        category: "",
        status: 10,
    },
    {
        id: 11,
        thumbnail: "",
        image1: "",
        image2: "",
        nameBook: "",
        description: "",
        rating: 4,
        price: "230.000đ",
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

let productOutstanding = document.getElementById('product-outstanding'); // Lấy element có id là product-outstanding
productOutstanding.innerHTML = `
    <h2>Sản phẩm nổi bật</h2>
    ${html} 
`; // Gán html vào element có id là product-outstanding

function handleBuy(id) {
    window.location.href = `../detail/index.html?id=${id}`
}