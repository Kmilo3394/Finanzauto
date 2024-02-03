import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearUsuarioComponent } from '../../modal/crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.sass'
})
export class ConsultaComponent {

  constructor(public modalCrear: MatDialog) {

  }

  crearUsuario(): void {
    this.modalCrear
      .open(CrearUsuarioComponent, {})
  }

}
