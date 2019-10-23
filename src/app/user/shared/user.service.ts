import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
    //user petitions
    uploadProfilePicture(formData, id): Observable<any> {
        return this.http.post(`/api/v1/users/uploadProfilePicture/${id}`, formData);
    }
    getDataUser(id: string): Observable<any> {
        return this.http.get(`/api/v1/users/${id}`)
    }
    //UBICACION TEMPORAL DE PETICION
    getAllUniversities(): Observable<any> {
        return this.http.get('/api/v1/universities/all');
    }
}
