/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 12:26 PM -- November 4th, 2021
 * Project: harbour
 */

import { AccessModifier } from "../util/access-modifier";
import { SyntaxSymbol, SyntaxSymbolDefinition } from "./syntax-symbol";

export type MemberSymbolDefinition = SyntaxSymbolDefinition & {
	
	/**
	 * The access modifier associated with this symbol, or undefined if no access modifier was explicitly provided with
	 * this symbol.
	 */
	accessModifier?: AccessModifier
	
};

/**
 * A type of TypeScript symbol that belongs to some parent symbol, such as a method that belongs to a class.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class MemberSymbol extends SyntaxSymbol {
	
	protected definition!: MemberSymbolDefinition;
	
	protected constructor(definition: MemberSymbolDefinition) {
		
		super(definition);
		
		this.definition.accessModifier = definition.accessModifier;
		
	}
	
	/**
	 * Returns the access modifier associated with this symbol, or potentially undefined if no access modifier is
	 * present and `implicitPublic` is set to false.
	 * 
	 * @param {boolean} implicitPublic Determines whether or not symbols that do not have an explicit access modifier
	 * should be counted as being marked as 'public'. Defaults to true.
	 * @returns {AccessModifier | undefined} The access modifier associated with this symbol, or potentially undefined
	 * if no access modifier is present and `implicitPublic` is set to false.
	 */
	public getAccessModifier(implicitPublic: boolean): AccessModifier | undefined;
	public getAccessModifier(implicitPublic?: true): AccessModifier;
	public getAccessModifier(implicitPublic: false): AccessModifier | undefined;
	public getAccessModifier(implicitPublic: boolean = true): AccessModifier | undefined {
		
		if (implicitPublic) return this.definition.accessModifier ?? "public";
		else return this.definition.accessModifier;
		
	}
	
	/**
	 * Sets the access modifier for this symbol to the specified access modifier.
	 * 
	 * @param {AccessModifier | undefined} accessModifier The access modifier to associate with this symbol, or
	 * undefined to remove any existing access modifier.
	 */
	public setAccessModifier(accessModifier: AccessModifier | undefined): void {
		
		this.definition.accessModifier = accessModifier;
		
	}
	
	/**
	 * Returns true if this symbol is marked as 'public'.
	 * 
	 * @param {boolean} implicitPublic Determines whether or not symbols that do not have an explicit access modifier
	 * should be counted as being marked as 'public'. Defaults to true.
	 * @returns {boolean} true if this symbol is marked as 'public'.
	 */
	public isPublic(implicitPublic: boolean = true): boolean {
		
		return this.getAccessModifier(implicitPublic) === "public";
		
	}
	
	/**
	 * Returns true if this symbol is marked as 'protected'.
	 * 
	 * @returns {boolean} true if this symbol is marked as 'protected'.
	 */
	public isProtected(): boolean {
		
		return this.definition.accessModifier === "protected";
		
	}
	
	/**
	 * Returns true if this symbol is marked as 'private'.
	 * 
	 * @returns {boolean} true if this symbol is marked as 'private'.
	 */
	public isPrivate(): boolean {
		
		return this.definition.accessModifier === "private";
		
	}
	
	/**
	 * Returns true if this symbol is accessible to the 'public' context.
	 * 
	 * In other words, this method returns true if this symbol is accessible to external, non-subclass contexts.
	 * 
	 * @returns {boolean} true if this symbol is accessible to the 'public' context.
	 */
	public isPublicAccessible(): boolean {
		
		return this.isPublic();
		
	}
	
	/**
	 * Returns true if this symbol is accessible to the 'protected' context.
	 * 
	 * In other words, this method returns true if this symbol is accessible to subclass contexts.
	 * 
	 * @returns {boolean} true if this symbol is accessible to the 'protected' context.
	 */
	public isProtectedAccessible(): boolean {
		
		return this.definition.accessModifier !== "private";
		
	}
	
	/**
	 * Returns true if this symbol is accessible to the 'private' context.
	 * 
	 * In other words, this method returns true if this symbol is accessible to the class context.
	 * 
	 * This method always returns true.
	 * 
	 * @returns {true} true if this symbol is accessible to the 'private' context. This condition is always met and thus
	 * this method always returns true.
	 */
	public isPrivateAccessible(): true {
		
		return true;
		
	}
	
}
