# nodejspro
三阶段nodejs项目

端口号:8080;

项目使用了 express-session 组件;
如需查看，请先登录：
用户名：yangwanli
密码：123456

登录页 路由: /login;

数据库模拟账户密码:
	用户名：yangwanli
	密  码：123456

商品添加页面模拟添加的数据：(四项)
	商品名  货号  本店价格 图片
	图片保存在public下的imgs目录下
	删除商品 点击 第四个 删除图标

	search搜索功能：仅通过商品名称搜索

修改商品信息(编辑商品信息)：点击对应商品的第二个编辑图标;
							后跳转至商品添加页面,
							匹配的商品信息显示在对应的输入位置,
							(商品名 货号 本店价格三项可以编辑);

							!important:
							商品编辑完成 重新提交时候
							点击 "重置" 按钮;