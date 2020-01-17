import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "user-list",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "add-user",
    loadChildren: () =>
      import("./add-user/add-user.module").then(m => m.AddUserModule)
  },
  {
    path: "edit-user/:id",
    loadChildren: () =>
      import("./edit-user/edit-user.module").then(m => m.EditUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
