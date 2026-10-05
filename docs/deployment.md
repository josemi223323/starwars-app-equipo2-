># Ejecucion local y despliegue 

## Ejecución local

La aplicación utiliza el módulo ES y debe servirse usando un servidor HTP local, abrir `index.html` directamente puede provocar que no se carguen los módulos.

1. Ejecutamos la inicialización en el local y clonamos el remoto.
2. Abrimos la carpeta raiz en una terminal o visual studio code
3. Inicia el servidor estático con `npm start` (ejecuta `npx serve .` ) o usar la extensión de Live Server de Visual Studio Code parar abrir `index.html` , asu acceder a la URL local que indique el servidor.

## Requisitos minimos del navegador 

* Compatibilidad con módulos ES.
* Compatibilidad con la API de `fecth`.

## Plataformas de despliegue estático

| Plataforma | Puesta en marcha | consideración |
| --- | --- | --- | 
| [Github Pages](https://pages.github.com/) | Publica una rama o carpeta del repositorio desde la configuracion de pages. | Adecuado para alojar sitios estáticos directamente GitHub revisa las limitaciones de la publicación y uso del servicio.
| [Netlify](https://www.netlify.com/) | Conecta un repositorio Git para desplegar automáticamente o publica los archivos estáticos desde su interfaz . | Ofrece servicios gratuitos que estan limitados en uso y condicones de servicio.
| [Vercel](https://vercel.com/) |Importa un repositorio Git y configura el despliegue del sitio estático. | Ofrece una versión gratuita limitada en uso y condiciones de servicio.
