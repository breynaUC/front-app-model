import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PagePostComponent } from './presentation/pages/page-post/page-post.component';
import { ListPostsComponent } from './presentation/views/list-posts/list-posts.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './presentation/views/form/form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PagePostComponent,
    ListPostsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,FormsModule,
    HttpClientModule
  ],exports:[PagePostComponent]
})
export class PostsModule { }
