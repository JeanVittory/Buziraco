# Buziraco
Buziraco es una empresa de booking para bandas de rock en Colombia. Esta aplicación muestra los conciertos más recientes y permite a los usuarios adquirir boletas, al mismo tiempo que permite a la propia empresa crear una base de datos de sus compradores para realizar futuros análisis de datos y mejorar su performance en ventas. 

## Tech
Las dependecias usadas para el desarrollo de esta aplicación fueron:
- [React v.17.0](https://es.reactjs.org/) - Framework de JS para el desarrollo de la UI.
- [Typescript v.4.6](https://www.typescriptlang.org/) Lenguaje construido sobre Javascript que permite tipar los datos generando así aplicaciones más robustas.
- [Firebase v.9.6](https://firebase.google.com/) - Servidor de Google implementado para alojar los datos necesarios para el funcionamiento de la aplicación. En este caso se usó firestore para almacenar los datos de usuarios y storage para almacenar las imagenes de los flyers de cada concierto. 
- [Tailwind v.3.0](https://tailwindcss.com/) - Framework CSS usado por su implementación de utilty classes dentro del mismo HTML o JSX en el caso de react facilitando el flujo de trabajo y la rápidez con la que se puede maquetar y personalizar los diseños. 
- [React-Router-Dom v.6.3](https://reactrouter.com/docs/en/v6/getting-started/overview) - Libreria usada para la navegabilidad de la aplicación como SPA. 


## Instalación

Buziraco fue desarrollado usando [Node.js](https://nodejs.org/es/) v.18.1 como entorno de ejecución, así que se recomienda la instalacion del mismo para poder correr la aplicación. 

Una vez intalado NodeJs se recomienda clonar el repositorio con

```sh 
git clone https://github.com/JeanVittory/TMI
```

Una vez hecho el paso anterior se recomienda instalar todas las dependencias que el el proyecto requiere con el siguiente comando

```sh 
npm install
```

Seguido de lo anterior y, usando el manejador de paquetes de node [npm](https://www.npmjs.com/), se ejecuta la aplicación con el siguiente comando: 

```sh
npm run start
```