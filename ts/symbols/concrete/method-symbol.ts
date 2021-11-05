/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:12 PM -- November 4th, 2021
 * Project: harbour
 */

import { MemberSymbol, MemberSymbolDefinition } from "../generic/member-symbol";
import { FunctionalSymbol, FunctionalSymbolDefinition } from "../generic/functional-symbol";
import { FunctionalParameter } from "../util/functional-parameter";

export type MethodSymbolDefinition = Omit<MemberSymbolDefinition, "symbolType"> & FunctionalSymbolDefinition;

export class MethodSymbol extends MemberSymbol implements FunctionalSymbol {
	
	protected definition!: MemberSymbolDefinition & FunctionalSymbolDefinition;

	public constructor(definition: MethodSymbolDefinition) {
		
		super({
			symbolType: "method",
			...definition
		});
		
		this.definition.isAsync = definition.isAsync;
		this.definition.parameters = definition.parameters;
		this.definition.returnType = definition.returnType;
		
	}
	
	public isAsync(): boolean {
		
		return this.definition.isAsync;
		
	}
	
	public getParameters(): FunctionalParameter[] {
		
		return this.definition.parameters;
		
	}
	
	public getReturnType(): string {
		
		return this.definition.returnType;
		
	}
	
	
}
