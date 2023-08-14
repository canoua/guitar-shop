class Products {
  //метод, который отображает данные на странице
  //берем файл catalog.js, перебираем его и отображаем его на странице в виде html-кода
  //деструктуризация - выводим как отдельные переменные
  
  constructor() {
    this.classNameActive = 'products-element__btn_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
  }
  
  
  handleSetLocationStorage(element, id) {  
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if(pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
  }
  
  render() {
    //экземпляру класса применяем метод
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    
    CATALOG.forEach(({id, name, price, img}) => {
      let activeClass = '';
      let activeText = '';
     
      if(productsStore.indexOf(id) == -1) {
        //если нет записи в локал сторадж, тогда класс остается по умолчанию
        activeText = 'Добавить в корзину';
      } else {
        activeClass = ' ' + this.classNameActive;
        activeText = 'Удалить из корзины';
      }

      htmlCatalog += `
        <li class="products-element">
          <span class="products-element__name">${name}</span>  
          <img class="products-element__image" src='${img}' />
          <span class="products-element__price">⚡️ ${price.toLocaleString()} USD</span>
          <button class="products-element__btn${activeClass}" onclick = "productsPage.handleSetLocationStorage(this, '${id}');">
            ${activeText}
          </button>
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