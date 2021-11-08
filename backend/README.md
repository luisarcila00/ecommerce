##<<<<<<<<<<<<<*PICOMMERCE* >>>>>>>>>>>>>>
## Rutas a productos
###*Crear productos.*
Metodo: POST\
Ruta: http://localhost:3000/api/products \
Headers: `'token': 'Se obtiene al iniciar sesión'`,`'Content-type':'multipart/form-data'` \
Body: `'description': 'nombre_del_producto''`, `'code':'codigo numerico y unico'`, `'price':'precio base del producto'`,
`'category':'categoria del producto'`, `'logo':'imagen del producto'` 

###*Obtener todos los productos.*
Metodo: GET\
Ruta: http://localhost:3000/api/products \
Headers: `'token': 'Se obtiene al iniciar sesión y debe ser usuario administrador'`

##Rutas a categorias

###*Crear categoria.*
Metodo: POST\
Ruta: http://localhost:3000/api/categories \
Headers: `'token': 'Se obtiene al iniciar sesión debe ser usuario administrador'` \
Body: `{
"name":"El nombre para la categoria"
}`

###*Obtener todas las categorias.*
Metodo: GET\
Ruta: http://localhost:3000/api/categories \
Headers: `'token': 'Se obtiene al iniciar sesión y debe ser usuario administrador'`

##Rutas a Login y registro
###*Login.*
Metodo: POST\
Ruta: http://localhost:3000/api/login \
Body: `{"username":"El usuario","password":"La contraseña"}`
###*Registro.*
Metodo: POST\
Ruta: http://localhost:3000/api/signup \
Body: 
`{
"username":"El usuario",
"password":"La contraseña",
"full_name":"Nombre completo",
"document_type":"cc",
"document":"# de documento",
"roles":"El rol (admin, reseller, pdv",
"phone":"Telefono",
"address":"Direccion",
"email":"Correo electronico"
}`

