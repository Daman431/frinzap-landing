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
  private url="https://192.241.131.118:5009/frinzap/invite";
  public counterDetails = {
    days:0,
    hoursLeft:0,
    minutesLeft:0,
    secondsLeft:0
  };
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
    this.countdownComponent()
  }

   countdownComponent() {
        
        let flag = true;
        const updateCountdown = (countDownTime)=>{
            const counter = setInterval(() => {
                
                this.counterDetails = updateDeadline();

                if(countDownTime == 0){
                    clearInterval(counter);
                }
            }, 1000);
        }

        const updateDeadline = ()=> {

            let endDate = new Date("september 5, 2020 00:00:00");
            let currentDate = new Date();
            let countDownTime = endDate.getTime() - currentDate.getTime();

            const remainingTime = timeLeft(countDownTime);

            if(flag){
                updateCountdown(countDownTime)
                flag=false;
            }

            return remainingTime;

        }
        const timeLeft = (countDownTime) => {

            let days = Math.floor(countDownTime/(1000 * 60 * 60 * 24));
            let hours = Math.floor(countDownTime/(1000 * 60 *60));
            let minutes = Math.floor(countDownTime/(1000 * 60));
            let seconds = Math.floor(countDownTime/1000);



            let hoursLeft = hours % 24;
            let minutesLeft = minutes % 60;
            let secondsLeft = seconds % 60;

            return {
                days:days,
                hoursLeft:hoursLeft,
                minutesLeft:minutesLeft,
                secondsLeft:secondsLeft
            }
        }
        updateDeadline();
      }
}


