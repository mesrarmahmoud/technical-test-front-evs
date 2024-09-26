import { Component, OnInit, Input } from '@angular/core';

import { Condidat } from 'src/app/models/condidat.model';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent  implements OnInit {
    @Input() condidats: Condidat[] = [];

    constructor( ) { }

    ngOnInit() {
    }
}
