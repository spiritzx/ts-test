/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-04 14:51:29
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-04 15:33:15
 */

console.log("枚举")
const enum resultStatus {
  success = 10000,
  error = 10001,
  sqlError = 10002
}

console.log(resultStatus.success)
