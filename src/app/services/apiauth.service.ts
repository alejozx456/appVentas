import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {Response} from '../models/response'
import { Usuario } from "../models/usuario";
import {map} from 'rxjs/operators'
import { Login } from "../models/login";

const httpOption={
    headers: new HttpHeaders({
        'Contend-type':'application/json'
    })
};


@Injectable({
    providedIn:'root'
})
export class ApiauthService{
url:string='http://localhost:60589/api/User/Login';

private usuarioSubject:BehaviorSubject<Usuario>;
public usuario: Observable<Usuario>;

public get usuarioData(): Usuario{
    return this.usuarioSubject.value;
}

constructor(private http: HttpClient){
    this.usuarioSubject=new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario')));
    this.usuario=this.usuarioSubject.asObservable();

}
login(login:Login):Observable<Response>{
 
    return this.http.post<Response>(this.url,login,httpOption).pipe(
        map(res=>{
            if(res.exito===1){
                const usuario:Usuario=res.data;
                localStorage.setItem('usuario',JSON.stringify(usuario));
                this.usuarioSubject.next(usuario);
            }
            return res
        })
    );
}
    logout(){
        localStorage.removeItem('usuario');
        this.usuarioSubject.next(null);
    }
}
