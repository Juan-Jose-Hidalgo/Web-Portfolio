# 🚀 **Personal portfolio in Angular 15 and Firebase** 🔥
### 🇬🇧 English | 🇪🇸 [Español](docs/LEEME.md)

## 👋 **Introduction**

This application is my personal portfolio where I showcase my projects developed with different web technologies. I have created it to share my experience and knowledge with other developers and potential employers.

I use Firebase to store the information of each project and display it on the portfolio, so you will need to create a project in Firebase if you want to use my portfolio as a basis for yours. Another option is to switch to a different backend and generate the appropriate service.

I have created a REST API whose sole purpose is to send an email to the personal email account of the portfolio developer every time a visitor to the portfolio uses the contact form for that purpose. The API is located in the email-api directory and has its own readme.md file that you should read to configure it correctly.

## 🔍 **Prerequisites**

- Node.js (version 18 or higher)
- Angular CLI (version 16 or higher).
- Having a Firebase account and creating a project.

In order to use the projects.service.ts service, you will need to have a Firestore database in Firebase. The collection should be named "projects". Each project stored in the database should follow the following structure:
```typescript
{
  coverImage: string; // URL of the project's cover image.
  coverImageWebp: string; // URL of the project's cover image in webp format.
  createdAt: Date; // Creation date of the project.
  images: string[]; // An array containing all the URLs of project images.
  imagesWebp: string[]; // An array containing all the URLs of project images in webp format.
  repository: string; // URL of the project's repository on GitHub.
  shortDescription: string; // Short description of the project.
  technologies: string[]; // An array with the names of the technologies used to create the project.
  title: string; // Title of the project.
  url: string; // URL where the project is hosted.
}
```

## 🛠️ **Instalation**

1. Clone this repository or download it as a zip file.
2. Run ```npm install``` to install the dependencies.
3. Unzip the file located in the email-api directory and follow its configuration instructions..
4. Configure the environments (see the next section).
5. Run ```npm run start``` to start the application in development mode
6. Run ```ng build configuration=production``` to generate production-ready files.

## 🔧 **Configuration of environment files**

Before running the application, you must configure the environment files to connect correctly with Firebase and the email API.

1. Open the files located in src/environments.
2. Replace the values of firebaseConfig with the data from your Firebase project. You can find this information in the Firebase console in the project settings section. Replace the value of URL with the URL where you host the email-api.
```typescript
import { Environment } from "src/app/models/environment.interface";

export const environment:Environment = {
  production: false,
  URL: 'The URL to the API located in email-api.',
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  },
};
```
   
## 💻 **Usage**

The application displays a main page with a brief introduction about me and a menu to access other sections.

In the Projects section, you can see the projects I have worked on with their respective links to GitHub or the website where they are hosted.

In the Contact section, you can send me a message to my email by filling out a form with the name, email, and subject of the message.

When clicking on the "Read more" button for each project, a new page will open with more information about that project.

## ***Author's information*** 👨‍💻
#### 🙋‍♂️ Name: Juan Hidalgo Yañez
#### 🐙 GitHub: https://github.com/Juan-Jose-Hidalgo
#### 💼 Visit my profile in [LinkedIn](https://www.linkedin.com/in/juan-jos%C3%A9-hidalgo-ya%C3%B1ez-854698b4/)
#### 📨 Email: juanhidalgoyanez@gmail.com
---
## 📝 ***License***
This project is licensed under the MIT License. Please refer to the [LICENSE.md](./docs/LICENSE.md) file for more details.
