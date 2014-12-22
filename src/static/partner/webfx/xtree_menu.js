var tree_act=tree_click;
function citem(title,url,icon){
   //icon='http://img.wdian.net/scripts/webfx/images/org.gif';
   var e=new WebFXTreeItem(title);
   if(url!=''){
   	e.action='javascript:tree_act(\''+title+'\',\''+url+'\',\''+icon+'\',true);';
   }
   return e;
}

if (document.getElementById) {
	var tree = new WebFXTree('合作商管理系统');
	tree.setBehavior('classic');

	var a1=citem('系统设置','','');
	tree.add(a1);
	a1.add(citem('门店管理','pt/shop/ShopListOfPartner',''));
	a1.add(citem('菜谱管理','pt/shop/Category',''));
	a1.add(citem('菜谱管理','pt/food/foods?cid=-1',''));
	
	var a2=citem('信息设置','','');
	tree.add(a2);
	a2.add(citem('设置公告','pt/page/update?type=notice',''));
	a2.add(citem('修改商家介绍','pt/page/update?type=about',''));
	
	var a=citem('订单管理','','');
	tree.add(a);
	a.add(citem('未处理订单','pt/order/list?status=0',''));
	a.add(citem('处理中订单','pt/order/list?status=1',''));
	a.add(citem('配送中订单','pt/order/list?status=2',''));
	a.add(citem('已完成订单','pt/order/list?status=3',''));
	a.add(citem('已作废订单','pt/order/list?status=-1',''));
	
	
	var a3=citem('帮助','','');
	tree.add(a3);
	a3.add(citem('官方网站','http://www.ops.cc/?from=wdian',''));

	document.getElementById('nav').innerHTML='<div style="padding:10px">'+tree+'</div>';
	
	tree.expandAll();
}﻿
