import { HeaderComponent } from './../shared/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';
import { EditUserComponent } from './edit-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedsModule } from '../shared/shareds.module';

@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    EditUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedsModule
  ]
})
export class EditUserModule {}
