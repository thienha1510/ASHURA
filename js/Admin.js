document.addEventListener('DOMContentLoaded', function () {
    const userInfoLink = document.getElementById('userInfoLink');
    const editPostLink = document.getElementById('editPostLink');
    const mainContent = document.getElementById('mainContent');

    userInfoLink.addEventListener('click', function (e) {
        e.preventDefault();
        showUserInfo();
    });

    editPostLink.addEventListener('click', function (e) {
        e.preventDefault();
        showEditPost();
    });

    function showUserInfo() {
        hideAllContent();
        const userInfoContent = document.createElement('div');
        userInfoContent.classList.add('user-info');
        userInfoContent.innerHTML = `
            <h2>Thông tin tài khoản</h2>
            <p>Email: admin@example.com</p>
            <p>Tên đăng nhập: admin</p>
            <p>Mật khẩu: ********</p>
            <button onclick="alert('Chức năng chỉnh sửa thông tin sẽ được cập nhật.')">
                Chỉnh sửa thông tin
            </button>
        `;
        mainContent.appendChild(userInfoContent);
    }

    function showEditPost() {
        hideAllContent();
        const editPostContent = document.createElement('div');
        editPostContent.classList.add('edit-post');
        editPostContent.innerHTML = `
            <h2>Chỉnh sửa bài viết</h2>
            <textarea placeholder="Nhập nội dung bài viết..."></textarea>
            <button onclick="alert('Bài viết đã được cập nhật!')">
                Lưu bài viết
            </button>
        `;
        mainContent.appendChild(editPostContent);
    }

    function hideAllContent() {
        const contentContainers = document.querySelectorAll('.user-info, .edit-post');
        contentContainers.forEach(container => {
            container.remove();
        });
    }
});
