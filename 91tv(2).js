/******************************

脚本功能：91视频(TF版)+解锁VIP
软件下载：https://app.glvr.xyz/i-WG4S5YY
软件版本：v666
脚本作者：彭于晏💞
更新时间：2022-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️

*******************************

[rewrite_local]

^https://(app|api).*.com/m_user/info url script-request-header 91tv.js

[mitm] 

hostname = appapi.*.com,api.*.com


*******************************/



var modifiedHeaders = $request.headers;

modifiedHeaders['X-AUTH-TOKEN'] = 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTY2MzgxNzEyMCwiZXhwIjoxNjc5MzY5MTIwfQ.eyJpZCI6Njc3MzY5MzJ9.hg0oelDvuFT1Glu7t5GwgEiFu1es-bxbiFMq2qOAj7aoCTHR3MbEiPxji7oYIQWWi9y5SwhBK6lZnGHukcYQuA';

$done({headers : modifiedHeaders});
