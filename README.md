# Vcompare
js版本号比较插件
#### 方法
```
vCompare (currVer, promoteVer)
```
currVer:当前版本  
promoteVer: 要比较的版本
#### 用法
```js
vCompare('1.2.3', '1.2.2'); //返回1
vCompare('1.2.3.1', '1.2.3'); //返回1
vCompare('1.2.3', '1.2.2.3'); //返回1
vCompare('1.2.3', '1.2.3'); //返回0
vCompare('1.2.3', '1.2.3.1'); //返回-1
vCompare('1.2.3', '1.2.4'); //返回-1
```
特别说明：一般版本号是以 "." 号分割的长度三位或四位的字符串，但是这个比较方法对位数没有限制，五位及以上也是可以的，只是必须以 "." 号为分割
#### 
### License
[MIT](https://opensource.org/licenses/MIT)