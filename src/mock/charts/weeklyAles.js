
const xAxis = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const yumi = [2640, 1320, 622, 1820, 2220, 1629, 2060];
const jiang = [1203, 732, 504, 600, 1504, 932, 709];
const banli = [952, 462, 352, 463, 1207, 800, 564];
const chayou = [763, 295, 201, 399, 953, 632, 462];

export default function () {
	const yumiArr = xAxis.map((item, index) => {
		return {
			week: item,
			name: '玉米',
			value: yumi[index]
		}
	})


	const jiangArr = xAxis.map((item, index) => {
		return {
			week: item,
			name: '生姜',
			value: jiang[index],
		}
	})

	const banliArr = xAxis.map((item, index) => {
		return {
			week: item,
			name: '板栗',
			value: banli[index]
		}
	})

	const chayouArr = xAxis.map((item, index) => {
		return {
			week: item,
			name: '茶油',
			value: chayou[index]
		}
	})

	return [...yumiArr, ...jiangArr, ...banliArr, ...chayouArr]
}