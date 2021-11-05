/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:26 PM -- November 5th, 2021
 * Project: harbour
 */

import fs from "fs/promises";
import path from "path";
import { Harbour } from "./harbour";
import { FormalTypeSymbol } from "./symbols/generic/formal-type-symbol";
import { SyntaxSymbol } from "./symbols/generic/syntax-symbol";

const OUT_DIR: string = "out/";

export async function generateDocs(harbour: Harbour): Promise<void> {
	
	for (let symbol of harbour.getAllSymbols()) {
		
		switch (symbol.getSymbolType()) {
			
			case "class":
			case "abstract class":
			case "interface":
				
			
		}
		
	}
	
}

async function writeDocsToFile(symbol: SyntaxSymbol, docs: string): Promise<void> {
	
	let sourceFilePath: string = symbol.getSourceFilePath();
	let sourceFileName: string = path.basename(sourceFilePath, path.extname(sourceFilePath));
	
	await fs.writeFile(path.join(OUT_DIR, `${sourceFileName}.md`), docs);
	
}

async function generateDocsForType(symbol: FormalTypeSymbol): Promise<void> {
	
	let result: string = "";
	
	await writeDocsToFile(symbol, result);
	
}
