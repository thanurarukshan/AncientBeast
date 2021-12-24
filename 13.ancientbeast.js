(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{327:function(e,t,i){"use strict";i.r(t);var r=i(84),a=i.n(r),n=i(27),s=i.n(n),c=i(39),o=i.n(c),u=i(114),h=i(29),f=i(45),d=i(11),g=(i(5),i(987));function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}t.default=function(e){e.abilities[6]=[{trigger:"onCreatureSummon onOtherCreatureSummon onOtherCreatureDeath",_buff:0,require:function(){if(this.creature.dead||this.creature.temp)return!1;var t=0;return e.creatures.forEach((function(e){"S"!=e.realm||e.dead||e.temp||(t+=2)})),t!=this._buff&&(this._buff=t,!0)},activate:function(){this.creature.facePlayerDefault();var t=0;this.isUpgraded()&&(t=this._buff),this.creature.replaceEffect(new g.a("Lamellar Body",this.creature,this.creature,"",{alterations:{defense:this._buff,frost:this._buff,regrowth:t},stackable:!1},e))}},{trigger:"onQuery",_directions:[0,1,0,0,1,0],_targetTeam:h.a.enemy,_executeHealthThreshold:39,require:function(){if(!this.testRequirements())return!1;if(!this.atLeastOneTarget(this.creature.getHexMap(f.k),{team:this._targetTeam})){if(!this.isUpgraded())return!1;if(!this.testDirection({team:this._targetTeam,directions:this._directions,distance:this.creature.remainingMove+1,sourceCreature:this.creature}))return!1}return!0},query:function(){var t=this,i=this.creature,r=o()({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:i.flipped,id:i.id,hexesDashed:i.getHexMap(f.k),team:h.a.enemy,requireCreature:!0},"flipped",i.flipped);if(r.choices=i.getHexMap(f.k).map((function(e){return[e]})),this.isUpgraded()){var a=e.grid.getDirectionChoices({flipped:i.flipped,sourceCreature:i,team:this._targetTeam,id:i.id,requireCreature:!0,x:i.x,y:i.y,distance:i.remainingMove+1,directions:this._directions});r.choices=r.choices.filter((function(e){return!a.choices.some((function(t){return e.every((function(e){return t.includes(e)}))}))})),r.choices=[].concat(s()(r.choices),s()(a.choices)),a.choices.forEach((function(t){var a=t[0].direction,n=1;(!i.flipped&&4===a||i.flipped&&1===a)&&(n=-1*i.size);var c=e.grid.getHexLine(i.x+n,i.y,t[0].direction,i.flipped);c.splice(0,t.length),c.splice(t.length-d.d(t).creature.size),r.hexesDashed=[].concat(s()(r.hexesDashed),s()(c))}))}e.grid.queryChoice(r)},activate:function(t,i){var r=this,a=r.creature;r.end();var n=d.d(t).creature;if(a.getHexMap(f.k).includes(d.d(t)))r._damageTarget(n);else{if(!this.isUpgraded())return;d.b(t,!1,!0,a.id);var s=d.d(t),c=s.x+(4===i.direction?a.size-1:0);s=e.grid.hexes[s.y][c];var o=1;(!a.flipped&&4===i.direction||a.flipped&&1===i.direction)&&(o=-1*a.size);var u=e.grid.getHexLine(a.x+o,a.y,i.direction,a.flipped);u.splice(0,t.length+n.size),u.splice(t.length),a.moveTo(s,{callback:function(){for(var t=null,i=0;i<u.length&&u[i].isWalkable(n.size,n.id,!0);i++)t=u[i];null!==t?n.moveTo(t,{callback:function(){t.creature===n&&r._damageTarget(n),e.activeCreature.queryMove()},ignoreMovementPoint:!0,ignorePath:!0,animation:"push"}):(r._damageTarget(n),e.activeCreature.queryMove())}})}},_damageTarget:function(t){var i=t.health<=this._executeHealthThreshold&&t.isFrozen(),r=i?{pure:t.health}:{crush:this.damages.crush,frost:this.damages.frost},a=new u.a(this.creature,r,1,[],e);i?(this.game.UI.chat.suppressMessage(/is dead/i,1),t.takeDamage(a).kill&&(this.game.log("%CreatureName".concat(t.id,"% has been shattered!")),t.hint("Shattered","damage"))):t.takeDamage(a)}},{trigger:"onQuery",_targetTeam:h.a.enemy,_directions:[1,1,1,1,1,1],_distance:5,require:function(){return!!this.testRequirements()&&!!this.testDirection({sourceCreature:this.creature,team:this._targetTeam,directions:this._directions,distance:this._distance,optTest:this._confirmTarget})},query:function(){var t=this,i=this.creature;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:i.player.flipped,team:this._targetTeam,id:i.id,requireCreature:!0,x:i.x,y:i.y,directions:this._directions,distance:this._distance,optTest:this._confirmTarget})},activate:function(t,i){var r=this,n=this.creature,s=d.d(t).creature;r.end();var c=e.animations.projectile(this,s,"effects_freezing-spit",t,i,52,-20),o=a()(c,2),h=o[0],f=o[1],g=Math.max(n.stats.frost-s.stats.frost,0),p=new u.a(r.creature,{frost:g},1,[],e);h.onComplete.add((function(){var t;this.destroy(),p.damages.frost>0&&(t=s.takeDamage(p)),s.freeze(r.isUpgraded()),t&&!t.kill&&(e.log("%CreatureName".concat(s.id,"% ").concat(r.isUpgraded()?"enters Cryostasis":"has been Frozen"," and cannot act")),s.hint(r.isUpgraded()?"Cryostasis":"Frozen"))}),f)},_confirmTarget:function(e){return e.isFatigued()}},{trigger:"onQuery",_directions:[0,1,0,0,1,0],_targetTeam:h.a.enemy,require:function(){this.creature;return!!this.testRequirements()&&!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})},query:function(){var e=this,t=this.creature;this.game.grid.queryCreature({fnOnConfirm:function(){e.animation.apply(e,arguments)},team:this._targetTeam,id:t.id,flipped:t.flipped,hexes:this._getHexes()})},activate:function(t){var i=this.creature;this.end();var r=Math.max(i.level-t.level,0),a=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},this.damages,{frost:this.damages.frost+r*this.bonus_damages.frost,pierce:this.damages.pierce+(this.isUpgraded()?r*this.bonus_damages.pierce:0)}),n=new u.a(i,a,1,[],e);t.takeDamage(n)},_getHexes:function(){var t=this.creature;return[].concat(s()(e.grid.getHexMap(t.x,t.y-4,2,!0,f.g)),s()(this.creature.getHexMap(f.g)))}}]}},987:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(3),a=i.n(r),n=i(4),s=i.n(n),c=i(0),o=i(5),u=function(){function e(t,i,r,n,s,o){a()(this,e),this.id=o.effectId++,this.game=o,this.name=t,this.owner=i,this.target=r,this.trigger=n,this.creationTurn=o.turn;var u=c.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},s);c.extend(this,u),o.effects.push(this)}return s()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof o.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);