import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/usuario';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.sass'
})
export class DetalleUsuarioComponent {

  user!: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any, 
    private ref: MatDialogRef<DetalleUsuarioComponent>
    ) {
  }

  ngOnInit(): void {
      this.user = this.data.user;
  }

  cerrarModal() {
    this.ref.close();
  }
}
