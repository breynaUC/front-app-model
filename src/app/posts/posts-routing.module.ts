import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePostComponent } from './presentation/pages/page-post/page-post.component';
import { FormComponent } from './presentation/views/form/form.component';

const routes: Routes = [
  {path:'',component:PagePostComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
