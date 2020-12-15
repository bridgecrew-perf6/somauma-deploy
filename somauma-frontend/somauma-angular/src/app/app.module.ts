import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { FormsModule }   from '@angular/forms';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CadastrarCursoComponent,
    EditarCursoComponent,
    CadastrarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
