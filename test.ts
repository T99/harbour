/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:37 AM -- November 2nd, 2021
 * Project: harbour
 */

import { IncomingHTTPRequest } from "../messages/incoming-http-request";
import { OutgoingHTTPResponse } from "../messages/outgoing-http-response";

/**
 * The form of a function that can be used as a Middleware with a {@link MiddlewareExecutor}.
 */
export type MiddlewareFunction<T = void> = (request: IncomingHTTPRequest, response: OutgoingHTTPResponse) => T | Promise<T>;

/**
 * A more generic definition of 'Middleware' that can accept either a more formal object instance of the
 * {@link Middleware} class, or the more functional definition using a callback/anonymous function.
 */
export type Middlewareable = Middleware | MiddlewareFunction;

/**
 * A functional interface representative of a function that should be executed as a part of the request-handling process
 * by the server.
 *
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class Middleware {
	
	/**
	 * Executes the functionality enclosed by this Middleware, returning a Promise that resolves once this Middleware
	 * function has completed.
	 *
	 * @param {HTTPRequest} request An object representative of the request as made by the client.
	 * @param {HTTPResponse} response An object representative of the response being prepared for the client.
	 * @returns {Promise<void>} A Promise that resolves once the middleware function has completed.
	 */
	public abstract execute(request: IncomingHTTPRequest, response: OutgoingHTTPResponse): void | Promise<void>;
	
	/**
	 * Creates and returns a Middleware instance from a functional middleware declaration.
	 *
	 * @param {MiddlewareFunction} func The middleware function.
	 * @return {Middleware} Middleware A Middleware instance functionally identical to the provided middleware function.
	 */
	public static fromFunction(func: MiddlewareFunction): Middleware {
		
		return new class extends Middleware {
			public execute: MiddlewareFunction = func;
		}
		
	}
	
	/**
	 * Normalizes a 'middlewareable' to Middleware instances.
	 *
	 * @param {Middlewareable} middlewareable The 'middlewareable' to normalize.
	 * @return {Middleware} A Middleware instance functionally identical to the provided 'middlewareable'.
	 */
	public static normalizeMiddlewareable(middlewareable: Middlewareable): Middleware {
		
		if (!(middlewareable instanceof Middleware)) return Middleware.fromFunction(middlewareable);
		else return middlewareable;
		
	}
	
}
