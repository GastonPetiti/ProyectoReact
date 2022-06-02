# Clonar Repositorio 
Lo primero seria clonar el repositorio haciendo npm install y luego npm start para asi poder levantar el local host

## Rutas
Esta aplicación tiene las rutas de :
- la ruta '/' muestra el ItemListContainer(que muestra todos los productos renderizado)
- la ruta 'category/:categoryId' muestra el ItemListContainer filtrando los productos según su categoría al clickear los links en el navbar
- la ruta '/detail/:productId' tendría que mostrar el ItemDetailContainer que al hacer click aca tendria que mostrar el detalle del producto clickeado