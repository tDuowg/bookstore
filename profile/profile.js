// Kiểm tra đăng nhập
window.onload = function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (!currentUser) {
        alert("Vui lòng đăng nhập để xem profile");
        window.location.href = "../login/";
        return;
    }
    
    loadUserProfile(currentUser);
};

// Load thông tin user vào form
function loadUserProfile(user) {
    // Header info
    document.getElementById('displayName').textContent = user.fullName || 'User';
    document.getElementById('displayEmail').textContent = user.email || '';
    
    const roleElement = document.getElementById('userRole');
    if (user.role === 'admin') {
        roleElement.textContent = 'Admin';
        roleElement.classList.add('admin');
    } else {
        roleElement.textContent = 'User';
        roleElement.classList.add('user');
    }
    
    // Form fields
    document.getElementById('fullName').value = user.fullName || '';
    document.getElementById('email').value = user.email || '';
    document.getElementById('gender').value = user.gender || '';
    document.getElementById('birth').value = user.birth || '';
    
    // Stats
    document.getElementById('userId').textContent = user.id || '--';
    document.getElementById('userRoleText').textContent = user.role === 'admin' ? 'Quản trị viên' : 'Người dùng';
    
    // Format dates
    if (user.createdAt) {
        const createdDate = formatFirebaseDate(user.createdAt);
        document.getElementById('createdAt').textContent = createdDate;
    }
    
    if (user.updatedAt) {
        const updatedDate = formatFirebaseDate(user.updatedAt);
        document.getElementById('updatedAt').textContent = updatedDate;
    }
}

// Format Firebase timestamp
function formatFirebaseDate(timestamp) {
    if (!timestamp) return '--';
    
    let date;
    if (timestamp.seconds) {
        date = new Date(timestamp.seconds * 1000);
    } else {
        date = new Date(timestamp);
    }
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}