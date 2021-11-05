/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 12:01 PM -- November 4th, 2021
 * Project: harbour
 */

import { Documentation } from "./documentation";
import { SyntaxSymbolType } from "../util/syntax-symbol-type";

/**
 * The definition information for a {@link SyntaxSymbol} instance.
 *
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export type SyntaxSymbolDefinition = {
	
	/**
	 * The full path to the file from which this symbol was parsed.
	 */
	sourceFilePath: string,

	/**
	 * The type of syntax represented by this instance - i.e. a 'class', or a 'function'.
	 */
	symbolType: SyntaxSymbolType,

	/**
	 * The name of this symbol.
	 */
	name: string,

	/**
	 * The {@link Documentation} associated with this symbol, or undefined if no documentation is associated
	 * with this symbol.
	 */
	documentation?: Documentation

}

/**
 * The base-most type of symbol in TypeScript, that which has a name and potentially has documentation.
 * 
 * This serves as the base class for any number of types of symbols, including classes, properties, types, and
 * constants.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class SyntaxSymbol {
	
	/**
	 * The {@link SyntaxSymbolDefinition} object for this SyntaxSymbol.
	 */
	protected definition: SyntaxSymbolDefinition;
	
	/**
	 * Initializes a new TypeScriptSyntaxSymbol with the provided name and optional documentation.
	 * 
	 * @param {SyntaxSymbolDefinition} definition The {@link SyntaxSymbolDefinition} object for this SyntaxSymbol.
	 */
	protected constructor(definition: SyntaxSymbolDefinition) {

		this.definition = definition;
		
	}
	
	// DOC-ME [11/5/2021 @ 4:39 PM] Documentation is required!
	public getSourceFilePath(): string {
		
		return this.definition.sourceFilePath;
		
	}
	
	// DOC-ME [11/5/2021 @ 9:06 AM] Documentation is required!
	public getSymbolType(): SyntaxSymbolType {
		
		return this.definition.symbolType;
		
	}

	/**
	 * Returns the name of this symbol.
	 *
	 * @returns {string} The name of this symbol.
	 */
	public getName(): string {
		
		return this.definition.name;
		
	}

	/**
	 * Sets the name of this symbol to the provided string.
	 *
	 * @param {string} name The string to set as the name of this symbol.
	 */
	public setName(name: string): void {
		
		this.definition.name = name;
		
	}

	/**
	 * Returns true if this symbol has associated documentation.
	 *
	 * @returns {boolean} true if this symbol has associated documentation
	 */
	public hasDocumentation(): boolean {
		
		return this.definition.documentation !== undefined;
		
	}

	/**
	 * Sets the documentation for this symbol to the provided {@link Documentation} object.
	 *
	 * @param {Documentation} documentation The {@link Documentation} to set as the documentation for this symbol.
	 */
	public setDocumentation(documentation: Documentation): void {
		
		this.definition.documentation = documentation;
		
	}

	/**
	 * Returns the {@link Documentation} associated with this symbol, or undefined if no documentation is associated
	 * with this symbol.
	 *
	 * @returns {Documentation | undefined} The {@link Documentation} associated with this symbol, or undefined if no
	 * documentation is associated with this symbol.
	 */
	public getDocumentation(): Documentation | undefined {
		
		return this.definition.documentation;
		
	}
	
}
