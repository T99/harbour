/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 12:50 PM -- November 2nd, 2021
 * Project: tsdocs-to-mkdocs
 */

import ts from "typescript";

export function reconstructClassSignature(node: ts.ClassDeclaration, sourceFile: ts.SourceFile): string {

	let start: number;
	let end: number;

	if ((node as any)?.jsDoc !== undefined) {

		let jsDocNodes: ts.Node[] = (node as any).jsDoc;
		start = jsDocNodes[jsDocNodes.length - 1].end;

	} else start = node.pos;

	end = node.members.pos;

	let signature: string = sourceFile.text.substring(start, end).trim();

	if (signature.endsWith("{")) signature = signature.substring(0, signature.length - 1).trim();

	return signature;

}

export function reconstructMethodSignature(node: ts.MethodDeclaration, sourceFile: ts.SourceFile): string {
	
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
