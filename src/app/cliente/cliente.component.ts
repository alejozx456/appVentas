import { Component, OnInit } from '@angular/core';
import { ApiClienteService } from '../services/api-cliente.service';
import {Response} from '../models/response';        
import { DialogClienteComponent } from './dialgocliente.component';   
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../models/cliente';
import { DialogDeleteComponent } from '../common/delete/dialogdelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst: any[];
  public columnas: string[]=['id','nombre','actions'];
  constructor(
    private  apiCliente: ApiClienteService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
    
  ) { 

   
  }

  ngOnInit(): void {
    this.getCliente();
  }
  getCliente(){
    this.apiCliente.getCiente().subscribe(response=>{
      this.lst=response.data;
    })
  }
  openAdd(){
    console.log('algo');
    const dialogRef=this.dialog.open(DialogClienteComponent,{
      width:'300'
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.getCliente();
    })
  }
  openEdit(cliente:Cliente){
    console.log('algo');
    const dialogRef=this.dialog.open(DialogClienteComponent,{
      width:'300',
      data:cliente
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.getCliente();
    })
  }
  delete(cliente: Cliente){
    const dialogRef=this.dialog.open(DialogDeleteComponent,{
      width:'300',
      
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.apiCliente.delete(cliente.id).subscribe(response=>{
          if(response.exito===1){
            this.snackBar.open('Cliente eliminado con exito','',{
              duration:2000
            })
            this.getCliente();
          }
        })
      }
    })
  }

}
