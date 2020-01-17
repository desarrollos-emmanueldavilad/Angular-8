import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddUserRoutingModule } from "./add-user-routing.module";
import { AddUserComponent } from "./add-user.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedsModule } from "../shared/shareds.module";

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    ReactiveFormsModule,
    SharedsModule
  ]
})
export class AddUserModule {}
