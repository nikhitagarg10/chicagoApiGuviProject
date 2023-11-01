import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [
  //home page
  { path: '', component: HomeComponent },

  //wishlist
  {path: "wishlist/:id", component: WishlistComponent},
  {path: "wishlist", component: WishlistComponent},

  //individual page
  {path: "individual/:id", component: IndividualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
