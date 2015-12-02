import Navigation  from 'app/utils/navigation';
import HomeView    from 'app/views/home';
import ExampleView from 'app/views/example';

class App {

	constructor() {

		const nav = new Navigation();

		nav.on('url:changed', id => {
			
			this.renderView(id);

		});

		nav.init();

	}

	get views() {

		return {
			home    : HomeView,
			example : ExampleView,
		};

	}

	renderView(id) {

		const view = this.views[id];

		this.view = new view();

	}

}

const APP = new App();
