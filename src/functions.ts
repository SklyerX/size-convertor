import type { Unit } from "./types";

const conversionFactors: { [key in Unit]: number } = {
	b: 1,
	kb: 1024,
	mb: 1024 * 1024,
	gb: 1024 * 1024 * 1024,
	tb: 1024 * 1024 * 1024 * 1024,
};

export function convert(base: string, to: Unit) {
	const regex = /^(\d+)(\w+)$/;

	const matches = base.match(regex);

	if (!matches || matches.length < 2) throw new Error("Invalid Format");

	const size = Number.parseInt(matches.at(1) as string);
	const unit = matches.at(2)?.toLowerCase() as Unit;

	if (!(unit in conversionFactors) || !(to in conversionFactors)) {
		throw new Error("Unsupported unit is either 'base' or 'to'");
	}

	const valueInBytes = size * conversionFactors[unit];

	// Step 2: Convert bytes to the target unit
	const convertedValue = valueInBytes / conversionFactors[to];

	return convertedValue;
}
