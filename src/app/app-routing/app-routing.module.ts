import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import { LoginComponent } from '../login/login.component';
import { CreateInscriptionComponent } from '../create-inscription/create-inscription.component';
import { MyInscriptionComponent } from '../my-inscription/my-inscription.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'create-inscription', component: CreateInscriptionComponent },
    { path: 'my-inscription/:id', component: MyInscriptionComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
