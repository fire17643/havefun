---
layout: post
title: 那就叫它Util吧
description: Util 是 Utility 的简写，有用的东西的意思。如果你找到这样的东西，它也许真的会对你非常的有用。
keywords: Util, 命名
category : other
tags : [编程]
---

原文： [And when you call it, you can call it Util](http://hadihariri.com/2012/02/18/and-when-you-call-it-you-can-call-it-util/)

作者： [@hhariri](http://twitter.com/hhariri)

译文： [那就叫它Util吧](http://www.aqee.net/and-when-you-call-it-you-can-call-it-util/)

译者： [外刊IT评论](http://www.aqee.net)

-------------------

> 那就叫它Util吧

别!! 事实上，你不能把它叫做什么Util。也许你会认为我是一个在背后吹毛求疵的讨厌的家伙。不，我不是。

**Util 是 Utility 的简写，有用的东西的意思**。如果你找到这样的东西，它也许真的会对你非常的有用。
可问题就在这儿。你并不能总是找到它们。当你在研究一个别人写的代码库时，有些东西并不总是想你想象的那样一目了然。
此时你唯一的希望就寄托于别的程序员能把程序以一种易于察觉的方式命名。否则你就找不到它了。

事实上，你不仅会错过了它，最终你很可能会重复用功，你知道，你最终很可能写出一个草率的辅助函数，
把它放到一个叫做FormatHelper 的类里，而没有发现有一个叫FormatUtil的类。
当Jack来了后，他自己也写了一个，放到了一个叫做FormatServices的文件里。
为什么？因为最开始我们就没有对命名太留意。

**对于理解一段代码，唯一能指望的、唯一能依赖的，就是代码本身**。
我不想打搅同事来弄清楚一段程序是如何工作的，或某个参数是什么意思，或为什么会需要这段代码，或我自己又编写一遍。
我们应该利用这些编程语言，用合理的命名来交流、理解。

下次当你需要对一个类进行命名时，以它能做什么来命名。如果你发现它的这个名字太有说服力了，那你是于己于人都做了一件好事。

这就是为什么我对命名这么挑剔。因为，**不管你是怎么想的，除非它自己是显而易见的，它不可能做到显而易见**。
而对于你，它的创造者，它永远都是显而易见的。而对于我，不是。

Util， Service， Helper， Manager … 所有的这些都是没有意义的 …

