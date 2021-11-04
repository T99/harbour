/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:16 PM -- November 4th, 2021
 * Project: harbour
 */

export type TopLevelSymbolDefinition = {

	isExported: boolean

};

/**
 * A class representative of a TypeScript symbol that can occur at the top-level of a file, such as a function, a class,
 * or a type.
 *
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export interface TopLevelSymbol {

	/**
	 * Returns true if this symbol is exported.
	 *
	 * @returns {boolean} true if this symbol is exported.
	 */
	isExported(): boolean;
	
}
