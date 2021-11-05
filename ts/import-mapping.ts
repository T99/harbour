/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:44 AM -- November 5th, 2021
 * Project: harbour
 */

import path from "path";
import ts from "typescript";

/**
 * A string-to-string mapping from symbol names to paths from which the given symbol was imported.
 */
export type ImportMap = {
	
	[symbolName: string]: string
	
};

/**
 * Generates and returns a string-to-string mapping from symbol names to paths from which the given symbol was imported.
 * 
 * @param {ts.SourceFile} sourceFile The {@link ts.SourceFile} from which the given import statements were parsed.
 * @param {ts.ImportDeclaration} importStatements A list of import statements to parse and generate an import map.
 * @returns {ImportMap} A string-to-string mapping from symbol names to paths from which the given symbol was imported.
 */
export function generateImportMap(sourceFile: ts.SourceFile, ...importStatements: ts.ImportDeclaration[]): ImportMap {
	
	let result: ImportMap = {};
	
	for (let importStatement of importStatements) {
		
		let symbols: string[] = [];
		let file: string = (importStatement.moduleSpecifier as ts.Identifier).text;
		
		if (file.startsWith(".") || file.startsWith("/")) file = path.resolve(file + ".ts");
		
		if (importStatement.importClause !== undefined) {
			
			if (importStatement.importClause.namedBindings !== undefined) {
				
				symbols.push(...(importStatement.importClause.namedBindings as ts.NamedImports).elements.map(
					(element: ts.ImportOrExportSpecifier): string => element.name.escapedText as string
				));
				
			} else symbols.push((importStatement.importClause.name as ts.Identifier).escapedText as string);
			
		}
		
		for (let symbol of symbols) result[symbol] = file;
		
	}
	
	return result;
	
}
