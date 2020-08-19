import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'notify-dialog',
  templateUrl: 'notify-dialog.html'
})
export class notifyDialog {}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private url="192.241.131.118:5009/frinzap/invite";
  constructor(public dialog: MatDialog,private http: HttpClient) { }

  formData(formObject){

    let userDetails = formObject.form.value;
    this.http.post(this.url,JSON.stringify(userDetails))
      .subscribe(response => {
        console.log("Data posted");
      })

  }
  log(x){
    console.log(x);
  }

  openDialog() {
    let dialogConfig: MatDialogConfig = {
      panelClass: "custom-modal"
    };
    this.dialog.open(notifyDialog, dialogConfig);
  }

  ngOnInit(): void {
  }

}


