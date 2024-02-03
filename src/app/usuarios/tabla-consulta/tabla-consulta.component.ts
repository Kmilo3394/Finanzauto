import { Component, OnInit } from '@angular/core';
import { ServiciosUsuariosService } from './../../servicios/servicios-usuarios.service';
import { UserList, User } from '../../interfaces/usuario';
import { MatDialog } from '@angular/material/dialog';
import { EliminarUsuarioComponent } from '../../modal/eliminar-usuario/eliminar-usuario.component';
import { EditarUsuarioComponent } from '../../modal/editar-usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from '../../modal/detalle-usuario/detalle-usuario.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-consulta',
  templateUrl: './tabla-consulta.component.html',
  styleUrl: './tabla-consulta.component.sass'
})
export class TablaConsultaComponent implements OnInit{
  usuarios: User[] = [];
  limit = 0;
  page = 0;
  total = 0;
  pageSize = 10;
  pageEvent: PageEvent = new PageEvent();

  constructor(private servicioUsuarios: ServiciosUsuariosService, public modalEliminar: MatDialog,
    public modalEditar: MatDialog, public modalDetalle: MatDialog) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.servicioUsuarios.getUsers(this.pageSize, this.page)['subscribe']((data:any) => {
      this.usuarios = data.data;
      this.limit = data.limit;
      this.page = data.page;
      this.total = data.total;
    });
  }

  eliminarUsuario(id: string): void {
    let userToDelete = this.usuarios.find((user) => user.id === id);
    this.modalEliminar
      .open(EliminarUsuarioComponent, {
        data: { user: userToDelete }
      })
      .afterClosed()
      .subscribe((eliminado: Boolean) => {
        if (eliminado) {
          this.cargarDatos();
        }
      });
  }
  
  editarUsuario(id: string): void {
    let userToEdit = this.usuarios.find((user) => user.id === id);
    this.modalEditar
      .open(EditarUsuarioComponent, {
        data: { user: userToEdit }
      })
      .afterClosed()
      .subscribe((editado: Boolean) => {
        if (editado) {
          this.cargarDatos(); 
        }
      });
  }
  
  detalleUsuario(id: string): void {
    let user = this.usuarios.find((user) => user.id === id);
    this.modalDetalle
      .open(DetalleUsuarioComponent, {
        data: { user: user }
      })
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.total = e.length;
    this.pageSize = e.pageSize;
    this.page = e.pageIndex;
    this.cargarDatos();
  }

  changeTitles(titles: string) {
    switch(titles) {
      case 'miss':
        return 'srta';
      case 'ms':
        return 'sra';
      case 'mr':
        return 'sr';
      case 'mrs':
        return 'sra';
      default:
        return titles;
    }
  }
}