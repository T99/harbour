/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:14 PM -- November 2nd, 2021
 * Project: harbour
 */

import fg from "fast-glob";
import { SyntaxSymbol } from "./symbols/generic/syntax-symbol";

export class Harbour {
	
	protected data: Map<string, Map<string, SyntaxSymbol>>;

	protected constructor(data: Map<string, Map<string, SyntaxSymbol>>) {
		
		this.data = data;
		
	}
	
	public static async doc(paths: string | string[]): Promise<Harbour> {
		
		let filePaths: string[] = await fg(paths);
		
		filePaths;
		
		return new Harbour(new Map());
		
	}
	
	public getAllSymbols(): SyntaxSymbol[] {
		
		return undefined as any;
		
	}
	
	public findSymbolsByName(name: string): SyntaxSymbol[] {
		
		return [];
		
	}
	
}
