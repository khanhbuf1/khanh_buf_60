let slideIndex = 0;
chungthuc();

function chungthuc() {
let i;
const slides = document.getElementsByClassName("chung_thuc");

for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

slideIndex++;
if (slideIndex > slides.length) {
slideIndex = 1;
}

slides[slideIndex - 1].style.display = "flex";
setTimeout(chungthuc, 2000); // Thay đổi ảnh mỗi 2 giây (có thể điều chỉnh thời gian tại đây)
};