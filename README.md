## Datos

Javiera Bustos Villarroel
19.153.103-5
Eva3 Backend y Frontend

## Nota archivo .env

Se sube archivo .env con el fin de agilizar el proceso de instalación. Se debe reemplazar el valor de la variable por la ruta de la carpeta a la cual se alojará el backend (archivos php). Cabe destacar que, si bien se entiende que el archivo .env no se debe subir por temas de seguridad al exponer información sensible, se realiza en este caso sólo con fines de prueba académicos y agilizar el proceso de instalación.

## Pasos de instalación

1. Levantar servidor en XAMPP para poder correr los archivos php de la carpeta backend para la obtención de data y la documentación swagger asociada.

El proyecto debe estar alojado dentro de la ruta C:\xampp\htdocs\ipss\Eval_U3A_Bustos_Javiera\

2. Reemplazar el valor de la variable de entorno del archivo .env por la ruta en donde se alojará el backend (API), por defecto es la siguiente:
REACT_APP_BASE_PATH_API_URL=http://localhost/ipss/Eval_U3A_Bustos_Javiera/backend

Con esto el proyecto tendrá acceso a los servicios de la API.

3. Instalar paquetes npm:
npm i install 

4. Ejecuta el comando para correr el proyecto:
npm run start

5. Navega a la ruta http://localhost:3000 para ver la aplicación en el navegador.

6. La documentación swagger se puede revisar en el siguiente archivo json:
http://localhost/ipss/Eval_U3A_Bustos_Javiera/docs/swagger.json

La información contenida en este archivo se puede ver desplegada en SwaggerUI en la siguiente ruta:
http://localhost/ipss/Eval_U3A_Bustos_Javiera/swagger-ui/

Para mayor facilidad de lectura, la estructuración del proyecto y demás información relevante se encuentra en la documentación pdf adjunta.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
