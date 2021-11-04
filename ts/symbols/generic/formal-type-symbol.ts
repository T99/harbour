/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:14 PM -- November 4th, 2021
 * Project: harbour
 */

import { MemberSymbol } from "./member-symbol";
import { TopLevelSymbol } from "./top-level-symbol";
import { SyntaxSymbol } from "./syntax-symbol";
import { SyntaxSymbolType } from "../util/syntax-symbol-type";
import { Documentation } from "./documentation";

/**
 * A high-level representation of a 'formal type' in TypeScript - i.e. those declared using the 'class' or 'interface'
 * keywords (including both concrete and abstract classes).
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class FormalTypeSymbol extends SyntaxSymbol implements TopLevelSymbol {
	
	public isExported: boolean;

	public members: MemberSymbol[];
	
	/**
	 *
	 * @param {SyntaxSymbolType} symbolType The type of syntax represented by this instance.
	 * @param {string} name
	 * @param {boolean} isExported
	 * @param {Documentation} documentation
	 * @protected
	 */
	protected constructor(symbolType: SyntaxSymbolType, name: string, isExported: boolean,
						  documentation?: Documentation) {
		
		super(symbolType, name, documentation);
		
		this.isExported = isExported;
		this.members = [];
		
	}
	
}
