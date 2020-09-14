
class Product{
   
    constructor(name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;
    }

}
class UI{

addproduct(producto){
const product_List=document.getElementById('productList');
const inter= document.createElement('div');
 
inter.innerHTML='<div class="card tex-center mb-4"><div class="card-body"><strong>product Name</strong> :' +$[producto.nombre]+'<strong>product Price</strong> :' +$[producto.precio]+'<strong>product Year</strong> : '+$[producto.ano]+'</div> </div>';
        
product_List.appendChild(inter); 

 }

}

document.getElementById('product-form').addEventListener('submit', function(e){
   
    const nombre= document.getElementById('name').value;
    const precio=document.getElementById('price').value;
    const ano= document.getElementById('year').value;



const producto = new Product(nombre,precio,ano);
 const ui= new UI();
  ui.addproduct(producto);

  console.log(producto);
e.preventDefault();
});

