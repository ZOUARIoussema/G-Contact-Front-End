import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GContact';

  contact = {nom:"med",email:"oussema.zouari@esprit.tn"};
}
