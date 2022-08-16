---
robots: noindex,nofollow
sitemap: false
menu_id: friends
seo_title: 友链
toc_title: 友链索引
comment_title: 快来交换友链吧～
comment_id: '留言板'
---

## 挚友

感谢你们的陪伴！
{% friends only:group1 %}

## 来自 GitHub 的朋友
以下友链通过 [GitHub Issue](https://github.com/Tianpeng2333/friends/issues)提交：
{% friends only:github %}

## 如何自助添加友链？

本博客参考了 [这篇文章](https://xaoxuu.com/blog/2020-08-23-issues-api/) 搭建了基于 Issue API 的友链系统。如果您的站点是有实质性原创内容的个人博客或组织，可参考如下步骤来自助添加友链：

{% timeline %}

<!-- node 第一步：新建 Issue -->

新建 [GitHub Issue](https://github.com/Tianpeng2333/friends/issues/) 按照模板格式填写并提交。

为了提高图片加载速度，建议将自己的头像压缩至 96px*96px。

<!-- node 第二步：添加友链 -->

请添加本站到您的友链中，如果您也使用 issue 作为友链源，只需要告知您的友链源仓库即可。

{% codeblock lang:yaml %}
title: Peng's Blog
avatar: https://cdn.v2ex.com/gravatar/ff6435b019785ea14276bf4d9bf2b002?s=200
url: https://tianpeng2333.github.io/
{% endcodeblock %}

<!-- node 第三步：等待 -->

待管理员审核通过，添加 `active` 标签后，刷新即可生效。

{% endtimeline %}

如果您需要更新自己的友链，请直接修改 issue 内容，大约 3 分钟内生效，无需等待博客更新。如果无法修改，可以重新创建一个。
