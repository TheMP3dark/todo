import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerMainComponent } from './components/container-main/container-main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ContainerMainComponent, title: "Todo" },
  { path: 'about-us', component: AboutUsComponent, title: "Todo: About Us" },
  { path: '**', component: PageNotFoundComponent, title: "Hmmmmmmm...." },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
