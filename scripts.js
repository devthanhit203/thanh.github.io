document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
            });
      });
});


document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Cảm ơn bạn đã gửi tin nhắn!');
      this.reset(); // Xóa form sau khi gửi
});