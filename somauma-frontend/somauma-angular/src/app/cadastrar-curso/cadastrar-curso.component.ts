import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Curso } from '../model/Curso';
import { CategoriaService } from '../service/categoria.service';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {
  curso: Curso = new Curso()
  listaCursos: Curso[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllCategorias()
    this.findAllCurso()
  }

  findAllCurso() {
    this.cursoService.getAllCursos().subscribe((resp: Curso[]) => {
      this.listaCursos = resp
      console.log(this.listaCursos)
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: any = Categoria) => {
      this.categoria = resp;
    })
  }


  salvarCurso() {
    this.categoria.id = this.idCategoria
    if (this.curso.title == null || this.curso.price == null || this.curso.description == null) {
      alert("Preencha todos os campos")
    } else {
      this.cursoService.postCurso(this.curso).subscribe((resp: any = Curso) => {
        
        this.curso = resp
        this.curso = new Curso()
        this.router.navigate(["/home"])
        alert("Curso cadastrado com sucesso!")
        this.findAllCurso()
      })
    }
  }


}
