import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Curso } from '../model/Curso';
import { CategoriaService } from '../service/categoria.service';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {
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
  
  findByIdCategoria(id:number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: any = Categoria) => {
      this.categoria = resp;
    })
  }

  salvarCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: any = Categoria) => {
      this.categoria = resp
      this.findAllCategorias()
    })
  }

  deleteCategoria() {
    this.findByIdCategoria(this.idCategoria)
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(() => {
      this.router.navigate(['/cadastro-curso'])
      alert('Categoria apagada com sucesso!')
      this.findAllCategorias()
    })
  }

}
