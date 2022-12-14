//constructor
function producto(id,nombre, precio,) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    
}
//Creando objetos
const fifa = new producto ("1","fifa23", 5500)
const eldenRing = new producto ("2","elden ring", 7500)
const gta5 = new producto ("3","GTA 5", 3500)
const marioKart = new producto ("4","mario kart 8", 10000)
const GoW = new producto ("5","god of war", 5000)

//guardar objetos en un array.

const misObjetos=[fifa,eldenRing,gta5,marioKart,GoW];

//mensaje que ve el usuario

const mensaje = prompt ("Bienvenido elija su producto: \n 1 - fifa23 \n 2 - elden ring \n 3 - GTA5 \n 4 - mario kart 8 \n 5 - god of war")

//comparo la opcion elegida en el prompt con el id del producto 

const productoElegido = misObjetos.find(elemento => elemento.id == mensaje);

const precioProducto = misObjetos.find(elemento => elemento.precio)

alert (`el producto elegido es: ${productoElegido.nombre}`)

sumaIva = precioProducto.precio + (precioProducto.precio*21/100)

alert (`el precio de ${productoElegido.nombre} es de $ ${sumaIva}`)
