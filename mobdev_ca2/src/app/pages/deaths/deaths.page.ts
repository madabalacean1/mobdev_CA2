// main logic for 'quotes'
// Code from class recordings 23/4
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    quotes: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }

   ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    openDetails(death) {
        let deathId = death.name;
        this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
    }
}
