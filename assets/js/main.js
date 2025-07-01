document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;

  function showItem(idx) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === idx);
    });
  }

  prevBtn.addEventListener('click', function() {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  });
  nextBtn.addEventListener('click', function() {
    current = (current + 1) % items.length;
    showItem(current);
  });

  // 自动轮播
  setInterval(() => {
    current = (current + 1) % items.length;
    showItem(current);
  }, 5000);

  showItem(current);
}); 