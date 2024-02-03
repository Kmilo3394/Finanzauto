import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EliminarUsuarioComponent } from './modal/eliminar-usuario/eliminar-usuario.component';
import { ConsultaComponent } from './usuarios/consulta/consulta.component';
import { TablaConsultaComponent } from './usuarios/tabla-consulta/tabla-consulta.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EditarUsuarioComponent } from './modal/editar-usuario/editar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './modal/detalle-usuario/detalle-usuario.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CrearUsuarioComponent } from './modal/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    TablaConsultaComponent,
    EliminarUsuarioComponent,
    EditarUsuarioComponent,
    DetalleUsuarioComponent,
    HeaderComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
