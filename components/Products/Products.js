class Products {
  //метод, который отображает данные на странице
  //берем файл catalog.js, перебираем его и отображаем его на странице в виде html-кода
  //деструктуризация - выводим как отдельные переменные
  render() {
    let htmlCatalog = '';
    CATALOG.forEach(({id, name, price, img}) => {
      // console.log(id, name, price, img);
      htmlCatalog += `
        <li>
          <span>${name}</span>  
          <img src='${img}' />
          <span>${price}</span>
          <button>Добавить в корзину</button>
        </li>      
      `;

      const html = `
        <ul>
          ${htmlCatalog}
        </ul>
      `;

      ROOT_PRODUCTS.innerHTML = `${html}`
    })
  }
}

let productsPage= new Products();

productsPage.render();