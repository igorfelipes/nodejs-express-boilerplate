// import newrelic from 'newrelic';
// import { Logger } from '../logger.interface'

// export class NewRelicLogger implements Logger {

// 	addCustomAtribute(metadata: Record<string, any>): void {
//     for (const [key, value] of Object.entries(metadata)) {
// 			newrelic.addCustomAttribute(key, value);
//     }

// 	}
// 	info(message: string, metadata?: Record<string, any>): void {
// 		if(metadata) this.addCustomAtribute(metadata)
//     newrelic.recordCustomEvent('INFO', { message, ...metadata });
// 	}

// 	error(error: Error, metadata?: Record<string, any>): void {
// 		if(metadata) this.addCustomAtribute(metadata)
//     newrelic.noticeError(error, { logType: 'error' });
// 	}

// 	custom(eventName: string, message: string, metadata?: Record<string, any>): void {
// 		if(metadata) this.addCustomAtribute(metadata)
//     newrelic.recordCustomEvent(eventName, { message, ...metadata });
// 	}
// }