
  
    {
    /* // JavaScript code to handle the search functionality */}
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('search');
      const products = document.querySelectorAll('.product');

      searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        products.forEach(product => {
          const productName = product.querySelector('h3').textContent.toLowerCase();

          if (productName.includes(searchTerm)) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        });
      });
    });
  

