import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
      autoria: ['',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          this.minusculoValidator
        ])],
      modelo: ['modelo1']
    })
  }

  habilitarBotao(): String {
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }

  minusculoValidator(control: AbstractControl){
    const autoria = control.value as string;
    if(autoria !== autoria?.toLocaleLowerCase()){
      return {minusculo:true};
    }else
      return null;
  }

}
