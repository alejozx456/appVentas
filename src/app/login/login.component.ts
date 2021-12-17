import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiauthService } from "../services/apiauth.service";
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'


@Component({templateUrl:'login.component.html'})
export class LoginComponent implements OnInit{

    public loginForm=this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
    });

    /*public loginForm= new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    })*/


constructor(public apiauth: ApiauthService,
    private router:Router,private fb:FormBuilder){

    /*if(this.apiauth.usuarioData){
        this.router.navigate(['/home']);
    }*/
}

    ngOnInit() {
        
    }
    login(){
        console.log(this.loginForm.value);
        this.apiauth.login(this.loginForm.value).subscribe(response=>{
            console.log(response);
            if(response.exito===1){
                this.router.navigate(['/'])
            }
        })
    }
}