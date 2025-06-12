fetch('/products')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.name} - R$ ${p.price}`;
      list.appendChild(li);
    });
  })
  .catch(console.error);
