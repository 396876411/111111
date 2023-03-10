/******************************

脚本功能：91视频(TF版)+解锁VIP
软件下载：https://app.wenfr.xyz/i-3YRR79
软件版本：v666
脚本作者：彭于晏
更新时间：2022-9-17
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/api\.jtshuzhiwa\.com\/m_user\/info url script-request-header 91tv.js

[mitm] 

hostname = api.jtshuzhiwa.com


*******************************/

var modifiedHeaders = $request.headers;

modifiedHeaders['X-AUTH-TOKEN'] = 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTY2MzQxODA4OSwiZXhwIjoxNjc4OTcwMDg5fQ.eyJpZCI6MzUyNTI0M30.0odEsC9jPMeJ1ql9fJD3fdiP5dkrs_9ETCxWSOQ6KRqbOnCE86K1X0ZmJly41_4GwQ26DXB5lN0O1HguNK6XRw';

$done({headers : modifiedHeaders});
