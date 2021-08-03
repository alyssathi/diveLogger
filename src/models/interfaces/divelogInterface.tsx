export interface DiveLogInterface {
	diveNumber: number
	diveSite: string
	date: string
	depth: number
	timeUnder: number
	tankType?: string
	gas?: string
	temperature?: number
	weights?: number
	visibility?: number
	activities?: string
	waterType?: string
	notes?: string
}
