import './screens/register';
import './screens/dashboard';
import './screens/login';
import './screens/profile';
import { addObserver, appState } from './store';
import { Screens } from './types/store';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			switch (appState.screen) {
				case Screens.REGISTER:
					const register = this.ownerDocument.createElement('app-register');
					this.shadowRoot.appendChild(register);
					break;

				case Screens.LOGIN:
					const login = this.ownerDocument.createElement('app-login');
					this.shadowRoot.appendChild(login);
					break;

				case Screens.DASHBOARD:
					const dashboard = this.ownerDocument.createElement('app-dashboard');
					this.shadowRoot.appendChild(dashboard);
					break;

				case Screens.PROFILE:
					const profile = this.ownerDocument.createElement('app-profile');
					this.shadowRoot.appendChild(profile);
					break;
				default:
					break;
			}
		}
	}
}

customElements.define('app-container', AppContainer);
