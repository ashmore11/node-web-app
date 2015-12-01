import Navigation  from 'app/navigation';
import HomeView    from 'views/home';
import ExampleView from 'views/example';

class App {

	constructor() {

		Navigation.on('url:changed', id => {
			
			this.renderView(id);

		});

	}

	renderView(id) {

		switch(id) {
			
			case 'home':
			
				this.view = new HomeView();
			
				break;
			
			case 'example':
				
				this.view = new ExampleView();
			
				break;

		}

	}

}

export default new App();
