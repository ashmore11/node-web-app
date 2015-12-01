import Happens  from 'happens';
import TweenMax from 'gsap';
import $        from 'jquery';

class Navigation {

	constructor() {

		Happens(this);

		this.popEventListnerAdded = false;

		this.$main = $('#main');

		this.bindEvents();

	}

	bindEvents() {

		$('body').find('a').on('click', this.navigate.bind(this));

	}

	navigate(event) {

		event.preventDefault();

		const target = $(event.target);
		const url    = target.attr('href');

		if(url === '/keystone') {

			window.location = url;
			
			return;
		
		} else if(this.url !== url) {

			this.url = url;
			this.id  = target.text().toLowerCase();

		} else {
			
			return;

		}

		this.fadeOut();

		this.pushState();

		if(!this.popEventListnerAdded) {

			this.popState();

		}

	}

	fadeOut() {

		const params = {
			autoAlpha: 0,
			ease: Power1.easeOut,
			onComplete: () => { this.loadPage(); }
		};

		TweenMax.to(this.$main, 0.5, params);

	}

	fadeIn() {

		const params = {
			autoAlpha: 1,
			ease: Power1.easeInOut
		};

		TweenMax.to(this.$main, 0.5, params);

	}

	loadPage() {

		this.$main.load(`${this.url} .page`, null, () => {

			this.emit('url:changed', this.id);
			
			this.fadeIn();

		});

	}

	pushState() {

		history.pushState(this.url, null, this.url);

	}

	popState() {

		$(window).on('popstate', event => {

			this.url = event.originalEvent.state;

			this.fadeOut();

			this.popEventListnerAdded = true;

		});

	}

}

export default new Navigation();
