/*******************************
脚本名称:  情说(解锁会员)
脚本作者：彭于晏💞
更新时间：2022年11月3日 下午8:08
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
感谢木木大佬提供帮助！
*******************************
[rewrite_local]
^http[s]?:\/\/v.qingshuo.com url script-response-body qingshuo.js
[mitm] 
hostname = v.qingshuo.com

*******************************/

var body = $response.body.replace(/"isMember":false/g,'"isMember":true')
.replace(/"memberValidTime":\d+/g,'"memberValidTime":4699011726555')
$done({ body });
