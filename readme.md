# Applicación de prueba de react con hooks
En esta aplicaicón se utiliza react-hooks para la creación de una aplicación de prueba.
Los datos se recuperan de la API de breaking bad.
Se han desarrollado 2 paginas:
- [Página principal](https://breakingbad.illescas.dev/). En esta página se muestran los personajes de Breaking Bad.
- [Página de personaje](https://breakingbad.illescas.dev/character/1). En esta página se muestra la información de un personaje.

Se ha gestionado un estado global mediante el uso de useState y useReducer.
Y tambien se ha gestionado un estado local en la pagina de personaje, para manejar las 'citas' de un personaje.

Para aumentar la reutilización de los componentes visuales se han separado en 2 categorias:
- las paginas: que tienen estado y acceso al estado global, y a las rutas de la aplicación.
- los componentes: que no tienen estado, ni conocen las rutas de la aplicación.

Para gestionar las rutas se ha utilizado wouter.
Para gestionar las traducciones se ha utilizado react-i18next.

## Instalación
Para ejecutar el proyecto se deben ejecutar los siguientes comandos:
```sh
npm install
npm run dev
```
Para generar un bundle se debe ejecutar:
```sh
npm run build
```
y para previsualizar este bundle se debe ejecutar:
```sh
npm run preview
```

## Demo
[Demo](https://breakingbad.illescas.dev) desplegada en cloudflare pages.

## Pasos pendientes
- mejorar el ux.
  - mejorar la vista de los botones de la cabecera.
  - añadir animaciones en los estados de carga.
- mejorar la gestion de errores
- añadir test unitarios
