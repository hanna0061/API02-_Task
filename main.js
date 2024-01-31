async function getProduct() {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data.products;
    const result =data.map(function(e){
      return `
      <div class='product'>
      <h2>Product Name : ${e.title}</h2>
      <img src='${e.thumbnail}'/>
      <a href="details.html?product_id=${e.id}"><br><br>Click Here To See More Details About Product</a>
      </div>
      `
    }).join('');
    document.querySelector('.product').innerHTML=result;
    
}
getProduct();