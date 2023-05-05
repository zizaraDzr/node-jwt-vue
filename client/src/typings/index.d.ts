import axios from 'axios';

declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$axios: typeof axios;
		$validate: (data: object, rule: object) => boolean;
	}
}
