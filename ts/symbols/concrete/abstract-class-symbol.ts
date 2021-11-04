/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:12 PM -- November 4th, 2021
 * Project: harbour
 */

import { FormalTypeSymbol } from "../generic/formal-type-symbol";
import { Documentation } from "../generic/documentation";

export class AbstractClassSymbol extends FormalTypeSymbol {

	public constructor(name: string, isExported: boolean, documentation?: Documentation) {
		
		super("abstract class", name, isExported, documentation);
		
	}
	
}
