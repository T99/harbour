/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:12 PM -- November 4th, 2021
 * Project: harbour
 */

import {FunctionalSymbol, FunctionalSymbolDefinition} from "../generic/functional-symbol";
import { FunctionalParameter } from "../util/functional-parameter";
import {SyntaxSymbol, SyntaxSymbolDefinition} from "../generic/syntax-symbol";
import {TopLevelSymbol, TopLevelSymbolDefinition} from "../generic/top-level-symbol";

export type FunctionSymbolDefinition = SyntaxSymbolDefinition & FunctionalSymbolDefinition & TopLevelSymbolDefinition;

export class FunctionSymbol extends SyntaxSymbol implements FunctionalSymbol, TopLevelSymbol {

    protected definition!: FunctionSymbolDefinition;

    public constructor(definition: FunctionSymbolDefinition) {

        super(definition);

        this.definition.isExported = definition.isExported;
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

    public isExported(): boolean {

        return this.definition.isExported;

    }

	
	
}
