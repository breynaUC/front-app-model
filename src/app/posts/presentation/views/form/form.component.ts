import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/posts/post';
import { PostService } from 'src/app/posts/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'adra-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private postService: PostService, private router:Router) { }
  post:Post =new Post();


  ngOnInit(): void {
  }

  add(): void{
    console.log(this.post);
    Swal.fire('Completado', `El post ha sido creado con éxito`)
    this.postService.create(this.post).subscribe(
      res=>this.router.navigate(['/posts'])
    );
  }

}
