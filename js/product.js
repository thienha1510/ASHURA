function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function submitForm() {
  var fullname = document.getElementById("fullname").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;

  // Kiểm tra xem các trường đã được điền đầy đủ và số điện thoại có đúng 10 số không
  if (fullname && phone && address && phone.length === 10 && !isNaN(phone)) {
      // Thêm logic xử lý form submission tại đây
      alert("!!!THÔNG TIN ĐÃ ĐƯỢC XÁC NHẬN. XIN CẢM ƠN!!!");
      closePopup();
  } else {
      alert("VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN!!!");
  }
}

