class Products {
  //метод, который отображает данные на странице
  //берем файл catalog.js, перебираем его и отображаем его на странице в виде html-кода
  //деструктуризация - выводим как отдельные переменные
  render() {
    let htmlCatalog = '';
    CATALOG.forEach(({id, name, price, img}) => {
      // console.log(id, name, price, img);
      htmlCatalog += `
        <li class="products-element">
          <span class="products-element__name">${name}</span>  
          <img class="products-element__image" src='${img}' />
          <span class="products-element__price">⚡️ ${price.toLocaleString()} USD</span>
          <button class="products-element__btn">Добавить в корзину</button>
        </li>      
      `;

      const html = `
        <ul class="products-container">
          ${htmlCatalog}
        </ul>
      `;

      ROOT_PRODUCTS.innerHTML = `${html}`
    })
  }
}

let productsPage= new Products();

productsPage.render();