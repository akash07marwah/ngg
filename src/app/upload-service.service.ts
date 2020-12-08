import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(public http:HttpClient) { }
  public uploadFile(formData){
    return this.http.post(`${environment.apiUrl}/upload`,formData);
  }
}
