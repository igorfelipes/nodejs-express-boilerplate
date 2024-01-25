// import { makeLoggerService } from '../logging'
// import { Logger } from '../logging/logger.interface'


// // function injectLogger(thisArg: any) {
// //   const logger: Logger = makeLoggerService();
// //   thisArg.logger = logger;
// // }

// // * Function in progress
// export function LogMethod(){
// 	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
// 		const originalMethod = descriptor.value;

// 		const logger = makeLoggerService()

// 		descriptor.value = new Proxy(originalMethod, {
// 			apply: function(target, thisArg, argumentsList) {
// 				// injectLogger(thisArg)
// 				try{
// 					logger.info(`Executing ${propertyKey}:`, { data: argumentsList })
// 					const result = target.apply(thisArg, argumentsList);
// 					target.apply(thisArg, argumentsList)
// 					if(result instanceof Promise){
// 						return result.then((res) => {
// 							logger.info(`Executed ${propertyKey}`, { method: propertyKey, data: argumentsList, result: res })
// 							return res
// 						}).catch((error) => {
// 							logger.error(error as Error, { 
// 								method: propertyKey,
// 								params: argumentsList,
// 								result: error,
// 							})
// 							throw error
// 						})
// 					}else {
// 						logger.info(`Executed ${propertyKey}`, { data: argumentsList, result })
// 						return result
// 					}
// 				}
// 				catch(error){
// 					logger.error(error as Error, {
// 						method: propertyKey,
// 						data: argumentsList,
// 						error: error,
// 					})
// 					throw error
// 				}
// 			}
// 		})

// 		// descriptor.value = function (...args: any[]) {
// 		// 	logger.info(`Executing ${propertyKey} with params: ${JSON.stringify(args)}`)
// 		// 	const result = originalMethod.apply(this, args);
// 		// 	logger.info(`Executed ${propertyKey} with result: ${JSON.stringify(result)}`)
// 		// 	return result;
// 		// };

// 		return descriptor;
// 	}
// }

// export function Logger(){
// 	return function <T extends { new (...args: any[]): {} }>(constructor: T) {
// 		return class extends constructor {
// 			constructor(...args: any[]) {
// 				super(...args);
	
// 				const className = constructor.name;
// 				const logger = makeLoggerService()
	
// 				// injectLogger(this)
	
// 				return new Proxy(this, {
// 					get(target, propertyKey, receiver) {
	
	
// 						const method = target[propertyKey as keyof typeof target];
	
// 						if (typeof method === 'function') {
// 							return function (...args: any[]) {
// 								try{
// 									logger.info(`Executing ${propertyKey.toString()}:`, {
// 										className,
// 										method: propertyKey, 
// 										requestData: args, 
// 									})
	
// 									const result = Reflect.apply(method, target, args);
									
// 									if(result instanceof Promise){
// 										return result.then((res) => {
// 											logger.info(`Executed ${propertyKey.toString()}`, { 
// 												className,
// 												method: propertyKey, 
// 												requestData: args, 
// 												result: JSON.stringify(res) 
// 											})
// 											return res
// 										}).catch((error) => {
// 											logger.error(error as Error, { 
// 												className,
// 												method: propertyKey,
// 												// TODO: fix this, not showing the params in the log dashboard
// 												requestData: args, 
// 												result: JSON.stringify(error),
// 											})
// 											throw error
// 										})
// 									}else {	
// 										logger.info(`Executed ${propertyKey.toString()}`, {
// 											className,
// 											method: propertyKey, 
// 											requestData: args, 
// 											result: JSON.stringify(result) 
// 										})
// 										return result
// 									}	
// 								}catch(err){
// 									logger.error(err as Error, {
// 										className,
// 										method: propertyKey,
// 										requestData: args, 
// 										error: JSON.stringify(err),
// 									})
// 									throw err
// 								}
// 							};
// 						}
	
// 						return method;
// 					},
// 				});
// 			}
// 		};
// 	}	

// }
