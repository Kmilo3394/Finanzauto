import { Component, Inject } from '@angular/core';
import { User } from '../../interfaces/usuario';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiciosUsuariosService } from '../../servicios/servicios-usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.sass'
})
export class CrearUsuarioComponent{

  userToCreate!: User;
  formUser = new FormGroup({
    'title': new FormControl('', Validators.required),
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'picture': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any, 
    private ref: MatDialogRef<CrearUsuarioComponent>,
    private servicioUsuarios: ServiciosUsuariosService
    ) {
  }

  crearUsuario() {
    let newUser = {
      id: '0',
      title: this.title.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      picture: this.picture.value,
      email: this.email.value
    }
    
    this.servicioUsuarios.createUsers(newUser)['subscribe']((data:any) => {
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

  get picture(){
    return this.formUser.get("picture") as FormControl;
  }

  get email(){
    return this.formUser.get("email") as FormControl;
  }
}