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
        array: ['a', 'b', 'c', 'd', 'e'],
        list4: [1,4,6,7],
        list5: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
        list6: [1,4,5,,[3,6]],
        this7: [7,9,0],
        list8: [{"jack":"123"},{"age":"123"}],
        list9: [1,1,2],

    }
    }, created() {
      //console.log('长度大小',Array.prototype.push.apply(this.list1, this.list2))
      // concat是连接一个或多个数组
      //console.log('合并',Array.prototype.concat.apply(this.list1, this.list2))
      /*初始化一个对象*/
      var fromParmas = new FormData();
      fromParmas.append("name",'jack');
      fromParmas.append("age",'18');
      fromParmas.append("list",this.list5);
      fromParmas.append("list",this.list1);
      console.log('获取对应值',fromParmas.get("list"));
      console.log('获取对应所有值',fromParmas.getAll("list"));
      fromParmas.set("age","20");  /**修改对应的值*/
      console.log('获取对应的值',fromParmas.get("age"));
      /*是否有存在的值*/
      console.log('是否有对应的值',fromParmas.has("name"));
      /**删除对应的值*/
      fromParmas.delete("age");
      console.log('获取删除之后的值',fromParmas.get("age"));

    }, methods: {
      allList: function () {
        //console.log("争论:",arguments);
        return Array.prototype.concat.apply([], arguments);
      },isBelowThreshold(value){
        return value < 2;
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
      /** every() 方法测试数组的所有元素是否都通过了指定函数的测试。 */
      console.log('every',this.list4.every(this.isBelowThreshold))  // true <==> false
      /** fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止 */
      console.log('fill',this.list2.fill(7));   //填充7
      console.log('fill',this.list2.fill(0,0,2));  //从0到第2位，填0
      console.log('fill',this.list2.fill(8,2));  //从位置3一直填充8
      /** filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。  */
      console.log(this.list5.filter(rep=>rep.length > 6));   //过滤返回长度大于6的
      console.log(this.list5.filter(rep=>rep.match('e')));   //过滤返回带有 字母 e 的
      /** find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。 */
      console.log('返回大于此数的第一个值，否则返回undefined',this.list4.find(rep=>rep>2));
      /** findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。 */
      console.log('返回大于此数第一个值的下表，否则返回-1',this.list4.findIndex(rep=>rep>2));
      /** flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。 */
      console.log('递归从新遍历返回新数组',this.list6.flat());
      /*flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，
      但 flatMap 通常在合并成一种方法的效率稍微高一些。*/
      console.log('flatMap',this.list6.flat().flatMap(rep=>rep*2));
      console.log('Map',this.list1.map(x=>[x]));
      console.log('flatMap2',this.list1.flatMap(rep=>[rep]));
      console.log('flatMap3',this.list1.flatMap(rep=>rep*2));
      /** forEach() 方法对数组的每个元素执行一次提供的函数。 */
      this.list2.forEach(rep=>{
        console.log('forEach',rep)
      });
      /** includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。 */
      console.log(this.list2.includes(2));  //如果包含2返回true，否则false
      if(this.this7.includes(0)){     //如果包含7，就返回他的下标
        console.log('返回下标',this.this7.findIndex(rep=>rep==0));
      }
      /**indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。*/
      console.log('当前值，存在的下标',this.this7.indexOf(9));  //返回1
      console.log('从下标2开始查找',this.this7.indexOf(1,2))  //返回-1
      /** join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，
       * 那么将返回该项目而不使用分隔符。 */
      console.log('join',this.this7.join());
      /** keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。 */
      var this7other = this.list9.keys();
      for (let tmp of  this7other){
        console.log('keys',tmp);
      }
      /**lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。
       * 从数组的后面向前查找，从 fromIndex 处开始*/
      console.log('找出最后符合元素的下标',this.list9.lastIndexOf(2));   //返回对应下标
      console.log('lastIndexOf',this.list9.lastIndexOf(3));  //没有找到，返回-1
      console.log('lastIndexOf',this.list9.lastIndexOf(2,5));
      /** map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果 */
      console.log('map',this.list9.map(rep=>rep*3))   //对应每个元素乘以3
      console.log('map',this.list9.map(rep=>[rep*2]))  //对应每个元素乘以2，并且分割

    }
  }
</script>
