---
layout: post
title: JavaScript 中的异步梳理（3）——使用 Wind.js
keywords: javascript, asynchronous
category : javascript
tags : [javascript, asynchronous]
---

原文：[JavaScript中的异步梳理（3）——使用 Wind.js](http://jimliu.net/?p=191)

作者：[JimLiu](http://jimliu.net)

----------------------------------------------------

拖了几百年的三部曲终于迎来了第三篇，时过境迁，Jscex 已经更名为 wind.js 了，这里先给一下之前的链接

1. [JavaScript中的异步梳理（1）——使用消息驱动](http://justjavac.com/javascript/2013/08/08/asynchronous-in-javascript-1-message-driven.html)
2. [JavaScript中的异步梳理（2）——使用 Promises/A](http://justjavac.com/javascript/2013/08/08/asynchronous-in-javascript-2-promises-a.html)

在之前介绍的方法中，无论是消息驱动还是 Promise，都无法摆脱「回调」这个东西。

习惯了命令式编程的我们似乎很难接受回调，因为它的执行顺序和代码编写顺序并不一致。
而 JavaScript 中的回调之所以会有这么多话题值得讨论，我想一方面是因为它有一张长得像 Java 的脸，而同时却又有如此多的异步特性。
反观像 Erlang, F# 那样生来就是异步的语言，似乎反而没这么多话题好讨论的。

异步就要回调吗？这是个问题，习惯了 JavaScript 中的异步似乎这个问题的答案是肯定的，但 Wind.js 却扭转了这一点。

在同步、阻塞的环境下，我们写下如下代码

```javascript
str = readFile('...');
str += 'ok';
writeFile('...');
```

似乎理所当然地就认为 1、3 两行耗时操作会阻塞掉程序，于是在开发 GUI 程序的时候，遇到 IO 操作我们通常会开启新的线程来进行 IO，
然后完成时再通知主线程，这样可以避免GUI失去响应。

在 JavaScript 的世界里，用户代码只有一个线程，JS 使用异步来解决这个矛盾，与此同时使用回调的方式来达到「通知主线程」的效果。

似乎由于在此之前异步为人重视程度不是很高，JS 的异步特性被大家广为接受之后，似乎回调成为了标准的异步解决方案。
的确，回调是一种看起来很像声明的编程方法，在单一异步操作的时候，回调还算优雅，但一旦涉及异步流程控制的时候，回调嵌套就会成为挥之不去的噩梦。

回过头来看过去的同步阻塞编程方法，似乎顺序执行更讨好一些，因为代码怎么写的，程序顺序就是怎么样。

老赵开发的 [Wind.js](http://windjs.org/) 为我们提供了「顺序编写、异步执行」的机会。
Wind.js 的原名叫 Jscex，全称 JavaScript Computation Expression，即 JavaScript 计算表达式。

计算表达式这个词是从函数式编程中来的，想象我们中学的时候解数学和物理题，我们总会用各种代数标识来表达变量，推导、化简完公式之后，
才把题目中给的具体数值代入。
这样做不仅让推导过程更加清晰可懂，还能避免中间的运算产生精度的损失。

在命令式编程中，我们写下

```javascript
c = a + b;
```

的时候，a+b这个表达式就已经被执行计算，并且把结果赋值给 `c` 了。
但在函数式语言中则不尽然，由于「延迟计算」的特性，上面的代码并不一定会立即执行，而只有在它「需要被执行」（例如输出）的时候才会真正执行。

有了「计算表达式」的概念之后，我们就可以把异步操作理解为异步任务，在 Wind 里一个「异步方法」执行的时候将返回一个「异步任务」”，也称为「Task对象」。
（下文中部分 Demo 来自于 <http://windjs.org/>）

例如这里我们定义一个异步方法 `printAsync`

```javascript
var printAsync = eval(Wind.compile('async', function(n){
	console.log(n);
}));
```

当执行它的时候，并不会直接执行方法，而是会返回一个 `Task` 对象，可以通过

```javascript
var task = printAsync(1);
task.start(); // 1
```

来真正启动一个 `Task`

到这里似乎并没有看出来异步方法和 `Task` 有什么用，那么我们再看看从异步方法里调用别的异步任务的情况

```javascript
var fibo = eval(Wind.compile('async', function(){
	var a = 1, b = 1;
	console.log(a);
	$await(Wind.Async.sleep(1000));
	console.log(b);
	while (true){
		$await(Wind.Async.sleep(1000));
		var c = a + b;
		console.log(c);
		a = b;
		b = c;
	}   
}));
```

上文的代码中，在异步方法里使用了 `$await` 来「等待」一个异步任务，这里的异步任务是由 `Wind.Async.sleep` 提供的等待1秒钟的任务。

通过这样的代码实现了每隔 1 秒钟自动打印下一个斐波那契数，想一想如果不使用 Wind.js 的话似乎意味着我们需要 `setInterval` 了，而在 js 里写一个

```javascript
while (true){
```

似乎也算得上是一件匪夷所思的事情了。

Wind.js 通过对异步方法中的 JS 代码进行二次编译，将「顺序编写」的代码变成了 JS 的「异步+回调」的风格，
这让我们在开发的时候可以沿用一些过去常用的思路，例如上面的例子中的 `sleep`（有多少朋友初接触 JavaScript 的时候有上网搜索如何进行 `sleep` 的经历？）。

而 Wind.js 的其他辅助方法里也有诸如 `whenAll(tasks)` 这样的方法能够帮助我们进行一些多重依赖的流程控制。

上文中使用了一个短得不能再短的 Demo 来演示了 Wind.js 是如何让我们的代码可以「顺序编写、异步执行」的。
网上也有朋友怀疑这样是否违背了 JS 异步模型的初衷，我个人认为没有这个问题，编程语言为我们提供的只是一种编程语言的发明者认为比较不错的方法，
根据个人习惯和项目需要，只要语言有为我们提供了改造它的能力，我们完全可以改造它，只不过正好 JavaScript 为我们提供了改造的空间而已。
我们完全没有必要被语言特性本身绑架，束缚了编程思维，只选择以单一的模型去迎合语言特性。

在这里总结一下这个小系列中所介绍的三种梳理 JavaScript 中异步操作的方法，并谈一谈我自己的选择。

1. 消息驱动——编程模型最简单、代码风格最回调。适合有「剧本」的代码，例如用它来编写一段动画的 StoryBoard 或者设计阶段就定义好的若干步骤。

2. Promises/A——API 简单易用、代码风格也不难接受。适合「剧情」不大固定，需要经常以编程方式修改异步流程的程序。

Wind.js——像是障眼法一样的可以让我们回归「传统」编程风格的工具。
适合复杂逻辑、通过异步流控制时代码显得冗长的情况，通过 `$await` 异步任务的方式让代码更加易读，编写也更容易。

JavaScript 中的流程控制解决方案岂止是上述三种，[这里][async-flow]有一个巨大的列表，仔细研究的话还会找到诸如 Flow-JS、seq、Step 等等一大堆独具匠心的工具。

[async-flow]: https://github.com/joyent/node/wiki/modules#wiki-async-flow "Control flow / Async goodies"

JavaScript 是一门非常开放的语言，由于本身的简洁和动态特性给我们带来很大「二次创作」的空间，即可以是仅仅从 API 上提供方案，
也可以通过二次编译大刀阔斧的进行改造。这正是这门语言吸引人的地方之一。

至此这个系列终于结束了，但 JavaScript 异步梳理的路才刚刚踏上起点（此时吉姆作 45° 仰望星空状）。

**相关阅读**：

1. [JavaScript 中的异步梳理（0）](http://justjavac.com/javascript/2013/08/08/asynchronous-in-javascript-0.html)
2. [JavaScript 中的异步梳理（1）——使用消息驱动](http://justjavac.com/javascript/2013/08/08/asynchronous-in-javascript-1-message-driven.html)
3. [JavaScript 中的异步梳理（2）——使用 Promises/A](http://justjavac.com/javascript/2013/08/08/asynchronous-in-javascript-2-promises-a.html)
4. [JavaScript 中的异步梳理（3）——使用 Wind.js](http://justjavac.com/javascript/2013/08/08/asynchronous-in-javascript-3-windjs.html)
