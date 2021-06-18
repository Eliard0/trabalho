import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalProductComponent} from './modal-product/modal-product.component';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import { FirebaseOperation } from '@angular/fire/database/interfaces';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabalho003';
  displayedColumns: string[] = ['name', 'value', 'functions'];
  dataSource: any;

  constructor(public dialog: MatDialog, 
    private db: AngularFireDatabase){

      this.dataSource= this.db.list('products')
      .snapshotChanges()
      .pipe(
        map(itens =>{
          return itens.map(item =>{
            return Object.assign({ key: item.payload.key }, item.payload.val())
          })
        })
      )
  }
  
  insert(){
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '300px',
      data: {type: 'insert'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.db.list('products').push(result);
      }
    });
  }

  edit(data: any){
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '300px',
      data:{ ...data, type:'update'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.db.list('products').update(data.key, result)
      }
    });
  }

  delete(key: any) {
    this.db.list('products').remove(key);
  }
}
