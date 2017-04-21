/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { PhotoService } from "../photo.service";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [ PhotoService ]
})
export class HomeComponent {
    public urls: string[];

    constructor(public photoService: PhotoService) {
        photoService.getPhoto().subscribe(
            data => {
                console.log(data);
            }
        );

        // you subscribe to an observable
    }

}
