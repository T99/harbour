/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:56 AM -- November 4th, 2021
 * Project: harbour
 */

import { FormalTypeSymbol, FormalTypeSymbolDefinition } from "../generic/formal-type-symbol";

export type ClassSymbolDefinition = Omit<FormalTypeSymbolDefinition, "symbolType">;

export class ClassSymbol extends FormalTypeSymbol {
	
	public constructor(definition: ClassSymbolDefinition) {
		
		super({
			symbolType: "class",
			...definition
		});
		
	}
	
}
