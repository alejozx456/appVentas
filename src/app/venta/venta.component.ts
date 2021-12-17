import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogVentaComponent } from './dialog/dialogventa.component';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openAdd(){
    console.log("algo");
    const dialogRef=this.dialog.open(DialogVentaComponent,{
      width:'600px'
    });
  }
}
