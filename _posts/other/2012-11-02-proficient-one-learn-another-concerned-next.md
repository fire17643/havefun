---
layout:     post
title:      精通one，学习another，关注next
keywords: 学习,晋升
category : other
tags : [学习]
---

## Tip 1 要方法而不是记忆 ##

我的一个程序员朋友常跟我说记住超过 200 个 C++ 函数是多么的有帮助。

> 我从来不必去查找函数的定义，因此我可以比其他程序员编程快上50%。

他自豪的说。可结果是什么？

难道他不知道编译器的代码自动完成功能可以节约大量查找函数及输入函数的时间吗，另外当C#发布出来后，他在记忆函数上面的努力就白费了。

当然，编程中对函数的熟记是一件必需的事情，但是你应当花费更多的时间在学习做事的方法上，
比如说创建一个数据库连接，
如何产生RSS源等，然后是关注于代码是如何实现的。
**学习做事的正确方法远比死记硬背重要**。
正所谓 [人有多大懒，才有多大闲](http://justjavac.com/other/2012/09/03/how-lazy-have-much-leisure.html)。

## Tip 2 建立属于你自己的资源库 ##

我们都会有因为这样或者那样原因而不得不建立的代码集。
我从来不记得连接数据库的准确代码语句，所以我每次都不得不在代码集中花10分钟去查询它。
为了解决这个问题，我创建了一个用于记录代码片段的 Word 文档，以帮助我记忆和查找。

我的一个同事建了个记录链接的书签，另外一个同事在他的邮件中存储了这些内容。
**无论你的方法是什么，都是一种可以使你方便查找到文件或内容的好习惯**。
当你建立你的知识库后，你会发现它将极大的帮助你去把代码写得更好和更快。

## Tip 3 知道做什么而不是怎样做 ##

很多初级程序员问我“我怎样做这个，或者我怎样做那个？”我总是会跟他们说“你想做什么呢？”
听闻此言后，他们会死盯着我，就好像我跟他们的妈妈约会了一样。

这就是我的下一个观点， **绝不要在知道你想做什么之前去学习怎样做**，比如一个程序员想要搜索一个文本文件中是否存在的某个特定的词汇。

下面是用C#来实现该目的：

    string fileContent;  
    System.IO.FileStream myStream = new FileStream("c:\\aa.txt", FileMode.Open);  
    System.IO.StreamReader myStreamReader = new StreamReader(myStream);   
    fileContent = myStreamReader.ReadToEnd();  
    myStreamReader.Close();  
    int idx = fileContent.  
    IndexOf("string");   
    if (idx)  
    {  
        return true  
    }  

现在我给他这些代码去做这件事，但是更重要的是 **理解自己正在试着做的是什么**。
在这个例子中我们想做的是：

<ol>
  <li>打开一个文件</li>
  <li>读其中的内容</li>
  <li>关闭文件</li>
  <li>搜索字串</li>
  <li>如果找到了则输出结果</li>
</ol>

用这个方法来解决事情产生了以下结果：

<ol>
  <li>它使语言无关</li>
  <li>使你的精力集中在需要做什么上</li>
  <li>使你的代码更易读和有效知道要做什么将使你的代码更有目的性。</li>
</ol>

现在在 C++、PHP、VB.NET、Ruby on Rails 中编写上述代码是很容易的事情了，因为你理解了 **要做什么而不是怎样去做**。

## Tip 4 创建适合你的注释风格 ##

每一个程序员都讨厌注释，但是 **为了写出更有质量和易读的代码，我们需要注释**。

问题是大多数程序员常被告知如何注释，一些公司希望每一行代码都有注释，
另外一些则想要在每个函数前面有一段注释，还有的规定在不同的代码块前注释。

我并不同意这种强制性的规定，只要 **代码是可用的、易读的和有效的**，
那么程序员应当可以用其个人喜好的格式来注释。
对我来说在每一行都注释将破坏代码的节奏，我更喜欢在函数的前面注释，
罗列我接下来一步步将要做什么，然后在函数中参考注释中所写的步骤进行编程。

这是适合我的模式，这样可以在我编程前帮助我组织设计，也保持了我的节奏，使我 **不会因为需要注释而在编程时中断，也有助于其他人阅读我的代码**。

下面是我怎样注释的例子：

    /* 1. Open File*  
       2. Read file into string*  
       3. Close file*  
       4. Search for key word*  
       5. If fond return true; 
    */  
    string fileContent;  
    //1.  
    System.IO.FileStream myStream = new FileStream("c:\\aa.txt", FileMode.Open);  
    System.IO.StreamReader myStreamReader = new StreamReader(myStream);  
    //2.  
    fileContent = myStreamReader.ReadToEnd();  
    //3.  
    myStreamReader.Close();   
    //4.  
    int idx = fileContent.IndexOf("string");  
    if (idx)  
    {  
        //5.  
        return true;  
    }  

这种注释风格使我和大多数程序员可以容易的阅读它。
那么，找一个适合你的注释风格吧。

## Tip 5 精通one，学习another，关注next ##

有时有程序员发 email 问我他应该学习什么语言，什么是最好的编程语言等等。
**你至少应该精通一门编程语言，可以相当好的去编写代码，然后再去学习掌握另外一门，逐渐的成长**。

以我自己为例，我精通 C#，擅长 PHP，并且已经开始使用 Ruby on Rails 大概有一两个月了。
为什么呢？ **精通一门语言可以使你进步，在进步中写更好的代码，找到完成任务更好的方法等**。

进步也是我作为一个程序员年复一年的工作，却仍没有觉得枯燥的原因。

