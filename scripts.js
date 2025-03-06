// Cuộn mượt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
            });
      });
});

// Xử lý form
document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Cảm ơn bạn đã gửi tin nhắn!');
      this.reset();
});

// Hiển thị nút Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
            backToTop.style.display = 'block';
            backToTop.style.opacity = '1';
      } else {
            backToTop.style.opacity = '0';
            setTimeout(() => backToTop.style.display = 'none', 300);
      }
});

backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hiệu ứng xuất hiện khi cuộn
const elements = document.querySelectorAll('.fade-in, .slide-in, .zoom-in');
const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
            if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
            }
      });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));