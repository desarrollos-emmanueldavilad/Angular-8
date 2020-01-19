import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/filter.pipe';
import { SharedsModule } from '../shared/shareds.module';

@NgModule({
  declarations: [UserComponent, FilterPipe],
  imports: [CommonModule, UserRoutingModule, FormsModule, SharedsModule]
})
export class UserModule {}
