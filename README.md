# FirebaseMongodbImages

Aplicación web para subir, guardar y borrar imagenes. Esta aplicación se desarrollo con el objetivo de practicar y aprender guardar informacion en el storage de firebase y en una base de datos en mongodb.

Se desarrollaron dos carpetas: `client` contiene todos los archivos para la funcion del frontend, `server` contiene todos los archivos que se encarga de las solicitudes http y la conexión con las bases de datos.

## Función de la carpeta `server`

Como se mensionó anteriormente, los archivos de esta carpeta se encargan de las solicitudes http

**Tecnologias** : NodeJs, MongoDB, FireBase, Typescript

**Lenguajes** : Javascirpt

### Solicitud de las HTTP

Base de la Api `https://guardarimagenes.onrender.com/`

```http
GET /api/v1/imagen
```

Respuesta

Se obtiene una cadena de objetos con los siguientes parametros

|Parametros|Tipos|
|-|-|
|_id|string(uuuid)|
|title|string|
|images|Object|

Parametros de `images`

|Parametros|Tipos|
|-|-|
|url|string|
|id|string|

```http
POST /api/v1/imagen
```

Request

|Parametros|Tipos|
|-|-|
|title|string|
|images|Object|

Parametros de `images`

|Parametros|Tipos|
|-|-|
|url|string|
|id|string|


```http
DELETE /api/v1/imagen
```

Request

|Parametros|Tipos|
|-|-|
|_id|string (uuid)|

Response

|Parametros|Tipos|
|-|-|
|id|string (uuid)|

## Función de la carpeta `client`

En esta carpeta se encuentra la parte que se muestra al cliente, la pagina se conecta a dos apis, al server desarrollado en la carpeta `client` y a firebase.

### Desarrollo

**Tecnologías: ** Vite, NodeJs, React, Typescript, uuid
**Lenguages:** Javascript

### Solicitudes

De la plataforma firebase se utilizó su parte storage, el código para poder generar las solicitudes para guardar el multimedia se encuentran en los siguientes links:

- [Consola Firebase](https://console.firebase.google.com/?hl=es-419 "Consola Firebase")

- [Codigo para Cloud Storage](https://firebase.google.com/docs/storage/web/start?hl=es-419 "Codigo para las solicitudes")

En la solicitud post, primero se manda la imagen a Cloude Storage y se genera un link de la imagen, con ese link y la demás info se genera la solicitud http para guardarlo en mongodb.

Para la solicitud delete, primero se borra en la base de datos Mongodb, la api programada regresa un id como se ve en la seccion pasada, con ese id se genera la solicitud a Cloud Storage para borrar la imagen.

### Capturas

![Captura 1](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/Captura.PNG?alt=media&token=9694e2e4-23b4-4f50-b9ff-ea0f0fa5f79b "Captura 1")

![Captura 3](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/Captura2.PNG?alt=media&token=f4ffba96-be18-4fb8-98b0-6b320d4b235e "Captura 3")

![Captura 3](https://firebasestorage.googleapis.com/v0/b/ejemploimagenes-f0ee3.appspot.com/o/Captura3.PNG?alt=media&token=1e38ce4e-38a0-49d9-b6ea-255c0910ef23 "Captura 3")

## Deploy 

Se usó `render.com` para hacer el doploy de esta aplicación web.

Link de la aplicación: [imagenesguardar.com](https://imagenesguardar.onrender.com/ "imagenesguardar.com")

## Autor
- [Pablo Santillana](https://github.com/PabloSan1997?tab=repositories "Pablo Santillana")