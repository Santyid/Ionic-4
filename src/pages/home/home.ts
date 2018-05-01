import { AddUserPage } from './../add-user/add-user';
import { AddEventPage } from './../add-event/add-event';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { eventWord } from '../../app/event.interface';
import { ActionsProvider } from '../../providers/actions/actions';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	events$: eventWord[];

	constructor(public navCtrl: NavController, public actionProvider: ActionsProvider) {
		this.selectAllEvents();
	}

	goToCreateEvent(): void {
		this.navCtrl.push('AddEventPage');
	}

	selectAllEvents() {
		this.actionProvider.selectAllEvents().subscribe((content) => {
			this.events$ = content;
		});
	}

	goToDetailEvent(event: Event): void {
		this.navCtrl.push('DetailEventPage', { currentItem: event });
	}
}
