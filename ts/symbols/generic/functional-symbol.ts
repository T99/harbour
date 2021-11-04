/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:15 PM -- November 4th, 2021
 * Project: harbour
 */

import { FunctionalParameter } from "../util/functional-parameter";

export interface FunctionalSymbol {

	isAsync: boolean;
	
	parameters: FunctionalParameter[];
	
	returnType: string;
	
	
	
}
