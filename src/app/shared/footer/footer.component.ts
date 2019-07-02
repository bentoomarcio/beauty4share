import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  Parse = window["Parse"];
  hasEmail = false;
  formEmail: any;

  constructor(private formB: FormBuilder, private snackB: MatSnackBar) {
    this.formEmail = this.formB.group({
      'inputEmail': ['', [Validators.required, Validators.email]],      
    });
  }

  sendEmail() {
    let strEmail = this.formEmail.controls["inputEmail"].value,
    Email = this.Parse.Object.extend('Email'),
    pQuery = new this.Parse.Query(Email);    

    pQuery.get("bmvOSuYsqx").then($array => {      
      let arrEmail = $array.attributes.email;
      if(arrEmail.indexOf(strEmail) < 0) {
        arrEmail.push(strEmail);
        $array.set("email", arrEmail);
        $array.save().then(
          ($result) => {
            console.log("result :: " + $result);
            this.snackB.open("E-mail enviado com sucesso!", "X", { duration: 2000, verticalPosition: "top" });
            this.formEmail.reset();
          },
          ($error) => {
            console.log("error :: " + $error);
            this.snackB.open("Houve um erro no envio do seu e-mail.", "X", { duration: 2000, verticalPosition: "top" });
            this.formEmail.reset();
          }
        )
      } else {
        this.snackB.open("Desculpe mas seu e-mail já existe no nosso banco de dados.", "X", { duration: 2000, verticalPosition: "top" });
        this.formEmail.reset();
      }

    })

  }

  ngOnInit() {
  }

}
