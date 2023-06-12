import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IDataForm } from '../models/form-data.interface';
import { IEnvironment } from '../models/environments.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string = (environment as IEnvironment).URL;
  constructor(
    private http: HttpClient
  ) { }

  sendEmail(data: IDataForm) {
    const url = `${this.baseUrl}portfolio-form`;
    return this.http.post(url, data);
  }
}
