---
title: 设计解谜游戏的30堂课（更新至第22课）
mathjax: true
date: 2022-08-23 23:34:00
categories: [游戏设计, 解谜游戏]
tags: [学习笔记, 解谜, 游戏]
---

> 在前几天翻 GDC2021 的演讲时，发现了讲者 Elyot Grant 的[《30 Puzzle Design Lessons》](https://www.youtube.com/watch?v=oCHciE9CYfA) 这一演讲，听完后感觉受益匪浅。一来和我自己的一些观点有不谋而合之处，二来也有一些新的启发。所以就准备结合自己的一些经验写一篇笔记，分享出来。虽然标题是“设计解谜游戏的30堂课”，但其实这里面提到的绝大多数要点也同样适用于对其他 Puzzle（纸笔谜题、Puzzle Hunt、实体谜题……）的设计，希望这篇文章能对你有所帮助！

<!-- more -->

## 第一课：顿悟时刻（Eureka Moments）是谜题的基本组成部分

**顿悟时刻是一种突然的、愉悦的、流畅的、自信的领悟感（A sudden, pleasureful, fluent, confident feeling of understanding）。**就是那种你感觉你好像学到或是发现了什么东西，之后那种恍然大悟的感觉。一个常见的例子是，当玩《传送门》的时候，你会学到“进出传送门时动量守恒”这一特性。当你认识到并且理解到这一点，并用它来解决关卡中的谜题时，那是一种非常强大非常难忘的感觉。

![lesson1_portal](lesson1_portal.jpg)

那么什么是谜题呢？Elyot Grant 将其定义为**任何隐藏着顿悟时刻的东西**。因为谜题其实基本上就是一种通过顿悟时刻来引起玩家的愉悦与快乐的东西，而想做到这一点，它需要把这个顿悟时刻先包装起来，并将其隐藏在表面看上去是一种挑战，其实只是一种指导玩家自己发现顿悟时刻的方式之中。按照这个定义，即使比如在魂类游戏中寻找 Boss 的弱点，甚至比如寻找一个关卡的通关方式，这都有可能是个顿悟时刻。

## 第二课：谜题与幽默是同构的

{% quot Puzzles are isomorphic to humor —— Marcel Danesi %}

顿悟时刻其实有一些很有意思的心理学特征：
- 它们是积极影响的来源
- 它们是高度多巴胺能的，这意味着它们可以正调节记忆的形成
- 它们可以减少去甲肾上腺素的影响，这意味着它们可以减少压力并增强毅力（比如当玩家刚刚感受到一个强烈的顿悟时刻，他们最不可能关掉游戏）

这些心理因素其实是与幽默是相同的。所以你可以把一个好的笑话同样看成一个顿悟时刻，因为这其实也是一种发现，你 get 到了这个笑话的笑点。所以说在游戏设计的时候，你可以把顿悟时刻当做一个能让玩家持续游玩下去的一个工具。

## 第三课：最大限度提高闪光点（Sparkle）

闪光点可以看做是顿悟时刻的强度，这实际上是指一个顿悟时刻有多好、有多深、有多难忘、有多持久或是在一个谜题里的顿悟时刻在总体上有多密集。它其实是一个在填字游戏圈子里相当流行的术语，在填字游戏里，顿悟时刻的闪光点一是来自于谜底本身的生动性，另一个是谜面的巧妙性或是趣味性。

我们来随便找个《New York Times》的填字游戏来看看有哪些有趣的东西：

![lesson3_crossword](lesson3_crossword.png)

首先，这词可不是从词典里随便选的啊，这词有备而来啊！比如里面有些是短语：

- Said I Do
- He's Dead Jim
- Easing Out
- Play Dirty
- ……

这些短语并不罕见，但是当出现在填字游戏中，填出来的那一刻相当令人兴奋。而且里面还有一些小彩蛋，比如“Bride”（1A）就在“Said I do”（6D）的旁边。此外，里面还有一些有趣的名词，比如 Brave Heart（《勇敢的心》）、Boston Pops（波士顿流行管弦乐团）……像这些电影或是人们喜欢的流行文化的一部分的东西，它们往往可以使填字游戏更加活泼。

除了谜底之外，谜面亦是如此，比如：

{% note 53A 谜面：It covers the field<br>谜底：Pressbox（体育场的新闻记者席） color:cyan %}

看到这个谜面的时候，你可能得多想一会，比如这可能是说的草皮或是什么之类的东西（因为谜面直译是它覆盖着一块地）。但其实是媒体记者在“covering the field”，因为他们在报道（cover 也有报道之意）比赛（field 也有球场之意），所以 Pressbox 就是记者们报道比赛的地方（It）。这其实是一个双关，因为你认为的 cover 的意思其实和实际完全不同。这就使得当你最终得到这个答案的时候，很有可能你不是直接解出来，而是通过与之交叉的词意识到答案是 Pressbox，然后你会想“等等，是Pressbox？”，之后你就 get 到了这个双关，意识到“哦我明白了！‘cover’是这个意思！”

我们再举一个例子，“does”这个词在 NYT 的填字游戏中出现了数百次，但在这次是：

{% note 4D 谜面：They might go for a few bucks<br>谜底：Does color:cyan %}

当你读到这个谜面的时候，你可能会认为指的是廉价的物品（它们可能会以几块钱的价格出售），但当你发现谜底时，你会发现这个“does”不是“do+es”（do 的第三人称单数形式），而是“doe+s”（doe 雌鹿），而雌鹿会追随几个雄鹿（buck 又有雄鹿之意）。因此这种 word play 或者双关，给填字游戏带来了游戏性与活力，使其更加令人兴奋。

## 第四课：避免无价值的谜题（Chaff）

还是拿填字游戏举例子。对于填字游戏来说，Chaff 就是那种没人喜欢出现在这里面的“填充物”,在填字游戏领域有个专有名词叫“Crosswordese”：

> Crosswordese 是在填字游戏中经常出现，但在日常中很不常用的一组词。这些词通常很短，有三到五个字母。例如以元音开头和/或结尾的词，由纯辅音组成的缩写，不寻常的字母组合，以及几乎完全由常用字母组成的词。虽然几乎每个填字游戏都或多或少需要几个 crosswordese 才能组合起来，但用多了就会变成一道屑题。（部分内容来自[Wikipedia Crosswordese 词条](https://en.wikipedia.org/wiki/Crosswordese)）

这玩意看上去就很没有闪光点，实际上也是。比如当你看到谜面是“一条意大利的河流”，又是四个字母，那肯定一拍脑袋就直接填进去了，填完之后甚至都不会再去想它了。除此之外，以下也是一些不好的填字游戏谜面：
- “Green Paint”（绿色油漆）：无意义的词语组合
- “Rewaters”（重新加水）：不太能算是一个词
- “Natick”：代指两个难以猜出的词语互相交叉的情况
- “ALDI”：在美国非常受欢迎的一家连锁超市，唯一的问题是，它主要分布在美国东部和洛杉矶附近

在出题的时候要尽可能避免这些 Chaff，因为它们会让玩家感到无聊，而且也会让玩家对谜题产生负面的印象。甚至可能会失去对这一系列谜题的信任（至于后果请看第十四课）。

## 第五课：惊喜是闪光点的源泉

这句话来自谜题大师 Sam Loyd。很巧，我们接下来就要拿 Sam Loyd 的一道国际象棋谜题来举例。在这个谜题中，白棋需要在 3 步内将死黑棋（可以访问[这个网站](https://lichess.org/analysis/fromPosition/4r1b1/1p4B1/pN2pR2/RB2k3/1P2N2p/2p3b1/n2P1p1r/5K1n_w_-_-_0_1)来亲自试一试）：

{% image lesson5_chess1.jpg fancybox:true %}

你可能会尝试一些走法，比如先用 b5 的象吃掉 e8 的车之后再将军。虽然这样最终可以将死黑棋，但没法在 3 步之内做到。而正确的方式是先让 f1 的王走到 e2，这看起来是最不可能将死黑棋的一步棋，因为这可以使黑方 f2 的兵走到 f1 从而升变为后，和旁边的车一起把你双将了：

{% image lesson5_chess2.jpg fancybox:true %}

为了避免被将死第二步必须让在 e2 的王走到 e3 躲开后的范围。此时你只剩下一步，看起来黑棋有很多方式阻止被将死，但在不下十种将死白棋的方法中，每一种方法白棋都有一个对应的回击方式，阻止自己被将死的同时还能反过来将死黑棋，比如下面就是一种情况（从升变下一步开始）：

{% swiper width:max %}
![lesson5_chess3-1.jpg](https://s2.loli.net/2022/08/16/o9PjH7Fqc2D4AxJ.jpg)
![lesson5_chess3-2.jpg](https://s2.loli.net/2022/08/16/g3ET4NtRk7lMzIZ.jpg)
![lesson5_chess3-3.jpg](https://s2.loli.net/2022/08/16/CwxgQhHpjZ8c4Pt.jpg)
{% endswiper %}

这是相当令人震惊的。当 Sam Loyd 最初创作这个谜题时，他曾指出这是可想象的最不可能的一步棋。人们一直在挖掘国际象棋残局的数据库，去找到那些必须做一些疯狂的事情才能获胜的情形，比如需要把两个兵升变成一个马和一个象，此外都无法解开谜题的情况。为什么会一直去找这些会发生看起来最荒唐的事情的残局呢？是因为这种惊喜、这种独特的发现感创造了一个顿悟时刻，并使其非常具有闪光点。就像是说，这完全不可能，但它的的确确发生了。你在展示一些有趣的事情，而接下来就是我们的第六课：

## 第六课：有趣的事实是惊喜的源泉

让刚才的象棋谜题变得有趣的正是让对方升变从而致胜的一招，对吧？这一事实通过谜题的形式分享给你，才让这个谜题如此的富有闪光点。让我们再来看一个国际象棋谜题的例子，在这里白棋需要闷将黑棋（让黑棋的王因为被己方棋子阻挡而无法移动从而被将军，可以访问[这个网站](https://lichess.org/analysis/fromPosition/r6k/p4Qpp/1b6/2q3N1/8/1B6/P4PPP/6K1_w_-_-_0_1)来亲自试一试）：

{% image lesson6_chess1.jpg fancybox:true %}

看起来白棋有麻烦了，但其实有个很简单的办法取胜。先将 f7 的后移到 g8，此时黑棋的王不能吃后，因为有象在保护，但黑棋还是可以用车吃掉它。接下来，只需要把 g5 的马移到 f7，就可以将被黑棋棋子堵住的王给将死。

{% swiper width:max %}
![lesson6_chess2-1.jpg](https://s2.loli.net/2022/08/16/K913BFAHbG7TjOm.jpg)
![lesson6_chess2-2.jpg](https://s2.loli.net/2022/08/16/kjRvb7lcIMOJVUu.jpg)
![lesson6_chess2-3.jpg](https://s2.loli.net/2022/08/16/fBdvwG9T7nFDzEr.jpg)
{% endswiper %}

闷将其实在真正的象棋对局中也经常出现，而“闷将是可能的”这一点本身，就是一个很有趣的事实。而这个谜题的价值就在于它能够向玩家传达这个事实。谜题会让它看上去是一种挑战，但当解出的那一刻玩家就会意识到发生了一件很有趣的事情。

你可能会问闷将为什么很有趣，那接下来就是我随便列的一些理由：

- 这是一个很艰难的局面，白棋几乎就要输了，而在这种办法下可以逆转取胜本身就是一个惊喜
- 在终局的时候黑方其实离胜利只有一步之遥
- 解法中涉及了弃后，这是一个很有趣的概念
- 保护国王的棋子反而成了阻碍国王的棋子
- 只用一匹马就能把对面将死
- ……

这些都是有趣的事实，但从根本上来说，它们都是意料之外的事情。正是这些意料之外的事实才让谜题如此的令人激动，如此的富有闪光点与价值。

这其实可以从神经科学的角度解释，因为更出人意料的事情具有更高的多巴胺能。大家应该都知道斯金纳箱，但接下来想说的是一个十年前的变体实验：

![](./lesson6_box1.jpg)

盒子里有两个杠杆，一个会在 30% 的时间内提供食物，一个会在 70% 的时间内提供食物。大鼠经过数次尝试后明确了这一对应关系，并开始持续按那个时间更长的杠杆。此时研究人员将两个杠杆的概率对调，而当大鼠意识到时间对调的时候，它们的脑部的多巴胺含量出现了一个峰值。随后研究人员在另一组大鼠中重复了这一实验，但将时间从 30%:70% 变成了 10%:90%。实验表明当大鼠意识到时间对调时，这组大鼠的多巴胺峰值比另一组要更高。

这其实显示了多巴胺峰值与惊喜程度的一些关系，基本上来说惊喜越大，峰值也越大。请记住，多巴胺并不只是关于奖励或者快乐，它与记忆、习惯、激励和毅力有关。多巴胺让你寻求更多相同的东西，并记住你之前的发现。

人类的大脑其实已经进化到觉得新奇和意想不到的事物是有趣的，大脑会强烈地记住它们，并在发现这些知识后寻求更多的知识。因此，作为谜题设计者，我们真正要做的是利用人类这种天然的对谜题的本能，来在有趣和新奇的发现中寻找乐趣。不管是第一次生火，还是制作石器，还是“进出传送门动量守恒”。

## 第七课：尤里卡不是 Fiero（自豪）

一些初次设计谜题的设计师一般可能会用以下的方法设计一个谜题：
- 用游戏中已有的元素创造一个谜题
- 让它有一定的挑战性但并不那么难
- 玩家最后会成功解出，并觉得自己很“聪明”

这方法本质上没有什么问题，但这里其实有一个比较容易混淆的点，那就是顿悟时刻并不是自豪。

Fiero其实是个意大利语词汇，意为“The Emotion of overcoming a tough challenge”（克服艰难挑战的情绪）。很多游戏设计师用它来代指像是当你在动作游戏里打败了一个很艰难的 boss，或是刚刚创下了一个新纪录时的情绪。Elyot Grant 认为 Fiero 和尤里卡是两种完全垂直的快乐传递方式，甚至你可以把它放在一个坐标系下：

{% image lesson7_axis.jpg fancybox:true %}

比如《黑魂》就是个非常富有 Fiero 的游戏，还有一些难的凶残的解谜游戏，有些时候玩家获得的快乐主要也只是解决了非常困难的问题。但有一些游戏像《传送门》，它的机制并不一定很困难，比如“进出传送门动量守恒”。玩家并不一定是因为做了一件很困难的事情或是克服了困难的挑战而感到有所收获，快乐在多数情况下是通过有所发现来得到的。

所以说，上面提到的“创造一个谜题，让它有挑战性，并希望玩家在解决它之后觉得自己很聪明”这种方法，我更愿意称其为以 Fiero 为核心驱动的设计方法。这一方法以重视玩家克服挑战为动机，而不是让玩家认知更为深层、更为有趣的东西，让玩家获得包含顿悟时刻和闪光点的有趣的发现。

虽然尤里卡和 Fiero 存在于不同的地方，但有一点需要注意的是，玩家甚至不一定需要成为解开谜题的人，就能体验到顿悟时刻。你可以云一个题，让别人告诉你解法，你仍然可以云到顿悟时刻的全部价值。而 Fiero 则是你亲自面对一个挑战，在没人跟你剧透的情况下，自己解决了它。那些非常讨厌剧透的人，他们关心的就是保护 Fiero，也就是保护玩家自己亲自解决问题的快乐。这样就能使玩家不仅能体验到“哦！这太有趣了！”的顿悟时刻之外，还带来了“哦！我做到了！”的 Fiero，从而大大提升玩家的体验。

那么以 Fiero 为核心驱动的设计方法真的很差吗？其实它本质上并不差，但任何挑战都能带来 Fiero，比如动作游戏，而只有谜题可以给予尤里卡。很多游戏设计师在游戏中使用谜题时并不够深刻，因为它们只是把谜题当做：
- 增加游戏时长
- 控制游戏节奏
- 插入一个障碍，从而让之后的收获感觉更好

的工具。

其实这也不是不行，毕竟是你自己的游戏想咋搞咋搞嘛。但是，顿悟时刻是谜题的灵魂，是谜题特有的超能力。所以如果你的谜题中并没有顿悟时刻，那么作为一个希望创作受玩家喜欢的内容的创作者，你就辜负了谜题作为一种媒介的美学潜力。如果谜题真的是游戏中极为突出、重要的部分的话，那么你应当同样重视谜题设计的美学审视，更不用说 Puzzle Hunt 这类本身就由谜题构成的解密活动了。如果你仅仅是为了填补空白而去设计谜题，那么你可能并没有做到。吹哥（Jonathan Blow）的一句话就很好的表达了这一点：

{% quot It's not a good idea to just be trying to make the player feel smart. You want to communicate to them an actual substance of something.（仅仅让玩家觉得自己很聪明并不是一个好主意，你要向他们传递一种实质性的内容）—— Jonathan Blow %}

**制作好的谜题的美学不只是制作一个让玩家感到满足的挑战，而是让玩家在谜题中发现更深层次的东西，然后通过谜题的形式向他们传达一个事实。**谜题其实在更多情况下代表了一个深刻而有趣的数学或是逻辑思想，玩家可以通过尝试解决这一谜题来认知学习。

让我们再来看看这两个谜题：

{% image lesson7_compare.jpg fancybox:true %}

左侧是由 John Conway 创作的谜题“Shipper's Dilemma”。在这个谜题里你需要把：

- 6 个 2\*4\*1 的方块
- 6 个 2\*3\*4 的方块
- 5 个 1\*1\*1 的方块

装进一个 5\*5\*5 大小的盒子中。这是一个深刻而有趣的谜题，因为某些细节上的对称性，这个谜题只有唯一解。而为了达成它，你需要用一个非常独特的方式来填充这个立方体的内部空间。你需要深入思考如何进行填充，通过各种推理来确定这个唯一解；而如果只是随便乱塞的话，是无法解决这个问题的。不过这并不一定有多难，只是说玩家需要动动自己的小脑瓜，而不是无脑暴力乱塞。但这个谜题其实包含了很多有趣的事实，比如玩家可以了解到为什么这个解是唯一的。而右边的这个谜题是，你有 25 个 Z 形的骨牌，之后用它填满这个盒子。至于解法，有人写了个暴力，发现它有四个解。其实对于玩家而言，这更像是一个打发时间的玩具。你只需要玩一玩这些骨牌，随便把它们放一放最后就能把它们放进去。但你不会获得任何关于为什么做到，以及怎样才能做到的知识。

虽然如此，但是：

## 第八课：不同玩家所寻求的解谜体验不尽相同

举个例子，这是我在淘宝上搜索“数独题集”的结果：

{% image lesson8_taobao.jpg fancybox:true %}

有些人会把这东西称之为计算机生成的垃圾，但有另一些人会花几百小时在这上面，而且他们就喜欢这样。这是因为他们在寻求某种特定的解谜体验。

> 叠甲时间：我确实知道除了传统的九宫数独之外，有很多变体的数独规则，而且相当有趣。传统的九宫数独也可以通过非常精心的构造来带给玩家优秀的体验，而这是计算机生成无法比拟的。总而言之在本节课内还是在讨论这种大概率是由计算机批量生成的数独题集，各位懂就行。嗯嗯。

有些解谜者可能就是想要一些低剂量、低难度的谜题，重复他们已经体验过的顿悟时刻，他们只是想被唤起这种感觉，在题海中漫游，并感受到取得进展和解决并完成书中所有谜题的成就感。而不是一些高剂量的、跌宕起伏的、可能更难一些或者更有挑战的有趣的顿悟时刻。

但有些谜题又具有相反的美感，比如九连环，它其实需要 341 步解决。而解决它的过程实际上是一个非常深刻的需要仔细思考的过程。在这个过程中你必须记住目前已经走到了第几步，因为解九连环的过程本质是个递归的过程。而这其实和顿悟时刻就不是很相关了，虽然当玩家发现这个解的时候确实是一个非常深刻的顿悟时刻，但将理论解实践的过程更像是一个沉思的、缓慢的、有条不紊进行的过程。此外还有一些规模相当庞大的谜题，虽然它们并不一定都具有某种独特、有趣的结构，但就是有人喜欢这样，因为他们只是想要这种缓慢沉思式的解谜体验，从而获得最后完成这个大项目的成就感。

所以人们解谜的原因各不相同，我们尽可能的不去对其进行评判。但作为一个谜题设计师，你需要理解你所创造的谜题的审美目标以及受众群体。

## 第九课：顿悟时刻是可以分享的

再举个例子，这是[@GM的秘密基地](https://space.bilibili.com/73415355)，应该是 B 站最受欢迎的解谜 Up 主之一：

{% image lesson9_GM.jpg fancybox:true %}

他经常解决一些非常有趣的实体 Puzzle，比如一些锁或是花很多步才能打开的机关，这些通常被称为顺序发现谜题（Sequential Discovery Puzzles）。他自己在主页上设置的代表作是[《117步建模、耗时1个月，我成为了国内首个拔出【圣剑】的男人！》](https://www.bilibili.com/video/BV1VC4y187iZ)，在这个视频里，GM 通过对圣剑内部结构的推理与建模尝试，一步步拔开了圣剑。这整个过程观看起来其实相当奇妙，同时这个视频也在 B 站获得了高达 500w+ 的播放量。

从中我们可以认识到的是，顿悟时刻是可以被关在完全体验到的，从解密中学到和发现东西的兴奋是可以被观众看到的。有些人可能会把这看做是一种剧透，但从认知到这一事实这方面来说是完全不会被剧透的，不论你是否是亲自发现的，那个时刻都是同样的。而且这谜题往往是观众知道他们自己可能永远不会亲自买来自己解的谜题，对吧？世界上的谜题那么多，你不可能真正的全部做完。因此，看别人解谜可以是一种获取顿悟时刻的方式，而不是一定得忍受几个小时来亲自解题。

## 第十课：创造很多顿悟时刻

这其实和顺序发现谜题也有一定的联系。下面是由 Wil Strijbos 设计的 The lotus box：

{% image lesson10_lotusbox.jpg fancybox:true %}

这个小小的谜题中包含了很多技巧，比如这里面有磁铁，有隐藏的隔间，有旋转机关……这个小盒子里有很多这样的小东西，我云了一下[GM 解这个谜题的视频](https://www.bilibili.com/video/BV1of4y1Y7Ze)，里面起码有八个独立的顿悟时刻。密室逃脱也是如此，一般的密室逃脱往往在一个小时内就会出现 10 至 15 个谜题。它能带给玩家非常紧张的体验，不仅仅是因为时间上的压力，也是因为本身谜题很丰富。它们通常具有极强的多巴胺能，令人难忘，所以它们会让玩家比较上头。作为一个游戏设计师，尤其是当你为一个以解谜为主的游戏进行关卡设计时，不妨带着整个团队去玩上几次，看看它们是如何让玩家在短时间内体验到丰富的顿悟时刻的。

那怎么才能在同一道谜题里创造更多的顿悟时刻呢？下面两堂课会给予你一点帮助：

## 第十一课：创造一个富有收获感的谜底

说到这个，一个很好的例子是 Nonograms：

{% image lesson11_nonograms-1.jpg fancybox:true %}

Nonograms 的规则非常的简单。每一行/列的数字提示着这一行/列有多少个相连的格子需要涂黑，若有多个数字说明各组涂黑的格子之间至少存在一个空格子。但是因为这个规则导致它的谜底是一个图案，所以设计得当的话会变得非常有趣，比如上面这个 Nonograms，它的谜底就是：

{% image lesson11_nonograms-2.jpg fancybox:true %}

是条船诶！

正是因为这个特点，所以玩家在解题的过程中总会产生比如“诶谜底的图案会是什么呢？”这样的问题，它会一直吸引着玩家的好奇心，直到把它解开。

另一个很好的例子是 Spiral Galaxies（螺旋星系），它的规则是将图案沿线分隔成多个区域，使得每个区域正好包含一个点的同时，该点是这一区域的中心对称点：

{% image lesson11_spiral-galaxies-1.jpg fancybox:true %}

这个谜题也很有趣，拥有很多迷人的逻辑。但是，能不能在这个规则的基础上添加一小点元素，在保留其逻辑的前提下，让解出来的谜底变得更有趣呢？各位可以自己尝试一下，如果有什么好的想法也请一定在评论区里分享给大家！（如果实在没什么想法，可以去看看 Tentai Show，这个 Spiral Galaxies 的变体是个不错的例子）

除了上面举的这类谜题之外，其实 Puzzle Hunt 的出题模式也是一个很好的例子。一般来说，在出 Puzzle Hunt 的时候，有些题最后会有一个“提取步骤”；换而言之，解出来这道题不是终点，把解出来的谜底转化成一个有意义的单词或者短语，这才是终点。比如这个 Nonograms：

{% image lesson11_puzzlehunt-1.jpg fancybox:true %}

你解了一会发现，它的谜底是：

{% image lesson11_puzzlehunt-2.jpg fancybox:true %}

如果限制答案的形式一定是一个英文单词或者短语的话，我想，你首先想到的答案应该是 CLUBS（梅花）。这其实就是一个对谜底的提取过程。

> 碎碎念：上面这个 Nonogram 是我用在线生成器随便生成的，没有经过很精心的构造，所以其实解题过程不会非常有趣，各位在使用这一原则的时候请务必在保证谜题本身是含有 Eureka Moment 的前提下，用它来锦上添花哦。

这种设计方式其实有几个方面的好处：
- 它能提供一个额外的顿悟时刻，尤其是当玩家知道会有最后这一步，而且期待这一时刻的到来的情况下，它会更加令人兴奋。
- 它利用了“峰终定律”。众所周知人们倾向于记住一段体验中最突出的部分以及结尾的部分。一个优秀的“提取步骤”可以大大提升玩家在谜题结尾的体验，从而使玩家对整个谜题的印象更加深刻。
- 功利一点说的话，它可以为 Meta Puzzle 创造前置条件。比如刚才的谜底 CLUBS 可以被当成解开另一个谜题（称之为 Meta Puzzle）的线索。而 Meta Puzzle 可以当做一个阶段性的门槛，从而控制玩家解谜的节奏。

## 第十二课：藏入一些秘密和惊喜

其实这堂课的核心思想在前面曾经提到过，在这里我们会更加深入的讨论一下。

先来看看这个 Crossword：

{% image lesson12_crossword-1.png fancybox:true %}

发现了吗？在这道题里 STALACTITE（钟乳石） 和 STALAGMITE（石笋）被藏在中心对称的位置，而且 STALACTITE 按照从上到下排列（钟乳石向下悬垂），STALAGMITE 按照从下到上排列（石笋向上生长）。

这种东西在填字游戏圈里被称为“Nina”，其实本质就是填字游戏中的一些小彩蛋。它是一个很有趣的设计，因为它让玩家在解谜的过程中发现了一些有趣的现象。但有的朋友可能从这里面发现了一个问题：它所对应的顿悟时刻是可以错过的，那就代表着这一顿悟时刻是没法被所有玩家体验到的。很有可能你解半天题都没有发现这个小彩蛋，那么它还具有意义吗？

其实，在某种程度上这一特性让它更有价值。如果你在设计谜题的时候经常会去埋个小彩蛋，那么当玩家在做你的 Puzzle 时，总会觉得你的 Puzzle 中藏着什么有趣的东西。这个时候就要再次请出我们的第五，第六课：越是给人带来惊喜的东西，越具有更高的多巴胺能，就能带来越多的闪光点。所以，彩蛋是可以错过的这一点，其实会让玩家在解开它的时候能获得更强烈的兴奋感。

同时在电子游戏设计领域，这个特点其实还带来了另一个好处：它提供了一个让玩家重玩这个游戏的机会。知名游戏设计博主 Mental Checkpoint 把它称之为再语境化（Recontextualization），可以看看他的[这期视频](https://www.youtube.com/watch?v=txTPzc8QDaw)（[B站官方翻译](https://www.bilibili.com/video/BV1jY4y1b7yC)），里面有更加详细的解释。

## 第十三课：困惑（Aporia）是惊喜的前兆

来看看这个例子（来自游戏[《Pipe Push Paradise》](https://store.steampowered.com/app/721390/Pipe_Push_Paradise/)：

{% image lesson13_ppp-1.jpg fancybox:true %}

在这个游戏中，场地上会有一个出水口，一个入水口和一些管子。你需要像推箱子一样用管子（管子可以翻转和旋转）把出水口和入水口连接起来。对于上面这一关，你应该能很轻松的想到右图的解法。但当你在游戏里实际去这么做的时候，你会发现一个问题：你走不出来了。

是的，除了要把出水口和入水口连接起来，你还要走出这个场地。如果你一直按照这种思路去构造的话，你会发现没法做到构造成这个形状的同时，人还站在场地的底部。

身为一个解谜玩家，你一定会遇到过像这个例子一样的情况：你在解谜的过程中，突然发现自己完完全全的卡住了，不知道该怎么做了。你认为这个 Puzzle 都被设计出来了，那么应该是能解出来的，但此时你总相信这是解不出来的。你会想：

- 我需要这么做，但 Puzzle 的设计让我没法完成这一点！ 
- 这里是不是有什么诀窍？
- 我知道我不知道一些东西（Known Unknown）。

这种觉得 Puzzle 不可能解出，但又觉得这个 Puzzle 肯定存在一种解法的感觉，会让玩家觉得一个精妙的顿悟时刻即将到来。这种神秘感和期待非常富有激励性，而这其实比实际得到这个顿悟时刻拥有更高的多巴胺能。而且当他们相信这一点的时候，他们不大可能放弃，而且很有可能记住这个时刻。

让我们来揭晓一下上面这个例子的解法吧：

{% image lesson13_ppp-2.jpg fancybox:true %}

你会发现，旋转这一操作其实可以让管道在三维空间中突出来（右二）。这其实是一个三维的解谜游戏，旋转是可以让管道立起来的。当你发现这一点之后，你就可以找到真正的解法，那就是搭一个三维的拱门（右一）。

这是一个非常令人难忘的解法，但在你发现这个解法之前，你还是会觉得这个 Puzzle 不可能解出来，以至于你会暂时离开它去试试其它的关卡。而当你发现其它关卡都有解法的时候，你很有可能会回来继续尝试这个 Puzzle，直到解出来，体验到了一个绝佳的顿悟时刻。

但是这就有了一个问题，怎么才能让玩家相信这个题是能解出来的呢？这就是我们的第十四课：

## 第十四课：建立与玩家之间的联系

举个例子。比如你跑到贴吧啊或者其它线上社区随便找了个看起来很有趣的 Puzzle，但当你尝试了一会之后感觉这个 Puzzle 看起来解不出来。甚至你能说服自己，这就是没有解，设计师设计的有问题。有那么一种可能，我是说可能，有一个非常惊艳的顿悟时刻埋藏表面之下，就像前一课的例子一样。但也有可能，这个 Puzzle 少了条限制条件，有些已知条件忘记传了，也有可能发帖的人搞错了，更有甚者这个 Puzzle 的无解是设计者有意为之（比如七桥问题，发现它为什么无解是它的有趣之处）。

如果这个 Puzzle 来自于一个你非常信任的地方，又或是这个帖子有很多人点赞的话，那很有可能这是一个值得一试的 Puzzle。但如果这个 Puzzle 仅仅来自一个你不认识的人在随便一个网站上发了个帖子的话，那你相信这个谜题是真正有趣的可能性就十分有限了。

对于电子游戏来说，尤其是对于以“回溯”（Backtracking）和“能力锁”（Ability Lock）为核心玩法的银河恶魔城类游戏和动作冒险游戏，这种效应会更加明显。对于一些老牌大厂的作品，玩家一般会选择相信这个谜题是可以在后期回来解决的。但对于一些独立游戏来说，有些时候它里面的关卡会因为一些 Bug 而没法解决。问题是，只要玩家遇到一次这种情况，他们就会对整个游戏失去信任，这让他们不再像上一节课提到的，认为自己处在激动人心的时刻的边缘，只需要再往前推进一下就好了。取而代之的是一种怀疑的态度，失去了前进的动力。

对于这个问题，开发者们也探索了一些解决方案。比如在类银河恶魔城类游戏[《Supraland》](https://store.steampowered.com/app/813630/Supraland/)中，当你已经获取到解决一个谜题的所有信息时，NPC 会提醒你“你已经有了解决这个谜题所需要的一切东西，去解吧”（"You have everything you need to solve this puzzle, go for it!"）。像上面提到的，对于这类游戏玩家会经常碰到暂时无法解决的谜题。但这也使得当玩家面对那些真正已经拿到所有解决信息的关键性谜题时，也有可能选择暂时放下去做其他的事情。这个机制就使得玩家能够有信心去尝试解开那些虽然比较难，但是在现有的信息下可以解决的谜题。目前这款游戏在 Steam 上拥有近 96% 的好评率，足以说明其深受玩家的喜爱。虽然也有一些人认为这一机制是在打破第四面墙，干扰了玩家对于角色的代入感。但对于这类游戏而言，如何保持玩家对谜题的信任的同时还能让玩家有动力去探索，去做新的事情是更为重要的，因为这直接决定了游戏为玩家提供的体验。所以这其实是一个相当有趣的设计。

在填字游戏圈里，有一个和这节课讨论的话题相关的术语，叫“公平交易”（Square dealing）。这是一系列设计者为了让玩家能顺利玩下去所遵守的惯例。其实这种惯例性的原则存在于很多不同类型的 Puzzle 中。比如：

- Puzzle Hunt：没有无提示的 Anagrams（字母构成相同，但顺序不同）。因为玩家在做 Puzzle Hunt 的时候，一般情况下不会知道某道题的规则，而玩家所需要的就是找出这道题的规则并将其解开。如果没有这条原则的限制，那玩家有可能把这道题的每个单词都扔进 Anagrams Solver 跑一遍，结果发现啥用没有，这显然是非常差劲的解谜体验。
- 密室逃脱：一把钥匙开一把锁。比如当你得到一个密码时，你只需要在一个锁上输入它，否则这也会让人很不爽。

一般情况下，这些惯例是否直接告诉玩家是个随缘的事情。如果你是个 Puzzle Hunt 老手，那你很有可能无意识的意识到没有无提示的 Anagrams 这一条惯例，这样你就不会将时间浪费在一些无用的工作上。但新手可能不明白这一点，如果没有人直接告诉他们，否则他们没法知道，这样他们就不得不下一些无用功。对于规则千变万化的电子游戏而言，将一些惯例性的原则传达给玩家也是非常重要的。这有助于玩家增加对游戏的信任。

与之相反的是，少玩一些“小聪明”，包括但不限于：
- 让玩家在没有提示的情况下进行大量搜索，比如：
  - 在黑暗中搜索
  - Wall-pressing（对着每个墙交互）
  - 找到隐形平台
- 突然提升不确定性（你已经学会 1+1 了，来试试接下来的题目吧.jpg）
- 突然要求玩家使用一次性的新技巧或者方法
- 无规律不断变化的规则（难以让玩家形成对你的游戏的系统性理解）

但有些解谜的乐趣就是在于玩家压根不知道解谜的目标或者规则，这就让我们来到了接下来的一课：

## 第十五课：当心不透明性

如果一个谜题存在任何没有向解密者告知和解释的必要元素，那我们就称其具有了“不透明性”。比如：
- 隐藏的谜题目标
- 隐藏的谜题规则
- 隐藏的交互方式及其对应的结果
- 解密者无法感知谜题目前的状态

不透明性是一种非常强大的谜题设计手段，比如下面这个解谜游戏[《Understand 顿悟》](https://store.steampowered.com/app/1299400/Understand/)（由国人设计师 Artless Games 设计）

{% image lesson15_understand.jpg fancybox:true %}

在这个游戏中，你需要在棋盘中画出从某个格子开始，经过某些格子，最终到达某个格子的线。而这条线需要遵循特定的规则（界面下方的圆形个数代表了本关的规则个数，同一大关内的每个小关规则是相同的）。问题在于你不知道这个大关的规则是什么，所以你只能通过不断尝试去发现规则，并将你所发现的规则在其他关卡中通过实践来验证。

而《Understand》的设计者利用谜题的不透明性，给玩家带来了独特的解谜体验。比如你发现，你前几小关摸索出来的规则，在后面的小关中不能用了，而当你试着和你摸索的规则反着来的时候，发现又顺利通关了（什么叫顶级引导啊.jpg）。

向谜题中加入不透明性可以带来一定的乐趣，但是：
- 它很容易就会让玩家卡住，而且这种卡住往往是在他们对下一步要干什么毫无头绪的时候，其实对玩家而言并不愉快
- 对于线性流程游戏来说也不太好，如果他们卡住了，这就意味着他们在解出来前没法推进一丝一毫的进度
- 它们可能会让人认为整个游戏就是个大号的找规律，而有些玩家其实并不喜欢这样的游戏体验
- 揭露不透明性是一次性的，换而言之你不可能用一个不透明性设计一百个谜题，所以为了保证游玩体验，对于谜题量比较大的游戏，你需要创造性的想出多种隐藏元素，而这无疑大大加剧了设计难度
- 这很容易被剧透，虽然前面说过尤里卡不是 Fiero，但这类游戏的乐趣就是在于探索隐藏元素的过程，所以一旦被剧透，游戏体验将会直线下滑
- 相应的，以这种设计模式设计的游戏也不适合直播，观众如果发了个弹幕或者 SC 告诉主播解法，主播的游戏体验没了；而对于直播来说主播又不得不去向观众解释自己在干什么，如果观众云完想自己玩玩的话，观众的游戏体验也没了

但怎么才能发挥出“不透明性”的最大优势，扬长避短呢？这就来到了我们的第十六课：

## 第十六课：让谜题易于尝试

前面说过，向谜题中加入“不透明性”的乐趣就在于玩家探索这些隐藏要素的过程。而避免负面体验的一个非常简单的方式就是——让谜题易于尝试，从而降低玩家试错的成本。

之前我在 TPPG2022 设计了这么一道题（因为服务器已经到期了，我这个人又很懒没留截图，所以只能口述了）：当玩家打开题目页面时，会发现这道题没有任何的题目标题，题目描述以及其他的任何和题目相关的信息，只剩下提交答案的文本框。如果玩家尝试提交，就会发现在提交后的提交详情中，原本只是用来显示服务器运行状态的附加信息里出现了一段提示信息 "`Expected integer, but char found.`"，提示应该输入数字。如果提交一个数字就会发现 "`Sequence contains less than 6 numbers.`"，说明应该输入一个不少于六项的数列……在玩家和题目不断的交互中，他们得以一步步揭开题目的真实规则。而又因为“提交自己的答案”是一个非常简单的和题目本身交互的方式，玩家试错的成本并不会很高。这样，谜题中的“不透明”就可以在玩家的一步步探索下变得“透明”，从而塑造出一个有趣的顿悟时刻。

同时，与之相关的另一个经验法则是，不要让试错过程的挫败感太强，一个很好的反面教材是一些棋牌类游戏（说的就是你《炉石传说》）里面的内置谜题，玩家需要非常细致的考虑与试验各个卡牌的组合以及出牌顺序，但是每次尝试都需要等待一堆卡牌的动画效果，还要听完一段段台词，甚至自己输了还要忍受对方的嘲讽。这样的交互体验就会变得比较糟糕，玩家自己也会感到烦躁。

所以，如果你让学习谜题的基本机制变得困难或令人沮丧，或者为玩家故意设置障碍，那么玩家可能永远无法领悟到谜题的核心，就很有可能走向放弃，从而不会被即将到来的顿悟时刻所吸引而继续玩下去。

一种避免不必要的试错的设计方式是，直接向玩家展示他们必须要发现的东西，比如在《传送门》中，按钮和它触发的机关之间一定存在着一条灯带。这样玩家就没有必要亲自站在上面/放个方块在上面看看到底哪个按钮对应着哪个机关。

{% image lesson16_portal.jpg fancybox:true %}

## 第十七课：让玩家知道自己在做对的事

知道自己在做有助于解开谜题的事这一点会给玩家带来极大的动力。而这其实在很多类型的 Puzzle 中都得到了应用：

- 在 Crossword 里，由于每一个单词必定有至少一个字母是和另一个交叉的单词共用的,当玩家填出两个符合谜面的单词而且发现他们交叉处的字母相同时，玩家就会意识到“这两个词我填对了”，从而带给他们积极的正反馈，让他们知道自己在往正确的方向前进
- 在一些 Puzzle Hunt 中（比如 Microsoft Puzzle Hunt），当玩家提交了某些题的中间结果或者某些有效信息时，系统会提示 "Keep Going"；这样玩家就知道了自己其实找到的不是答案，而是另一条新的线索，玩家就可以去据此尝试一些新的东西；这也能带给玩家新的激励，因为这样玩家就能知道自己正在做对的事

有些设计师可能听说过“红鲱鱼”这个名词，它代指的是转移注意力的事物。但其实在谜题设计中“红鲱鱼”也分很多种，比如：
- 装饰：一些本身和谜题无关的装饰物，却又足够吸引玩家的注意力，从而让玩家认为它们是谜题的一部分。有个很好笑的例子是，之前和一群朋友出去玩密室，有一个房间里有一个带密码锁的保险箱，周围摆着很多不同颜色的蜡烛。于是我们第一反应是数数每种颜色蜡烛的数量之后输进密码锁里，但其实蜡烛单纯是为了营造氛围的装饰品，真正的解谜过程和蜡烛没有半毛钱关系。这种情况下，装饰物就是一个不可取的“红鲱鱼”，因为它会让玩家在错误的方向上花费时间，从而没法完成真正的任务
- 干扰项：一些解密过程中不需要的能力或者事物。比如让你用 10 个硬币凑出 35 美分（目前流通的美元硬币面值有 1 美分、5 美分、10 美分、25 美分、50 美分和 1 美元），你显然不需要 25 美分的硬币，这就是一个干扰项。玩家不需要它，但总感觉它应该放在那里。而这其实对玩家的解谜进程不会产生太大的影响
- 假谜题和幽灵谜题：其实这个概念在密室逃脱中出现的比较多一些。有些时候密室逃脱的店家会把同一个房间拆掉旧主题换成新主题，但是在旧主题的拆除过程中可能有些装修痕迹没法抹去，换成新主题之后玩家就很有可能看到这些曾经是谜题的一部分的东西，但它们其实已经和解谜没有关联了。而密室逃脱的时间往往十分紧迫，当玩家在这上面浪费时间的时候，他们会非常愤怒。这也是一种不可取的“红鲱鱼”。
- 混淆和误导：有的时候它们可能是一种“红鲱鱼”，但有很多时候他们其实是在向玩家展示什么不是解法，而像上面提到的《Understand》，误导本身就是游戏的魅力之一。所以混淆和误导可以作为一个非常有效的设计手段存在，不要把它们都当做不好的东西移除掉
- Rabbit Trail：它代指的是错误的，但又没法轻易证明不可行的谜题解法。比如下面这个由芬兰数学家 Arto Inkala 构造的“世界最难数独”就是有唯一解，但你在开局的时候显然毫无头绪，于是只能随便朝着一个方向不断努力，随着越来越深入，你可能感觉有进展也可能没有。过了很长一段时间，你还在尝试这个方向，还没有解出来，或许这确实不可能，但你目前还没发现一个明显的证据证明它不可能。所以你浪费了很长一段时间去尝试了一些不是预期的或者正确的解法

{% image lesson17_sudoku.jpg fancybox:true width:600px %}

> 来自我的一位数独大神朋友的补充：其实正常难度题目中也有些相似的东西。比如某个被精心设计的题目中，第一步是固定的（不考虑极高级的专业领域解法，不考虑试数）且用“唯余”解法（天鹏注：指某个格子所处的列，行及宫中已经出现了八种不同的数字，根据数独规则易知它一定只能填没出现的那个数字），如果解题者用“排除”思想（解题最优先考虑的一套解法体系），很有可能会陷入苦战，只能得到零星的“哪个空不能填某个数”的小结论而无法填出确定的数，同时玩家也没法证明“这题开头不能用排除法”。

在上面这些“红鲱鱼”里，尤其是对于新手而言，Rabbit Trail 无疑是最令人沮丧的一种。因为新手并不善于猜测什么是可行的，或者猜测谜题的预期解法是什么。他们可能会花很长的时间，然后只有在他们真正放弃了或者被打败了才会改变自己的方法。为了应对这种问题，不妨多做做测试。如果你在测试的时候，注意到玩家花费了很长时间去尝试一个根本行不通的办法，这很有可能就是一个 Rabbit Trail。你可以试着通过设计来尽可能阻止他们尝试这种做法，或者当他们这么尝试做一小段时间后就能得到“哦，这行不通”的反馈。

简而言之，在设计的时候一定要做到“让相关性与显著性相匹配”。换句话说，与实际解法相关的东西——无论是提供线索的物品，还是需要玩家交互的机关，又或是玩家需要获取的道具——一定要以一种突出的方式让玩家注意到。因为在玩家的眼里：

{% quot 重要的东西应该是突出的，突出的东西应该是重要的 %}

身为设计师和玩家，你一定不会希望重要的东西看起来毫不起眼，或者至少比关卡中的其他所有东西看起来都更不明显。你也不会希望有很突出的东西，看起来与谜题相关，结果却不是。请记住，玩家不一定都是解谜大师，他们可能没有约定俗成的惯例来让他们判断什么是线索。对于一些传统的解谜类型，比如密室逃脱或是 Puzzle Hunt，玩家如果玩的够多可能会形成判断一个东西是否与谜题相关的直觉；但对于电子游戏来说，每一个游戏的设计与规则都是不同的，这使得对于一个新游戏，他们很难判断什么是线索，或是很难知道设计师希望他们如何去理解信息。所以要尽可能的使相关性和显著性相匹配。

## 第十八课：追求系统和规则的深度

如果你买过那种现在比较火的的电子解密玩具（比如下面这个智能积木），你会发现他们的一个显著特点是只需要用这一套硬件，再加上内置的题库系统就可以体验到多种不同的谜题。对于购买这些玩具的人来说，这是一种非常好的体验，因为买家其实相当于买到了一整个系统。这也可以使生产成本大大降低，因为制造商只需要制作一次部件，然后设计一些谜题，而不是多制造一堆部件。

{% image lesson18_smartblock.jpg fancybox:true %}

其实从设计角度讲，构造一个系统也有很多好处:
- 它可以让玩家形成对这个系统的概念模型。这意味着玩家会对系统中的各个部件如何工作，如何相互影响形成一套直觉性的理解，从而让玩家能更加轻松的面对难度更高的谜题的挑战
- 同时玩家在解密中获取的知识是可以复用的，对于设计者而言可以在先前的谜题基础上，使用越来越复杂的理论和模型来建立新的谜题。这也保证了谜题的深度以及设计层面的一致性
- 而深度又保证了它能涌现出来的惊喜会比那些一次性的谜题更加巨大，同样也能带来更好的顿悟时刻
- 当然也有前面提到的，这能降低谜题创作的成本（不仅有规则设计上的时间成本，也包括了将谜题制作的美术等等成本）

但我们怎么评价一个系统的深度呢？一个很简单的方式是，试试在这个系统之下，在开始使用重复的技巧之前，能够创造出多少种不同的谜题。不妨思考一下下面这个问题：对于《传送门》来说，假设只使用传送枪的话，有多少技巧可供玩家在解谜的时候使用呢？

我自己简单列了一下：

- 直接传送
- 往天花板上打传送门
- 抛接（这是官方开发者模式下的说法，其实就是利用进出传送门动量守恒来实现远距离飞行）
- 固定一个传送门，向其他方向打另一个传送门从而能让你回到之前的位置
  
实际可能比我列的多一些，但大概率不会超过十个。这也是为什么《传送门》会引入其他的元素，比如方块、按钮、光桥、凝胶……这些新的元素扩展了这个系统的深度，从而能够创造出更多的谜题，带给玩家更多的顿悟时刻。

> 顺带一提，一个非常经典的，规则很简单但是极具深度的谜题是围棋。我自己因为对围棋不甚了解所以在此按下不表，什么时候找到其他大佬会把这里详细再写一写。

此外另一种增强系统深度的方式是做变式与混合。混合是指将自身的谜题和其他类型的谜题进行融合，这个就不做过多叙述。做变式这一点最近发售的[《14 Minesweeper Variants》](https://store.steampowered.com/app/1865060/14/)（由国人设计师 Artless Games 和 
Alith Games 制作）是个挺不错的例子。设计师在原版的扫雷基础上设计了 14 种变式，而每种变式都具有自己独特的推理方式。更为难能可贵的是所有的谜题虽然由程序生成，但丝毫不存在任何的随机性，每一个谜题都能完完全全通过逻辑推理的方式解出，不存在必须猜测的局面。变式与变式之间也可以相互组合，这样一来就极大的增强了扫雷这一类谜题的深度。

{% image lesson18_minesweeper.jpg fancybox:true %}

因为这些谜题都具有各自的规则与各自的复杂性，所以通过通过这种设计策略，你可以拥有无限的多样性和无尽的顿悟时刻。

具体在实践上，可以参考以下几个常见的方法：
- 改变几何结构或者拓扑结构（比如本来是个平面几何图形，可以试试变成圆柱体；本来网格是个正方形，那么可以试试三角形或者六边形网格）
- 增加新的约束条件（比如上面的扫雷变体）
- 增加新的线索类型
- 融合两种谜题
- 对线索加入一些干扰。比如假线索（明确告知玩家线索中有且仅有一条线索是假的） ，数字偏移（线索中的提及的数字和实际数字有一个固定的偏移值）
  
这些方法可以比较容易的为你的系统加入深度，但也需要谨慎使用。

提到系统深度，必须要回答的一个问题是：对于一个特定类型的谜题系统，深度从何而来？

- 它天生具有深度，而你甚至很难理解它为什么这么有深度（比如围棋谜题）
- 通过人为的构造让它富有深度（比如《炉石传说》，嗯这次是个正面例子，毕竟牌够多确实能大大扩展系统的深度）
- 通过系统内各个元素与规则约束之间的联系与互动（比如《Baba is You》和《The Witness》）
- 通过关卡的几何结构（推箱子类的解谜游戏貌似都具有这个特点）

仔细观察这些富有深度的系统，你会发现它们的出发点其实都挺简单的。比如下面是一些在游戏设计中常见的谜题类型：

- 连通性/路径问题
- 覆盖问题和装箱问题（比如使用固定大小和形状的骨牌，不重叠的覆盖满一个棋盘）
- 视错觉（比如透视）
- 状态处理与转换（一般而言游戏内某一时刻的关卡结构可以抽象成一种状态，而状态和状态之间可以相互转换，玩家需要寻找一个从起始状态一步步转换到终止状态的途径，比如推箱子）

如果对算法稍有了解的读者应该能很轻松的看出，上面这些问题如果用算法去解决的话往往很难（从复杂度的角度来说）。但这些其实都是人脑非常擅长推理的东西，而且具有很有趣的规律，所以他们可以很方便的展现复杂性。

## 第十九课：了解谜题的状态空间

我们以推箱子为例。在 Petr Jarušek 和 Radek Pelánek 的论文[《Difficulty Rating of Sokoban Puzzle》](https://dl.acm.org/doi/10.5555/1940526.1940539)中，他们用图来表示一个推箱子谜题的状态空间。这个图中的每一个节点代表一个谜题的状态，而每一条边代表着状态与状态间的转移。在推箱子中，我们可以通过箱子的位置和玩家可行走的区域来描述谜题当前的状态，而一次推箱子的操作可以当成是一次状态的转移（因为这一操作必定改变了箱子的位置和玩家可行走的区域）。这样一来，我们就可以更直观地分析推箱子谜题的状态空间了。下面是论文中的一个例子：

{% image lesson19_sokoban_graph.jpg fancybox:true %}

从上图中我们可以看出，在状态图中有一个很小的“瓶颈”，而这个瓶颈使得谜题的难度大大增加。因为玩家必须要先想方设法到达这个特定的状态，然后使用一个独特的操作完成状态的转移。图中每个节点的大小代表着玩家在每个状态下花费的思考时间。其实可以看出，在瓶颈之前玩家们的思考时间普遍很长，一旦通过瓶颈之后，玩家们的思考时间就会大大缩短。因为玩家距离目标状态已经非常近了，而且前面最困难的步骤都已经完成了，自然会轻松很多。

这个例子告诉我们，如果我们能够清楚的了解谜题的状态空间，那么我们可以更好地理解并控制谜题的难度。因为很显然，状态空间越大，可能的状态越多，瓶颈越难达成甚至拥有多个瓶颈，那么谜题的难度就会越大。使用状态图不失为一种好的将谜题状态空间可视化的方法，当然你也可以使用其他的方法，开心就好。

## 第二十课：理解谜题的解决路径

这一课其实与上一课有着比较强的关联。这里的解决路径其实并不仅仅代指玩家们在状态图中转移的路径，而是指玩家在解谜过程中的状态，包括但不限于前面说的转移路径，玩家将会经历哪些顿悟时刻等等。不过在这里我们还是从转移路径开始入手。

看看下面的这两个数回（Slitherlink）谜题（来自 Cameron Browne 的文章《The Nature of Puzzles》，刊登于[《Game & Puzzle Design》 vol. 1, no. 1, 2015](https://books.google.co.th/books/about/Game_Puzzle_Design_vol_1_no_1_2015_Colou.html?id=f6J3DgAAQBAJ)）：

{% image lesson20_slitherlink.jpg fancybox:true %}

> 数回的目标是是画线连接棋盘上的点形成一条唯一的回路，所画的线不能出现交叉或分枝。棋盘中某一格的数字代表该格被多少条线段所包围。

第一行是计算机随机生成的一道数回谜题，而第二行则是人工设计的。其中图 (a) 代表着原题目，图 (b) 代表着有经验的玩家会立刻发现并且完成的一些推理，它们可以是对一些解的排除或是确定。图 (c) 代表着谜题中每一个数字所引发的一系列推理步骤的数量，而图 (d) 则代表着这一谜题的较为自然的思考方向。我们可以发现，在计算机随机生成的谜题中，你可以从许多地方开始入手，但解完一部分并不会对解出其他部分产生太大帮助，因为它们是彼此割裂的，同时各个部分的推理过程其实是相对同质化的。而在人工设计的谜题中只有一个很明显的思考起点，但它能引发出高达 84 个进一步的推理步骤，并沿着两个很明显的方向推进，最终汇合在一起。对于玩家而言，这一设计可以让他们拥有一个顺畅的思考路径，同时也能引发出第十七课中提到的“让玩家知道自己在做对的事”这一效果。如果玩家每取得一点进展时能够解锁更多进展的话，玩家对于取得进展的感觉就会更加兴奋。

像这种较为线性的谜题解决路径也有一些缺点，尤其是当谜题的规模变得很大的时候，想找到可以开始取得进展的地方就会变得非常困难。相反当谜题可以从多个方向推进的时候，玩家就不容易卡住。不过对于较为线性的解决路径可以产生一些有趣的“思维流”，使得谜题更具有艺术性。

讲者 Elyot Grant 本身也是解谜游戏开发者，他们团队在开发新游戏的时候产生了一些对于线性谜题的规模与难度的理解：

- 如果一个线性谜题步骤少，难度还低，那么这个谜题要么可能用于教程，要么啥也不是。
- 如果步骤多，但难度较低，那么可以把它称为流式谜题。
- 如果步骤少但是其中有一步难度比较高，而整个谜题的乐趣就是找出这个困难而又有趣的步骤，那么可以把它称为精华型谜题。
- 当然啦步骤多还难度高的谜题，就是纯粹的折磨……

一般情况下，流式谜题和精华型谜题都比较适合电子游戏，因为它们都能够让玩家在解谜过程中保持兴奋感，前者可以让玩家体会到发现顺畅的“思维流”的愉悦，而后者则会让玩家感受到顿悟时的豁然开朗，而且这样玩家不会在单个谜题上耗时太久，从而让他们能够更持续地体验到解谜的乐趣。

## 第二十一课：注重谜题与玩家的“对话感”

这是个看起来很玄学的标题对吧？为了解释这一点，我们来看一个由[フライパン職人](https://twitter.com/1220oz_an)设计的点灯谜题（Akari Puzzle），你也可以[在这里](https://puzz.link/p?akari/10/10/gbibici16.ibi.gcgc7.g.q.g17.h.k.h.icgcgcgbgbi)亲自试试它。（非常建议先试一试再继续往下看！）

{% image lesson21_akari.jpg fancybox:true %}

> 在点灯谜题中，玩家需要将灯泡填入白格中，点亮所有白格。灯泡只会往水平与垂直方向发射光线，照亮整个行和列，除非它的光线被黑格挡住。黑格上可能有从 0 到 4 的数字，表示与其四条边邻接的白格的灯泡数目（如果没有数字就是数量没有限制）。此外，两个灯泡不能被相互照射，换而言之一个灯泡的光线不能照到另一个灯泡。

乍一看找不到解决的方向，不过比较值得注意的是左下角的 1。可以发现不管灯泡放在上面还是右侧的格子（用大圆点表示），下图中标红的格子一定会被照到，所以那个格子不能放灯泡（用小圆点表示）。

{% image lesson21_akari_sol_1.jpg fancybox:true %}

好诶！有进展了！我们再来看看上方的 2，在这里它的上方、右侧和下方都可以放灯泡。但因为要放两个灯泡，所以上方和右侧必定有一个格子是灯泡。那我们可以发现不管灯泡放在上面还是右侧的格子，下图中标红的格子还是一定会被照到，这样我们又排除了一个格子。

{% image lesson21_akari_sol_2.jpg fancybox:true %}

如法炮制，我们继续进行排除，大概能得到下面这个局势（序号代表着排除的先后顺序）：

{% image lesson21_akari_sol_3.jpg fancybox:true %}

上图中因为有了 13、14 两个格子的排除，我们直接把其中一个格子的灯点起来了。点出来后其实会发现更多的因为唯一解可以确定的格子，大概像是下面这样（这次就不标序号啦，自己试试吧）：

{% image lesson21_akari_sol_4.jpg fancybox:true %}

嘿！只剩中间的一个格子没有点亮了！你看这个格子是不是很适合放上一个灯泡？确实！而且也不会影响到其他格子，所以这样我们就完成了这个谜题啦！

这个谜题中其实有很多非常宝贵的地方，我们来一一列举一下：

- 解谜的过程很有乐趣，每推进一步的时候，这一步都自然地指向了下一步的方向
- 拥有重复但又不完全相同的推导模式，可以重复运用这类技巧去创造解题的逻辑链，但它的变化又不会让玩家感到无聊
- 谜题的空间布置很优雅，整个解题过程就是绕着棋盘走了一圈，排除一些格子，并开始点亮灯泡
- 最后只剩下一个空格算是一个比较惊喜的结局，有点锦上添花的感觉

这些使得解谜的体验不仅仅是去找到答案，而更多的像是和谜题的作者交流一样。作为玩家像是开启了一段从起点到终点的旅程，而谜题中逐渐揭示的一个个信息则是路上的一个个路标，指引着玩家在交互中前进。

但问题是，该如何做呢？

## 第二十二课：善用正向设计

正向设计其实就是根据玩家的解题过程来同步放置谜题的线索。我们还是以点灯谜题为例，来探索一下正向设计这一技巧。这是一个点灯谜题的[编辑器](https://puzz.link/p?akari)，你可以在这里自己亲自动手试一试。

首先我们要为玩家提供一个思考的起点。我们先在角落放个 0 吧，这样不会给出太多的信息（因为只排除了两个格子），但又能让玩家有一个思考的起点。

{% image lesson22_akari_design_1.jpg fancybox:true %}

因为我们要站在玩家思考的角度去放置线索，这个时候我们可以先切到解答模式（Answer Mode，可用鼠标中键快速切换）来模拟一下解题的步骤：

{% image lesson22_akari_design_2.jpg fancybox:true %}

好我们排除了两个格子，接下来是时候给谜题加点料了。首先我们放了一个 2，结合前面 0 的排除，这样玩家可以确定有两个格子一定是灯泡。切到解答模式点亮，我们可以发现诶有一个格子没有被照到：

{% image lesson22_akari_design_3.jpg fancybox:true %}

很自然的想到，如果我们在从下往上数第 4 格的位置放个墙，考虑到那个格子只能被同一个纵列的灯照到，那么第 3 格就一定是灯泡了：

{% image lesson22_akari_design_4.jpg fancybox:true %}

盘面右侧会被灯全部点亮，这很不好，不够 INTERESTING。先随便建点墙填点数。

{% image lesson22_akari_design_5.jpg fancybox:true %}

为了让这道题更 INTERESTING 我们将原来在 A 格位置的墙壁移动了一下，填了个数，这也是使用正向设计时很重要的一点，作为设计师必须清楚地知道自己的改动不会对此前的推理过程产生影响）：

{% image lesson22_akari_design_6.jpg fancybox:true %}

我们最后可以得到下面这个谜题（因为我很菜，所以出的很烂）：

{% image lesson22_akari_design_7.jpg fancybox:true %}

不过出完我们还是要擦掉所有答案，试解一下，确定不会出现自相矛盾的地方。

当然，运用正向设计的前提是你非常熟悉这类谜题的解法，因为只有这样你在设计谜题的时候才能有一定的直觉，能感觉到谜题给出的信息对于解谜路径产生什么样的影响。不过如果你能熟练使用它，它会带来许多好处，比如：

- 你可以对玩家的解谜体验拥有严格的控制
- 你可以很方便的控制难度
- 你可以用很有趣的方式隐藏顿悟时刻
- 保证玩家解谜的过程是在进行逻辑推理而非猜测
- 确保解的唯一性和独特性
- 促成谜题与玩家的交流，因为玩家在解谜过程中会确信这就是设计师希望玩家在解谜时做的事情

这使得最后设计出的谜题的惊喜来源从最后局面会变成什么样子，转化为了让玩家推断出唯一解的逻辑是什么。而这正是经过精心设计的逻辑谜题比起计算机随机生成的谜题更优雅，更有趣的原因。为了能达成这一点，设计师所需做的很重要的一点就是：

## 第二十三课：确保关键步骤是独一无二的

为了解释这一点，让我们来回顾一下第五课中提到的，白棋需要在 3 步内将死黑棋的国际象棋谜题：

{% image lesson5_chess1.jpg fancybox:true %}

**如果想要在 3 步内将死，必须要把 f1 的王往左上角走一格来到 e2。**而这一事实的存在，意味着玩家必须去发现这个被设计好的尤里卡时刻。虽然这一步之后对方其实不一定非要把兵升变成为后，而是有很多种回击方式。不过可以确定的是升变是最具威胁性的一种，而这也是这个谜题非常有趣的部分——玩家如何去应对这个最富有挑战性的回击，毕竟其他的情况下肯定可以在三步内将死对面。所以第一步的设计在国际象棋谜题中是非常重要的，它需要将玩家引入一个预设好的情境下，而在随后的步骤中，随着对方行动的不同会演化出不同的分支，玩家需要对每一种分支找到一种应对方式。尽管谜题的后半部分可能并不是独一无二的，这并不影响这一独特的关键步骤的美感。

我们一直在提的一个核心概念是：“顿悟时刻（Eureka Moment）是谜题的基本组成部分”。那为了确保玩家真的能够感受到顿悟带来的惊喜感，我们需要避免谜题出现其它可以让玩家逃课/避开这个顿悟时刻的解法。此时试解就变得尤为重要。毕竟作为设计师而言，自己其实很清楚谜题的顿悟时刻在哪里。反而会忽视掉一些可能的其他解法。他人试解，尤其是寻找那些善于挖掘多种解法的人来试解，往往可以发现很多其他的解决方案。这样一来，设计师就可以对这些解法进行分析，看看是否会使得玩家绕开顿悟时刻，并对谜题进行适当的修改。

## 第二十四课：为谜题设计一个主题

