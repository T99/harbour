/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:12 PM -- November 4th, 2021
 * Project: harbour
 */

import { FormalTypeSymbol, FormalTypeSymbolDefinition } from "../generic/formal-type-symbol";

export type AbstractClassSymbolDefinition = Omit<FormalTypeSymbolDefinition, "symbolType">;

export class AbstractClassSymbol extends FormalTypeSymbol {

	public constructor(definition: AbstractClassSymbolDefinition) {
		
		super({
			symbolType: "abstract class",
			...definition
		});
		
	}
	
}
