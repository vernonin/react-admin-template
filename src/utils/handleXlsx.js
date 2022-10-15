import * as XLSX from 'xlsx'

/**
 * 本地导入excel转为数组
 * @param file 文件对象
 * @returns 
 */
 export const importExcel = (file) => {
		return new Promise((resolve) => {
			const reader = new FileReader()

			reader.onload = (e) => {
				const data = new Uint8Array(e.target.result)
				const workbook = XLSX.read(data, { type: 'array' })

				//将Excel 第一个sheet内容转为json格式
				const worksheet = workbook.Sheets[workbook.SheetNames[0]]
				const json = XLSX.utils.sheet_to_json(worksheet)

				resolve(json)
			}

			reader.readAsArrayBuffer(file)
		})
}


/**
 * json数据导出Excel
 * @param fileName 导出的文件名称
 * @param data 数据
 * @param sheetName 表名，默认为：sheet
 */
export const downloadExcel = (fileName, data, sheetName = 'sheet') => {
	return new Promise((resolve) => {
		// 创建一个新的工作簿
		const workbook = XLSX.utils.book_new()

		// 创建一个新的工作表
		const worksheet = XLSX.utils.json_to_sheet(data)

		// 将工作表命名默认为：sheet
		XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)

		// 导出工作簿，并命名导出文件名为Presidents.xlsx
		XLSX.writeFile(workbook, `${fileName}.xlsx`)

		resolve()
	})
}