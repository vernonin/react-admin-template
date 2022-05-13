export default function getRandomColor() {
	let str="#"
		let arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
		for(let i=0; i < 6; i++){
				let num=parseInt(Math.random() * 16)
				str += arr[num]
		}
		return str
}