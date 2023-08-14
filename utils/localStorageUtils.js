class LocalStorageUtil{
  constructor() {
    this.keyName = 'products';
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    //если есть какое-то значение есть в localstorage, то вернется строка, иначе - null
    if(productsLocalStorage !== null) {
      //если не равно null, то нужно распарсить строку, которая вернется, и перевести ее массив
      return JSON.parse(productsLocalStorage);
    }
  }

  putProducts(id) {
    let products = this.getProducts();
    //для проверки - добавлен элемент или нет
    let pushProduct = false;
    const index = products.indexOf(id);
    
    //проверка ну дубли в массиве
    if(index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      //???
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return{ pushProduct, products } 
  }
}

const localStorageUtil = new LocalStorageUtil();
