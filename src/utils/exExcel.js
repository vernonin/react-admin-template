const ExportJsonExcel = require("js-export-excel")

export default function exExcel(fileName, header, filter, data) {
	return new Promise((resolve, reject) => {
		try {
			const option = {
				fileName,
				datas: [
					{
						sheetData: data,
						sheetName: "sheet",
						sheetFilter: filter,
						sheetHeader: header,
						columnWidths: new Array(data.length).fill(10),
					}
				]
			}
			
			const toExcel = new ExportJsonExcel(option); //new
			toExcel.saveExcel();
			resolve()
		}
		catch (err) {
			reject(err)
		}
	})
}
