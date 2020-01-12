import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SandboxComponentComponent } from './sandbox-component/sandbox-component.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'sandbox', component: SandboxComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
