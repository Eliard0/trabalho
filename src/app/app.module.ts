import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    ModalProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBapkyz8UU727tDafK-S-V-6i8pAnhGw4k",
      authDomain: "trabalh03.firebaseapp.com",
      databaseURL: "https://trabalh03-default-rtdb.firebaseio.com",
      projectId: "trabalh03",
      storageBucket: "trabalh03.appspot.com",
      messagingSenderId: "96854574250",
      appId: "1:96854574250:web:9ffedaffc122aeee4d3cd3",
      measurementId: "G-3J88N4JQBT"
    }),
    AngularFireDatabaseModule

  ],
  entryComponents:[
    ModalProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
