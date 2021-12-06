(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{312:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r(114),n=r(27),s=r(43),u=r(11),c=r(115);t.default=function(e){e.abilities[14]=[{trigger:"onCreatureSummon onDamage onHeal",require:function(){return!0},activate:function(){if(!this.creature.dead){var t=this.isUpgraded()?5:7,r=Math.floor(this.creature.health/t*3),i=r==this._lastBonus;this._lastBonus=r;for(var a=["pierce","slash","crush"],n={},s=0;s<a.length;s++){n[a[s]]=r}this.creature.replaceEffect(new c.a("Gooey Body",this.creature,this.creature,"",{alterations:n,deleteTrigger:"",stackable:!1,noLog:i},e)),i||e.log("%CreatureName"+this.creature.id+"% receives "+r+" pierce, slash and crush")}},_lastBonus:0},{trigger:"onQuery",require:function(){return this.testRequirements()},query:function(){var t=this,r=[[1,1],[1,1,1],[1,1]],i=this.creature.y%2!=0?-1:0,a=[e.grid.getHexMap(this.creature.x+1+i,this.creature.y-2-1,0,!1,r),e.grid.getHexMap(this.creature.x+2+i,this.creature.y+-1,0,!1,r),e.grid.getHexMap(this.creature.x+1+i,this.creature.y+2+-1,0,!1,r),e.grid.getHexMap(this.creature.x-1+i,this.creature.y+2+-1,0,!1,r),e.grid.getHexMap(this.creature.x-2+i,this.creature.y+-1,0,!1,r),e.grid.getHexMap(this.creature.x-1+i,this.creature.y-2-1,0,!1,r)];a.sort((function(e,t){return e.length<t.length})),e.grid.queryChoice({fnOnCancel:function(){e.activeCreature.queryMove(),e.grid.clearHexViewAlterations()},fnOnConfirm:function(){t.animation.apply(t,arguments)},team:n.a.both,id:this.creature.id,requireCreature:!1,choices:a})},activate:function(t){this.end();var r=this.getTargets(t),s=i.extend({},this.damages);if(this.isUpgraded())for(var u in s)({}).hasOwnProperty.call(s,u)&&(s[u]*=2);for(var c=0,o=0;o<r.length;o++)if(void 0!==r[o]){var h=this.damages;Object(n.b)(this.creature,r[o].target,n.a.enemy)&&(h=s);var g=new a.a(this.creature,h,r[o].hexesHit,[],e);c+=r[o].target.takeDamage(g).kill+0}c>1&&this.creature.player.score.push({type:"combo",kills:c})}},{trigger:"onQuery",require:function(){return this.testRequirements()},query:function(){var t=this,r=this.creature,i=this.isUpgraded()?3:1,a=r.hexagons.concat(e.grid.getFlyingRange(r.x,r.y,i,r.size,r.id));e.grid.queryHexes({fnOnConfirm:function(){t.animation.apply(t,arguments)},size:r.size,flipped:r.player.flipped,id:r.id,hexes:a,ownCreatureHexShade:!0,hideNonTarget:!0})},activate:function(t){this.end();var r=this,i=function(){var i=new c.a("Royal Seal",r.creature,t,"onStepIn",{requireFn:function(){var e=this.trap.hex.creature;return e&&e.type!==this.owner.type},effectFn:function(e,t){0===this.trap.turnLifetime&&(t.remainingMove=0,this.trap.turnLifetime=1,this.trap.ownerCreature=t)},alterations:{moveable:!1},deleteTrigger:"onStartPhase",turnLifetime:1},e);t.createTrap("royal-seal",[i],r.creature.player,{ownerCreature:r.creature,fullTurnLifetime:!0}).hide()};t.x!==this.creature.x||t.y!==this.creature.y?this.creature.moveTo(t,{callback:function(){e.activeCreature.queryMove(),i()},ignoreMovementPoint:!0,ignorePath:!0,overrideSpeed:200,animation:"push"}):i()}},{trigger:"onQuery",directions:[1,1,1,1,1,1],_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,directions:this.directions})},query:function(){var t=this,r=this.creature;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:r.player.flipped,team:this._targetTeam,id:this.creature.id,requireCreature:!0,x:r.x,y:r.y,directions:this.directions})},activate:function(t,r){this.end();var i=u.d(t).creature,n=t[0].creature===i?{sonic:20,crush:10}:{sonic:20},c=[];switch(r.direction){case 0:c=e.grid.getHexMap(i.x,i.y-8,0,i.flipped,s.f).reverse();break;case 1:c=e.grid.getHexMap(i.x,i.y,0,i.flipped,s.q);break;case 2:c=e.grid.getHexMap(i.x,i.y,0,i.flipped,s.e);break;case 3:c=e.grid.getHexMap(i.x,i.y,-4,i.flipped,s.f);break;case 4:c=e.grid.getHexMap(i.x,i.y,0,!i.flipped,s.q);break;case 5:c=e.grid.getHexMap(i.x,i.y-8,-4,i.flipped,s.e).reverse()}var o=c.length>1&&c[1].isWalkable(i.size,i.id,!0)&&i.stats.moveable;this.isUpgraded()&&!o&&(n.sonic+=10);var h=new a.a(this.creature,n,1,[],e);i.takeDamage(h,{ignoreRetaliation:!0}).kill||o&&i.moveTo(c[1],{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.activeCreature.queryMove()},animation:"push"})}}]}}}]);