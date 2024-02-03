import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { User, UserList } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})

export class ServiciosUsuariosService {
  private configUrl: string | undefined;

  constructor(private http: HttpClient) { }
  
  getUsers(pageSize: number, page: number){
    this.configUrl = `${environment.apiUrl}/user?page=${page}&limit=${pageSize}`;
    const users = this.http.get(this.configUrl, {headers: new HttpHeaders({'app-id': environment.apiKey})});
    return users;
  }
  
  deleteUsers(id: string){
    this.configUrl = `${environment.apiUrl}/user/${id}`;
    const deletedUser = this.http.delete(this.configUrl, {headers: new HttpHeaders({'app-id': environment.apiKey})});
    return deletedUser;
  }
  
  editUsers(editedUser: User){
    this.configUrl = `${environment.apiUrl}/user/${editedUser.id}`;
    const user = this.http.put(this.configUrl, editedUser, {headers: new HttpHeaders({'app-id': environment.apiKey})});
    return user;
  }
  
  createUsers(newUser: User){
    this.configUrl = `${environment.apiUrl}/user/create`;
    const user = this.http.post(this.configUrl, newUser, {headers: new HttpHeaders({'app-id': environment.apiKey})});
    return user;
  }
}