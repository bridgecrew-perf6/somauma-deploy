import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../model/Curso';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  curso: Curso = new Curso()
  listaCursos: Curso[]

  constructor(
    private cursoService: CursoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.findAllCurso()
  }

  findAllCurso() {
    this.cursoService.getAllCursos().subscribe((resp: Curso[]) => {
      this.listaCursos = resp
      console.log(this.listaCursos)
    })
  }

}
