/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:55 AM -- November 2nd, 2021.
 * Project: harbour
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
import { reconstructClassSignature, reconstructMethodSignature } from "./syntax-reconstruction";
import {Harbour} from "./harbour";

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

export async function testAST(): Promise<void> {

	const filename: string = "test.ts";

	const sourceFile: ts.SourceFile = ts.createSourceFile(
		filename,
		fs.readFileSync(filename, "utf-8"),
		ts.ScriptTarget.Latest
	);

	for (let node of sourceFile.statements) {

		if (node.kind === ts.SyntaxKind["ClassDeclaration"]) {

			console.log(reconstructClassSignature(node as ts.ClassDeclaration, sourceFile));

			for (let member of (node as ts.ClassDeclaration).members) {

				if (member.kind === ts.SyntaxKind.MethodDeclaration) {

					console.log("\t" + reconstructMethodSignature(member as ts.MethodDeclaration, sourceFile));

				}

			}

		}

	}

}

export async function main(): Promise<void> {
	
	let harbour: Harbour = await Harbour.doc("**/*.ts");

	console.log(harbour.paths);

}

main().catch(console.error);
