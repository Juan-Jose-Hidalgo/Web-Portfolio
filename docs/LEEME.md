# 🚀 **Portfolio personal en Angular 15 y Firebase** 🔥
### 🇬🇧 [English](../README.md) | 🇪🇸 Español

## 👋 **Introducción**

Esta aplicación es mi portfolio personal donde muestro mis proyectos realizados con diferentes tecnologías web. La he creado para compartir mi experiencia y conocimientos con otros desarrolladores y posibles reclutadores.

Utilizo Firebase para guardar la información de cada proyecto y mostrarla en el portfolio, por lo que necesitarás crear un proyecto en Firebase si quieres utilizar mi portfolio como base para el tuyo. Otra opción es que cambies de backend y generes el service adecuado.

He creado una API REST cuyo único objetivo es enviar un email a la cuenta de correo personal del desarrollador del portfolio cada vez que un visitante del mismo utilice el formulario de contacto para tal fin. La api se encuentra en el directorio email-api y tiene su propio archivo leeme.md que deberás leer para configurarla correctamente.

## 🔍 **Prerrequisitos**

- Node.js (versión 18 o superior)
- Angular CLI (versión 16 o superior).
- Tener una cuenta de Firebase y crear un proyecto.

Para poder usar el service projects.service.ts deberás tener una BBDD en firebase de tipo Firestore Firebase. La colección debe llamarse projects. Cada proyecto alojado en la BBDD debe seguir la siguiente estructura:
```typescript
{
  coverImage:string; //URL de la imagen de portada del proyecto.
  coverImageWebp:string; //URL de la imagen de portada del proyecto en formato webp.
  createdAt:Date; //Fecha de creación del proyecto.
  images:string[]; //Un array con todas las URL de imágenes del proyecto.
  imagesWebp:string[]; //Un array con todas las URL de imágenes del proyecto en formato webp.
  repository:string; //URL del repositorio del proyecto en GitHub.
  shortDescription:string; //Descripción corta del proyecto.
  technologies: string[]; //Array con el nombre de las tecnologías utilizadas para crear el proyecto.
  title:string; //Título del proyecto.
  url:string; //URL de donde está alojado el proyecto.
}
```
Si quieres usar una estructura distinta para tus proyectos, deberás modificar el servicio projects.service.ts localizado en el directorio /services.



## 🛠️ **Instalación**

1. Clonar este repositorio o descargarlo como zip.
2. Ejecutar ```npm install``` para instalar las dependencias.
3. Descomprimir el archivo alojado en el directorio email-api y seguir sus instrucciones de configuración.
4. Configurar los environments (ver en la siguiente sección).
5. Ejecutar ```npm run start``` para iniciar la aplicación en modo desarrollo
6. Ejecutar ```ng build configuration=production``` para generar los archivos para producción.

## 🔧 **Configuración de los archivos de environment**

Antes de ejecutar la aplicación, debes configurar los archivos de environment para que se conecten correctamente con Firebase y la API de correo electrónico.

1. Abre los archivos ubicados en src/environments.
2. Reemplaza los valores de firebaseConfig por los datos de tu proyecto de Firebase. Puedes encontrar esta información en la consola de Firebase en la sección de configuración del proyecto. Reemplaza el valor URL por la url donde alojas la email-api.
```typescript
import { Environment } from "src/app/models/environment.interface";

export const environment:Environment = {
  production: false,
  URL: 'url a la api localizada en email-api',
  firebaseConfig: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
  },
};
```
Recuerda que environment.development es el archivo utilizado en el modo de desarrollo, mientras que environment.ts es utilizado en el modo de producción.
   
## 💻 **Uso**

La aplicación muestra una página principal con una breve presentación sobre mí y un menú para acceder a las demás secciones.

En la sección Proyectos se pueden ver los proyectos que he realizado con sus respectivos enlaces a GitHub o a la web donde están alojados.

En la sección Contacto se puede enviar un mensaje a mi correo electrónico rellenando un formulario con el nombre, el email y el asunto del mensaje.

Al pulsar sobre el botón leer más de cada proyecto, se abrirá una nueva página con más información sobre dicho proyecto.

## ***Datos del autor*** 👨‍💻
#### 🙋‍♂️ Nombre: Juan Hidalgo Yañez
#### 🐙 GitHub: https://github.com/Juan-Jose-Hidalgo
#### 💼 Visita mi perfil en [LinkedIn](https://www.linkedin.com/in/juan-jos%C3%A9-hidalgo-ya%C3%B1ez-854698b4/)
#### 📨 Correo electrónico: juanhidalgoyanez@gmail.com
---
## 📝 ***Licencia***
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENCIA](./LICENCIA.md) para más detalles.
