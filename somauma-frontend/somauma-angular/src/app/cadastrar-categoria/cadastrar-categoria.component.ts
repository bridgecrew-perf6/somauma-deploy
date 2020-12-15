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
    this.findByIdCategoria()
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
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: any = Categoria) => {
      this.categoria = resp;
    })
  }

  salvarCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: any = Categoria) => {
      this.categoria = resp
    })
  }

  deleteCategoria() {
    this.categoriaService.deleteCategoria(this.categoria.id).subscribe(() => {
      this.router.navigate(['/cadastro-curso'])
      alert('Categoria apagada com sucesso!')
    })
  }

}
