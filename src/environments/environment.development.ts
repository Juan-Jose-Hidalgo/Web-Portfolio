import { IEnvironment } from "src/app/models/environments.interface";

export const environment: IEnvironment = {
    production: true,
    URL: 'https://mail-api.jjhidalgo.com/contact/',
    firebase: {
        projectId: 'portfolio-projects-a8711',
        appId: '1:412421836064:web:5fb6ac8a08dc10b3e3db45',
        storageBucket: 'portfolio-projects-a8711.appspot.com',
        locationId: 'europe-west',
        apiKey: 'AIzaSyBlCUEW-_uMbW-BmxKCyTfOexdESV9EDQE',
        authDomain: 'portfolio-projects-a8711.firebaseapp.com',
        messagingSenderId: '412421836064',
    },
};
