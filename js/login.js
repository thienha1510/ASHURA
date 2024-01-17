document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");
    var notificationBar = document.getElementById("notificationBar");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;

        var adminEmail = "admin@example.com";
        var adminPassword = "adminpassword";

        if (email === adminEmail && password === adminPassword) {
            showNotification("Chúc mừng bạn đã đăng nhập thành công", true);
            setTimeout(function () {
                window.location.href = "./Admin.html";
            }, 2000); // Delay for 2 seconds before redirecting to admin page
        } else {
            showNotification("VUI LÒNG KIỂM TRA LẠI", false);
        }
    });

    function showNotification(message, isSuccess) {
        notificationBar.textContent = message;
        notificationBar.className = isSuccess ? "notification-bar notification-success" : "notification-bar notification-error";
        notificationBar.style.display = "block";

        setTimeout(function () {
            notificationBar.style.display = "none";
        }, 3000);
    }
});
