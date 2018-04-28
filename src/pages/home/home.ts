import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { eventWord } from '../../app/event.interface';
import { ActionsProvider } from '../../providers/actions/actions';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	eventText: string;
	events$: eventWord[];

	constructor(public navCtrl: NavController, private actionProvider: ActionsProvider) {
		this.selectAllEvents();
	}

	addEvent(event: string) {
		this.actionProvider.addEvent(event);
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
