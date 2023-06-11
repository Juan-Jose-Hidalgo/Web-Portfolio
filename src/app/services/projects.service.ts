import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  collection,
  doc,
  query,
} from '@firebase/firestore';
import {
  Firestore,
  collectionData,
  docData,
  orderBy,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { IProject } from '../models/project.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

   //A reference to the Firestore collection that stores projects.
   private projectsCollection: CollectionReference<DocumentData>;

   /**
    * Creates a new instance of the `FirestoreService`.
    *
    * @param firestore An instance of the Firestore service.
    */
   constructor(private readonly firestore: Firestore) {
     this.projectsCollection = collection(this.firestore, 'projects');
   }
 
   /**
    * Retrieves all projects in the Firestore collection, ordered by creation date in ascending order.
    *
    * @returns An observable of an array of `Project` objects.
    */
   getAll(): Observable<IProject[]> {
     const projectsQuery = query(
       this.projectsCollection,
       orderBy('createdAt', 'asc')
     );
     return collectionData(projectsQuery, {
       idField: 'id',
     }) as Observable<IProject[]>;
   }
 
   /**
    * Retrieves a single project from Firestore by its ID.
    *
    * @param id The ID of the project to retrieve.
    * @returns An observable of a single `Project` object.
    */
   get(id: string): Observable<IProject> {
     const project = doc(this.firestore, `projects/${id}`);
     return docData(project, { idField: 'id' })
       .pipe(
         map((data: DocumentData) => {
           const project: IProject = {
             coverImage: data['coverImage'],
             coverImageWebp: data['coverImageWebp'],
             createdAt: new Date(data['createdAt'].seconds * 1000),
             id: data['id'],
             images: data['images'],
             imagesWebp: data['imagesWebp'],
             longDescription: data['longDescription'],
             shortDescription: data['shortDescription'],
             repository: data['repository'],
             technologies: data['technologies'],
             title: data['title'],
             url: data['url']
           };
           return project;
         })
       );
   }
}
