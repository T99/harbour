/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:14 PM -- November 4th, 2021
 * Project: harbour
 */

import { MemberSymbol } from "./member-symbol";
import { TopLevelSymbol, TopLevelSymbolDefinition } from "./top-level-symbol";
import { SyntaxSymbol, SyntaxSymbolDefinition } from "./syntax-symbol";

export type FormalTypeSymbolDefinition = SyntaxSymbolDefinition & TopLevelSymbolDefinition & {

	members: MemberSymbol[]

};

/**
 * A high-level representation of a 'formal type' in TypeScript - i.e. those declared using the 'class' or 'interface'
 * keywords (including both concrete and abstract classes).
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class FormalTypeSymbol extends SyntaxSymbol implements TopLevelSymbol {

	protected definition!: FormalTypeSymbolDefinition;

	protected constructor(definition: FormalTypeSymbolDefinition) {
		
		super(definition);
		
		this.definition.isExported = definition.isExported;
		this.definition.members = definition.members;
		
	}

	/**
	 * Returns the symbols that are members of this symbol.
	 *
	 * @returns {MemberSymbol[]} The symbols that are members of this symbol.
	 */
	public getMembers(): MemberSymbol[] {

		return this.definition.members;

	}

	public isExported(): boolean {

		return this.definition.isExported;

	}
	
}
