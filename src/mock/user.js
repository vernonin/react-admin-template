import Mock from 'mockjs'

Mock.mock('/mock/usermsg', 'get', {
	code: 0,
	msg: 'success',
	'list|15': [{
		"id|+1":1,
		"name":"@cname",
		"nickName":"@clast",
		"sex|1":['男', '女'],
		"status|1":[1,2,3,4,5],
		"phone":/^1[34578]\d{9}$/,
		"email":'@email',
		"tag|1":['管理员', '普通用户'],
		"interest|1":['唱歌', '跳舞', 'rap', '编程', '街舞', '创作'],
		"birthday":"2020-5-20",
		"address":"@province",
		"time":"09:00"
	}]
})