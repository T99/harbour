/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:56 AM -- November 4th, 2021
 * Project: harbour
 */

import { FormalTypeSymbol } from "../generic/formal-type-symbol";
import { Documentation } from "../generic/documentation";

export class ClassSymbol extends FormalTypeSymbol {
	
	public constructor(name: string, isExported: boolean, documentation?: Documentation) {
		
		super("class", name, isExported, documentation);
		
	}
	
}
