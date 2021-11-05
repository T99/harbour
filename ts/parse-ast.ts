/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:07 PM -- November 5th, 2021
 * Project: harbour
 */

import ts from "typescript";
import { SyntaxSymbol } from "./symbols/generic/syntax-symbol";
import { FormalTypeSymbol } from "./symbols/generic/formal-type-symbol";
import { InterfaceSymbol } from "./symbols/concrete/interface-symbol";

export function parseSourceFile(sourceFile: ts.SourceFile): Map<string, SyntaxSymbol> {
	
	let result: Map<string, SyntaxSymbol> = new Map();
	
	for (let statement of sourceFile.statements) {
		
		switch (statement.kind) {
			
			case ts.SyntaxKind.ClassDeclaration:
			case ts.SyntaxKind.InterfaceDeclaration:
				
				let symbol: FormalTypeSymbol = parseFormalTypeAST(
					statement as ts.ClassDeclaration | ts.InterfaceDeclaration,
					sourceFile
				);
				result.set(symbol.getName(), symbol);
				break;
			
		}
		
	}
	
	return result;
	
}

export function parseFormalTypeAST(type: ts.ClassDeclaration | ts.InterfaceDeclaration,
								   sourceFile: ts.SourceFile): FormalTypeSymbol {
	
	let result: FormalTypeSymbol;
	
	if (type.kind === ts.SyntaxKind.ClassDeclaration) {
		
		result = undefined as any;
		
	} else {
		
		result = new InterfaceSymbol({
			sourceFilePath: sourceFile as unknown as any,
			isExported: true,
			name: "",
			documentation: undefined as any,
			members: []
		});
		
	}
	
	return result;
	
}
