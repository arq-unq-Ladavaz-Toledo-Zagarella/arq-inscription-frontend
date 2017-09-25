import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import { LoginComponent } from '../login/login.component';
import { InscriptionComponent } from '../inscription/inscription.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inscription', component: InscriptionComponent },
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
