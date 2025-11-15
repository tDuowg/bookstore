import { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../firebase/config.js";
var id = null;
window.onload = renderUI;
async function renderUI() {
    const dataBooks = await getAllProducts();
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
                    <a href="../detail/index.html?id=${dataBooks[index].id}">
                    <button type="button" class="btn btn-outline-dark">Mua ngay</button>
                    </a>
                </div>
                <button data-id = ${dataBooks[index].id} type= "button" class="btn btn-outline-dark" style="height: fit-content !important;" data-bs-toggle="modal" data-bs-target="#editProductModal">Chỉnh sửa</button>
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

let UProductName = document.getElementById('UProductName');
let UProductPrice = document.getElementById('UProductPrice');
let UProductQuantity = document.getElementById('UProductQuantity');
let UProductCategory = document.getElementById('UProductCategory');
let UThumbnail = document.getElementById('UThumbnailUrl');
let UImageDescription1 = document.getElementById('UImageDescription1');
let UImageDescription2 = document.getElementById('UImageDescription2');
let UDescription = document.getElementById('UDescription');
let UBtnSaveProduct = document.getElementById('USaveProduct');
let UDeleteProduct = document.getElementById('UDeleteProduct');

const editProductModal = document.getElementById('editProductModal');
editProductModal.addEventListener('show.bs.modal', async function (event) {
    id = event.relatedTarget.getAttribute('data-id');
    const product = await getProductById(id);

    UProductName.value = product.nameBook;
    UProductPrice.value = product.price;
    UProductQuantity.value = product.status;
    UProductCategory.value = product.category;
    UThumbnail.value = product.thumbnail;
    UImageDescription1.value = product.imagel;
    UImageDescription2.value = product.image2;
    UDescription.value = product.description;
})
UBtnSaveProduct.onclick = async function () {
    let updatedProduct = {
        nameBook: UProductName.value,
        price: UProductPrice.value,
        status: parseInt(UProductQuantity.value),
        category: UProductCategory.value,
        thumbnail: UThumbnail.value,
        imagel: UImageDescription1.value,
        image2: UImageDescription2.value,
        description: UDescription.value,
    };
    await updateProduct(id, updatedProduct);
    alert('Cập nhật sản phẩm thành công');
    location.reload();  // Tải lại trang để hiển thị sản phẩm mới
}
UDeleteProduct.onclick = async function () {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (confirmDelete) {
        await deleteProduct(id);
        alert('Xóa sản phẩm thành công');
        location.reload();  // Tải lại trang để hiển thị sản phẩm mới
    }
}