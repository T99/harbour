/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 12:01 PM -- November 4th, 2021
 * Project: harbour
 */

import { Documentation } from "./documentation";
import { SyntaxSymbolType } from "../util/syntax-symbol-type";

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
	 * The type of syntax represented by this instance - i.e. a 'class', or a 'function'.
	 */
	public symbolType: SyntaxSymbolType;
	
	/**
	 * The name of this symbol.
	 */
	public name: string;
	
	/**
	 * The {@link Documentation} associated with this symbol, or undefined if no documentation is associated
	 * with this symbol.
	 */
	public documentation?: Documentation;
	
	/**
	 * Initializes a new TypeScriptSyntaxSymbol with the provided name and optional documentation.
	 * 
	 * @param {SyntaxSymbolType} symbolType The type of syntax represented by this instance.
	 * @param {string} name The name of this symbol.
	 * @param {Documentation} documentation The {@link Documentation} associated with this symbol,
	 * or undefined if no documentation is associated with this symbol.
	 */
	protected constructor(symbolType: SyntaxSymbolType, name: string, documentation?: Documentation) {
		
		this.symbolType = symbolType;
		this.name = name;
		this.documentation = documentation;
		
	}
	
	public getName(): string {
		
		return this.name;
		
	}
	
	public setName(name: string): void {
		
		this.name = name;
		
	}
	
	public hasDocumentation(): boolean {
		
		return this.documentation !== undefined;
		
	}
	
	public setDocumentation(documentation: Documentation): void {
		
		this.documentation = documentation;
		
	}
	
	public getDocumentation(): Documentation | undefined {
		
		return this.documentation;
		
	}
	
}
