import Mock from 'mockjs'

Mock.mock('/mock/usermsg', 'get', {
	code: 0,
	msg: 'success',
	'list|15': [{
		"id|+1":1,
		"name":"@cname",
		"sex|0-1":"1",
		"status|1":[1,2,3,4,5],
		"interest|1":[1,2,3,4,5],
		"birthday":"2020-5-20",
		"address":"@province",
		"time":"09:00"
	}]
})