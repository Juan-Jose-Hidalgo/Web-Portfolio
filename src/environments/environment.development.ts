import { IEnvironment } from "src/app/models/environments.interface";

export const environment: IEnvironment = {
    production: true,
    URL: 'url to Email-api',
    firebase: {
        projectId: 'your-firebase-project-id',
        appId: 'your-firebase-app-id',
        storageBucket: 'your-firebase-storage-bucket',
        locationId: 'your-firebase-location-id',
        apiKey: 'your-firebase-api-key',
        authDomain: 'your-firebase-auth-domain',
        messagingSenderId: 'your-firebase-messaging-sender-id',
    },
};
