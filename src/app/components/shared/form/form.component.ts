import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective , NgForm, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HttpService } from 'src/app/services/http.service';
import { SessionService } from 'src/app/services/session.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  noMatch:boolean = false

  formFieldsRegistrer = [
    {
      name:'Nombre',
      value: '',
      formControl: new FormControl('',Validators.required),
      errors: {
        required: `EL nombre es obligatorio`
      }
    },{
      name:'Apellido',
      value: '',
      formControl: new FormControl('',Validators.required),
      errors: {
        required: `EL apellido es obligatorio`
      }
    },{
      name:'Nombre de usuario',
      value: '',
      formControl: new FormControl('',Validators.required),
      errors: {
        required: `EL nombre de usuario es obligatorio`
      }
    },{
      name:'Email',
      value: '',
      formControl: new FormControl('',[Validators.required,Validators.email]),
      errors: {
        required: `EL email es obligatorio`,
        email: `Escriba una dirección de email valida.`
      }
    },{
      name:'Password',
      value: '',
      formControl: new FormControl('',Validators.required),
      errors: {
        required: `EL password es obligatorio`
      }
    },{
      name:'Confirma el password',
      value: '',
      formControl: new FormControl('',Validators.required),
      errors: {
        required: `EL password es obligatorio`
      }
    }
  ]
  
  formFieldsLogIn = [
  {
    name:'Email',
    formControl: new FormControl('',[Validators.required,Validators.email]),
    errors: {
      required: `EL email es obligatorio`,
      email: `Escriba una dirección de email valida.`
    }
  },{
    name:'Password',
    formControl: new FormControl('',Validators.required),
    errors: {
      required: `EL password es obligatorio`
    }
  }
  ]
  formulario:FormGroup = new FormGroup(
    {
      'Email': this.formFieldsLogIn[0].formControl,
      'Password': this.formFieldsLogIn[1].formControl
    }
  )

  matcher = new MyErrorStateMatcher();
  

  constructor(
    public dialogRef:MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private httpService:HttpService,
    private sessionService:SessionService) { }

  ngOnInit() {
  }

  registrarse() {
  }

  iniciarSesion() {
    if (this.formulario.valid) {
      this.httpService.iniciarSesion().subscribe((data:any) => {
        if(data.email == this.formulario.get('Email').value &&
          data.password == this.formulario.get('Password').value) {
            this.dialogRef.close()
            this.sessionService.newSesion(data)
        }
        else{
          this.noMatch = true
        }
      })
    }
  }

}