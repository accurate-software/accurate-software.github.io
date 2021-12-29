import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private http: HttpClient) {}

  emailFinder: any = {};

  isOpen: boolean = false; //click de botão


//Metodo chama o Api
loadHome(){

  this.isOpen = !this.isOpen; //click de botão

  this.http
  .get('https://api.hunter.io/v2/email-finder?domain=reddit.com&first_name=Alexis&last_name=Ohanian&api_key=b740a24081e7458eed4aa7e6a65b3d4a5c5469ce')
  .subscribe((emailFinder: any[])=>{
    this.emailFinder = emailFinder;

    console.log(this.emailFinder);

  });
 }
}
