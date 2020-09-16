import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private appService: AppService) {

  }

   message = ''
   result = []
   errorMsg: string;
   loginStatus: any;

findError(){
  this.appService.getStackoverflow(this.message).subscribe(
    data => {
      this.result = data;
    },
    error => this.errorMsg = error
  );
}

login(){
  this.appService.getOauth().subscribe(
    data => {
      this.loginStatus = data;
    },
    error => this.errorMsg = error
  );
}


 
}
