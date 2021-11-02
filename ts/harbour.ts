/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:14 PM -- November 2nd, 2021
 * Project: tsdocs-to-mkdocs
 */

import fg from "fast-glob";

export class Harbour {

	protected constructor(paths: string | string[]) {
		
		fg(paths);
		
	}
	
	public static async doc(): Promise<Harbour> {
		
		return new Harbour([]);
		
	}
	
}
