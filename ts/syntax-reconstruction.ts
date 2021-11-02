/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 12:50 PM -- November 2nd, 2021
 * Project: tsdocs-to-mkdocs
 */

import ts from "typescript";

export function reconstructMethodSignature(node: ts.MethodDeclaration, sourceFile: ts.SourceFile): string {
	
	// let result: string = "";
	//
	// for (let modifier of (node.modifiers ?? [])) {
	//	
	// 	switch (modifier.kind) {
	//		
	// 		case ts.SyntaxKind.PublicKeyword:
	// 			result += "public ";
	// 			break;
	//			
	// 		case ts.SyntaxKind.ProtectedKeyword:
	// 			result += "protected ";
	// 			break;
	//			
	// 		case ts.SyntaxKind.PrivateKeyword:
	// 			result += "private ";
	// 			break;
	//			
	// 		case ts.SyntaxKind.StaticKeyword:
	// 			result += "static ";
	// 			break;
	//		
	// 		case ts.SyntaxKind.AbstractKeyword:
	// 			result += "abstract ";
	// 			break;
	//			
	// 		case ts.SyntaxKind.AsyncKeyword:
	// 			result += "async ";
	// 			break;
	//		
	// 	}
	//	
	// }
	//
	// if (node.name.kind === ts.SyntaxKind["Identifier"]) {
	//	
	// 	result += (node.name as ts.Identifier).text;
	//	
	// } else {
	//	
	// 	let { line }: ts.LineAndCharacter = ts.getLineAndCharacterOfPosition(sourceFile, node.pos);
	//	
	// 	throw new Error(`Failed to parse name for method signature at ${sourceFile.fileName}:${line + 1}`)
	// }
	//
	// result += `(${sourceFile.text.substring(node.parameters.pos, node.parameters.end).trim()})`;
	//
	// if (node.type !== undefined) result += `: ${sourceFile.text.substring(node.type.pos, node.type.end).trim()}`;
	//
	// return result;
	
	let start: number;
	let end: number;
	
	if ((node as any)?.jsDoc !== undefined) {
		
		let jsDocNodes: ts.Node[] = (node as any).jsDoc;
		start = jsDocNodes[jsDocNodes.length - 1].end;
		
	} else start = node.pos;
	
	if (node.body === undefined) end = node.end;
	else end = node.body.pos;
	
	return sourceFile.text.substring(start, end).trim();
	
}
