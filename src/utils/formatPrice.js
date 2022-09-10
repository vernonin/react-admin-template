export default function(value) {
	return `${value}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)
}