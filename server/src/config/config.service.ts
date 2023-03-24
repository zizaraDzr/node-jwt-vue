import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { IConfigService } from './config.service.interface';

export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;

	constructor() {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			// this.logger.error('Не удалось прочитать файл .env');
			throw new Error('Не удалось прочитать файл .env');
		} else {
			this.config = result.parsed as DotenvParseOutput;
		}
	}
	get(key: string): string {
		return this.config[key];
	}
}

