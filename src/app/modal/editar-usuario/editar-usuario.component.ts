import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/usuario';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiciosUsuariosService } from '../../servicios/servicios-usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.sass'
})
export class EditarUsuarioComponent implements OnInit{

  userToEdit!: User;
  formUser = new FormGroup({
    'title': new FormControl('', Validators.required),
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any, 
    private ref: MatDialogRef<EditarUsuarioComponent>,
    private servicioUsuarios: ServiciosUsuariosService
    ) {
  }

  ngOnInit(): void {
      this.userToEdit = this.data.user;
      this.setValues(this.userToEdit);
  }

  editarUsuario() {
    let editedUser = {
      title: this.title.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      picture: this.userToEdit.picture,
      id: this.userToEdit.id,
    }
    this.servicioUsuarios.editUsers(editedUser)['subscribe']((data:any) => {
      if (data) {
        this.ref.close();        
      }
    });
  }

  cerrarModal() {
    this.ref.close();
  }

  get title(){
    return this.formUser.get("title") as FormControl;
  }

  get firstName(){
    return this.formUser.get("firstName") as FormControl;
  }

  get lastName(){
    return this.formUser.get("lastName") as FormControl;
  }  
  
  setValues(user: User){
    this.formUser.patchValue({
      title: user.title,
      firstName: user.firstName,
      lastName: user.lastName
    })
  }
}