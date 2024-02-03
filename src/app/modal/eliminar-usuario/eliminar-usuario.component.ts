import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/usuario';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiciosUsuariosService } from '../../servicios/servicios-usuarios.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrl: './eliminar-usuario.component.sass'
})
export class EliminarUsuarioComponent implements OnInit{

  userToDelete!: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any, 
    private ref: MatDialogRef<EliminarUsuarioComponent>,
    private servicioUsuarios: ServiciosUsuariosService
    ) {

  }

  ngOnInit(): void {
      this.userToDelete = this.data.user;
  }

  eliminarUsuario(id: string) {
    this.servicioUsuarios.deleteUsers(id)['subscribe']((data:any) => {
      if (data) {
        this.ref.close();        
      }
    });
  }

  cerrarModal() {
    this.ref.close();
  }
}