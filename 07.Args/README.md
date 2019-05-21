
# Args
> http://codingdojo.org/kata/Args/

以指定模式解析传入的参数，如命令行程序后面的各种参数

## todo

* 确定有schema
* schema 为 -l: boolean， -p: number, -d ：string
* schema 有默认值 l: true ，p: 8080 d: /user/logs
* [ ] 单个参数
  * 参数为l
    * 指定值为boolean， 默认 false
    * 指定值不是boolean
  * 参数为p
    * 未指定该值，默认个 0
    * 指定值为number
    * 指定值不为number
  * 参数为d
    * 未指定该值, 默认 /user/logs
    * 指定值为string
    * 指定值不为string
* [ ] 多个参数
  * l & p
  * L& d
