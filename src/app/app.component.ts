import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app', // interactivity between component and template URL
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {
    }
}
