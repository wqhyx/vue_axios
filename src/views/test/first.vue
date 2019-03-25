<template>
  <div>
    {{msg}}
  </div>
</template>

<style>
</style>

<script>
  export default {
    data() {
      return {
        msg: 'router 新跳法',
        list1: ['1', '2', '3'],
        list2: [4, 5, 6],
        list3: ['7', '8', '9'],
        array: ['a', 'b', 'c', 'd', 'e']
      }
    }, created() {
      //console.log('长度大小',Array.prototype.push.apply(this.list1, this.list2))
      // concat是连接一个或多个数组
      //console.log('合并',Array.prototype.concat.apply(this.list1, this.list2))
    }, methods: {
      allList: function () {
        //console.log("争论:",arguments);
        return Array.prototype.concat.apply([], arguments);
      }
    },mounted(){
      /** concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。 */
      console.log('合并测试1',this.list1.concat.apply(this.list1,this.list2,this.list3))  //失败
      console.log('合并测试2',this.allList(this.list1,this.list2,this.list3))   //成功
      console.log('合并测试3',Array.prototype.concat.apply(this.list1,this.list2,this.list3))   //失败
      /** copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。 */
      /** 将索引为2的值复制到索引为0的位置上面 */
      console.log('换位置',this.list1.copyWithin(0,2,this.list1.length));
      /** 复制到索引1 ，从索引3到结束位置 */
      console.log("复制内容",this.array.copyWithin(1,3));
      /** entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。*/
      var iterator1 = this.array.entries()
      console.log('first',iterator1.next().value);
      console.log('second',iterator1.next().value);
      console.log('thirth',iterator1.next().value);


    }
  }
</script>
