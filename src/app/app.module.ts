import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment.prod';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { FrontComponent } from './components/front/front.component';

import { UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    FrontComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'userbasefirebase'), 
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
