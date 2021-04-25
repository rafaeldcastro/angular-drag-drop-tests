import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

/**GUARDS */

/**MODELS */
import { appRoutesNames } from "./app-routes-names";

const routes: Routes = [
  {
    path: appRoutesNames.MAIN.route,
    loadChildren: () =>
      import("./pages/main/main.module").then(m => m.MainPagesModule)
  },
  {
    path: "",
    redirectTo: appRoutesNames.MAIN.route,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
