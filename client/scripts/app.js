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

	renderView(id) {

		if(id === 'home') {
		
			this.view = new HomeView();
		
		} else if(id === 'example') {
		
			this.view = new ExampleView();
		
		}

	}

}

export default new App();
