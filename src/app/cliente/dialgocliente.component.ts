import { ThrowStmt } from '@angular/compiler';
import {Component,Inject,inject} from '@angular/core'
//import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Cliente } from '../models/cliente';

import { ApiClienteService } from '../services/api-cliente.service'

@Component({
    templateUrl:'dialogcliente.component.html'
})

export class DialogClienteComponent{

    public nombre: String;
    constructor(
        public dialogRef: MatDialogRef<DialogClienteComponent>,
        public apiCliente: ApiClienteService,
        public snackBar:MatSnackBar,
       @Inject(MAT_DIALOG_DATA)public cliente:Cliente
    ){
        if(this.cliente!==null){
            this.nombre=cliente.nombre;
        }
        
    }
    close(){
        this.dialogRef.close();
    }
    editCliente(){
        const cliente:Cliente={nombre:this.nombre,id:this.cliente.id};
        this.apiCliente.edit(cliente).subscribe(response=>{
            if(response.exito==1){
                this.dialogRef.close();
                this.snackBar.open('Cliente editado con exito','',{
                    duration:2000
                });
            }
        });
    }
    addCliente(){
        const cliente:Cliente={nombre:this.nombre,id:0};
        this.apiCliente.add(cliente).subscribe(response=>{
            if(response.exito==1){
                this.dialogRef.close();
                this.snackBar.open('Cliente insertado con exito','',{
                    duration:2000
                });
            }
        });
    }
}