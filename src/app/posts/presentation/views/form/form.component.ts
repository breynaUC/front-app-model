import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/posts/post';
import { PostService } from 'src/app/posts/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'adra-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private postService: PostService, private router:Router, private activatedRouter:ActivatedRoute) { }
  post:Post =new Post();


  ngOnInit(): void {
    this.cargarDatos();
  }

  add(): void{
    console.log(this.post);
    Swal.fire('Completado', `El post ha sido creado con éxito`)
    this.postService.create(this.post).subscribe(
      res=>this.router.navigate(['/posts'])
    );
  }

  cargarDatos(){
    this.activatedRouter.params.subscribe(
      e=>{
        let id=e['id'];
        if (id) {
          this.postService.getPostId(id).subscribe(
            es=>this.post=es
          );
        }
      }
    )
  }

  editar(){
    console.log(this.post);
    Swal.fire('Completado', `El post ha sido modificado con éxito`)
    this.postService.update(this.post).subscribe(
      res=>this.router.navigate(['/posts'])
    );
  }
}
