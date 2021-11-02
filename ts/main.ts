/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:55 AM -- November 2nd, 2021.
 * Project: tsdocs-to-mkdocs
 */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

import util from "util";
import * as fs from "fs";
import ts from "typescript";
import { reconstructMethodSignature } from "./syntax-reconstruction";

export function printNode(node: ts.Node, sourceFile: ts.SourceFile): void {

	cleanObject(node, sourceFile);
	console.log(util.inspect(node, false, null, true));
	
}

export function cleanObject(obj: any, sourceFile: ts.SourceFile): void {

	if (obj?.kind !== undefined) obj.kind = ts.SyntaxKind[obj.kind];
	if (obj?.parent !== undefined) delete obj.parent;
	if (obj?.pos !== undefined && obj?.end !== undefined) obj.TEXT = sourceFile.text.substring(obj.pos, obj.end);

	for (let value of Object.values(obj)) {

		if (typeof value === "object") cleanObject(value, sourceFile);

	}

}

export async function main(): Promise<void> {
	
	const filename: string = "test.ts";
	
	const sourceFile: ts.SourceFile = ts.createSourceFile(
		filename,
		fs.readFileSync(filename, "utf-8"),
		ts.ScriptTarget.Latest
	);
	
	for (let node of sourceFile.statements) {
		
		if (node.kind === ts.SyntaxKind["ClassDeclaration"]) {
			
			for (let member of (node as ts.ClassDeclaration).members) {
				
				if (member.kind === ts.SyntaxKind.MethodDeclaration) {
					
					console.log(reconstructMethodSignature(member as ts.MethodDeclaration, sourceFile));
					
				}
				
			}
			
		}
		
	}

}

main().catch(console.error);
