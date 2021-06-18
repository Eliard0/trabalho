import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent{

  public modalData = {name: null, value: null, type: null}
  title='criar';
  constructor (
    public dialogRef: MatDialogRef<ModalProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      Object.assign(this.modalData, data);
      this.title = (this.modalData.type == 'insert')? 'Criar': 'Atualizar';
    }

    onNoClick(): void {
    this.dialogRef.close();
  }

}
