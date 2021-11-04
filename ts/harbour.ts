/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:14 PM -- November 2nd, 2021
 * Project: harbour
 */

import fg from "fast-glob";

export class Harbour {

	public paths: string[];

	protected constructor(paths: string[]) {
		
		this.paths = paths;
		
	}
	
	public static async doc(paths: string | string[]): Promise<Harbour> {
		
		return new Harbour(await fg(paths));
		
	}
	
}
