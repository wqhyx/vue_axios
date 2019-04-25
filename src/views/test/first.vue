<template>
  <div>
    {{msg}}
  </div>
</template>

<style>
</style>

<script>
  export default {
    data: function () {
      return {
        msg: 'router 新跳法',
        list1: ['1', '2', '3'],
        list2: [4, 5, 6],
        list3: ['7', '8', '9'],
        array: ['a', 'b', 'c', 'd', 'e'],
        list4: [1, 4, 6, 7],
        list5: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
        list6: [1, 4, 5, , [3, 6]],
        this7: [7, 9, 0],
        list8: [{"jack": "123"}, {"age": "123"}],
        list9: [1, 1, 2],
        list10: [1, 1, 1, 2],
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
        return value < 5;
      }
    }, mounted: function () {

      /** concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。 */
      console.log('合并测试1', this.list1.concat.apply(this.list1, this.list2, this.list3))  //失败
      console.log('合并测试2', this.allList(this.list1, this.list2, this.list3))   //成功
      console.log('合并测试3', Array.prototype.concat.apply(this.list1, this.list2, this.list3))   //失败

      /** copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。 */
      /** 将索引为2的值复制到索引为0的位置上面 */
      console.log('换位置', this.list1.copyWithin(0, 2, this.list1.length));
      /** 复制到索引1 ，从索引3到结束位置 */
      console.log("复制内容", this.array.copyWithin(1, 3));

      /** entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。*/
      var iterator1 = this.array.entries()
      console.log('first', iterator1.next().value);
      console.log('second', iterator1.next().value);
      console.log('thirth', iterator1.next().value);

      /** every() 方法测试数组的所有元素是否都通过了指定函数的测试。 */
      console.log('every', this.list4.every(this.isBelowThreshold))  // true <==> false
      console.log('every', this.list4.every(rep => rep < 6));

      /** fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止 */
      console.log('fill', this.list2.fill(7));   //填充7
      console.log('fill', this.list2.fill(0, 0, 2));  //从0到第2位，填0
      console.log('fill', this.list2.fill(8, 2));  //从索引2一直填充8

      /** filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。  */
      console.log(this.list5.filter(rep => rep.length > 6));   //过滤返回长度大于6的
      console.log(this.list5.filter(rep => rep.match('e')));   //过滤返回带有 字母 e 的

      /** find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。 */
      console.log('返回大于此数的第一个值，否则返回undefined', this.list4.find(rep => rep > 2));

      /** findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。 */
      console.log('返回大于此数第一个值的下表，否则返回-1', this.list4.findIndex(rep => rep > 2));

      /** flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。 */
      console.log('递归从新遍历返回新数组', this.list6.flat());

      /*flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，
      但 flatMap 通常在合并成一种方法的效率稍微高一些。*/
      console.log('flatMap', this.list6.flat().flatMap(rep => rep * 2));
      console.log('Map', this.list1.map(x => [x]));
      console.log('flatMap2', this.list1.flatMap(rep => [rep]));
      console.log('flatMap3', this.list1.flatMap(rep => rep * 2));

      /** forEach() 方法对数组的每个元素执行一次提供的函数。 */
      this.list2.forEach(rep => {
        console.log('forEach', rep)
      });

      /** includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。 */
      console.log(this.list2.includes(2));  //如果包含2返回true，否则false
      if (this.this7.includes(0)) {     //如果包含7，就返回他的下标
        console.log('返回下标', this.this7.findIndex(rep => rep == 0));
      }

      /**indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。*/
      console.log('当前值，存在的下标', this.this7.indexOf(9));  //返回1
      console.log('从下标2开始查找', this.this7.indexOf(1, 2))  //返回-1

      /** join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，
       * 那么将返回该项目而不使用分隔符。 */
      console.log('join', this.this7.join());

      /** keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。 */
      var this7other = this.list9.keys();
      for (let tmp of  this7other) {
        console.log('keys', tmp);
      }

      /**lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。
       * 从数组的后面向前查找，从 fromIndex 处开始*/
      console.log('找出最后符合元素的下标', this.list9.lastIndexOf(2));   //返回对应下标
      console.log('lastIndexOf', this.list9.lastIndexOf(3));  //没有找到，返回-1
      console.log('lastIndexOf', this.list9.lastIndexOf(2, 5));

      /** map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果 */
      console.log('map', this.list9.map(rep => rep * 3))   //对应每个元素乘以3
      console.log('map', this.list9.map(rep => [rep * 2]))  //对应每个元素乘以2，并且分割

      /** pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。 */
      console.log('pop之前', this.list10.pop());
      console.log('pop之后', this.list10)   //最后一位删除了

      /** push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。 */
      console.log('push之前', this.list10.push(77));
      console.log('push之后', this.list10);

      /** reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。 */
      const com = (accountVal, otherVal) => (accountVal + otherVal);  //相加
      console.log('reduce', this.list10.reduce(com));
      console.log('reduce', this.list10.reduce(com, 10));
      var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);  //获取最大那个
      console.log([{x: 52}, {x: 42}].reduce(maxCallback))

      /** reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。 */
      var reduceright = [[0, 1], ['12', {"name": "jack"}], [4, 5]].reduceRight(
        (accVal, currVal) => accVal.concat(currVal)
      );
      console.log('reduceright', reduceright);
      console.log('reduceright 计数', [1, 1, 1].reduceRight(
        (accVal, currVal) => accVal + currVal
      ));

      /** reverse() 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。 */
      console.log('reverse', [1, 7, 8, 10].reverse())  //将数组值反过来

      /**  shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。 */
      var array = [77, 777, 100].shift();
      console.log('shift 删除第一个', array);
      console.log('shift 删除第一个之前', this.list10);
      console.log('shift 删除第一个中', this.list10.shift());
      console.log('shift 删除第一个之后', this.list10);

      /** slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。 */
      console.log('slice', [1, 2, 3, 4, 5].slice(2));
      console.log('slice', [2, 3, 44, 66, 20, 10].slice(2, 5));

      /** some() 方法测试是否至少有一个元素通过由提供的函数实现的测试。 */
      console.log('some', [2, 5, 7, 0].some(rep => rep == 7));
      console.log('some', [2, 5, 7, 0].some(rep => rep % 2 == 7));

      /** sort() 方法用原地算法对数组的元素进行排序，并返回数组。排序算法现在是稳定的。默认排序顺序是根据字符串Unicode码点。 */
      console.log('sort', [5, 12, 65, 10, 1].sort());

      /**  splice() 方法通过删除或替换现有元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。 */
      var ter = [2, 10, 5, 6, 9], ty = [];
      ty = ter;
      ter.splice(1, 0, 7); // inserts at 1st index position
      ty.splice(4, 1, 77);
      console.log('splice 替换', ter);
      console.log('splice 替换', ty);
      var ww = [1, 2, 3, 4, 5, 6].splice(3, 1);
      console.log('splice 删除的元素', ww)
      var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
      var removed = myFish.splice(3, 1);
      console.log('splice 删除的元素', removed)
      console.log('splice 删除的元素之后', myFish)

      /**  toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串
       * ，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。 */
      console.log('toLocaleString', [1, 4, 5, 7].toLocaleString());
      console.log(new Date().toLocaleString().replace(/\//g, '-'));

      /***toString() 返回一个字符串，表示指定的数组及其元素。*/
      console.log('toString', [1, 2, 8, 'jack', 10].toString());

      /** unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。 */
      var tep = [2, 4, 6, 8, 10];
      console.log('unshift', tep.unshift(0, 1, 1.5, 1.6, 1.7));
      console.log('unshift', tep);

      /** values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值 */
      const res = [4, 7, "你好"].values();

      for (var v of res) {
        console.log('values', v)
      }

    }
  }
</script>
