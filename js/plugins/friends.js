const friendsjs={requestAPI:(o,s,l)=>{let i=5;!function r(){new Promise((t,e)=>{let a=0,n=setTimeout(()=>{0===a&&(a=2,n=null,e("请求超时"),0==i&&l())},5e3);fetch(o).then(function(e){if(2!==a&&(clearTimeout(n),t(e),n=null,a=1),e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){i=0,s(e)}).catch(function(e){0<i?(--i,setTimeout(()=>{r()},5e3)):l()})})}()},layout:n=>{const r=$(n.el)[0];$(r).append('<div class="loading-wrap"><svg class="loading" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2709"><path d="M832 512c0-176-144-320-320-320V128c211.2 0 384 172.8 384 384h-64zM192 512c0 176 144 320 320 320v64C300.8 896 128 723.2 128 512h64z" p-id="2710"></path></svg><p></p></div>'),friendsjs.requestAPI(n.api,function(e){$(r).find(".loading-wrap").remove();const t=e.content||e;t.forEach((e,t)=>{var a=(a=(a=(a=(a='<div class="user-card">')+'<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer"'+(' href="'+(e.html_url||e.url)+'">'))+('<img src="'+(e.avatar_url||e.avatar||n.avatar)+'" onerror="javascript:this.src=\''+n.avatar+"';\">"))+('<div class="name"><span>'+(e.title||e.login)+"</span></div>"))+"</a>"+"</div>";$(r).find(".group-body").append(a)})},function(){$(r).find(".loading-wrap svg").remove(),$(r).find(".loading-wrap p").text("加载失败，请稍后重试。")})}};$(function(){for(var e=document.getElementsByClassName("stellar-friends-api"),t=0;t<e.length;t++){const r=e[t];var a,n=r.getAttribute("api");null!=n&&((a=new Object).el=r,a.api=n,a.class=r.getAttribute("class"),a.avatar="https://fastly.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/avatar/round/3442075.svg",friendsjs.layout(a))}});