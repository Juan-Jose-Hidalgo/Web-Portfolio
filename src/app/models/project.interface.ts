export interface IProject {
    id: string;
    coverImage: string;
    coverImageWebp: string;
    createdAt: Date;
    images: string[];
    imagesWebp: string[];
    longDescription: any;
    shortDescription: string;
    repository: string;
    technologies: string[];
    title: string;
    url: string;
}