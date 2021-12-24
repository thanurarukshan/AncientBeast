(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{326:function(e,t,r){"use strict";r.r(t);var i=r(114),a=r(29),n=r(45),s=r(11),c=r(987),u=r(988);t.default=function(e){e.abilities[3]=[{triggerFunc:function(){return this.isUpgraded()?"onUnderAttack onAttack":"onUnderAttack"},priority:10,require:function(e){return!!this.testRequirements()&&(!e||void 0===e.melee||e.melee&&!e.isFromTrap)},activate:function(t){var r=this.creature;if(t&&t.melee){var i=t.attacker===r?t.target:t.attacker,a={alterations:this.effects[0],creationTurn:e.turn-1,stackable:!0};this.end();var n=new c.a(this.title,r,i,"",a,e);i.addEffect(n,void 0,"Contaminated"),e.log("%CreatureName"+i.id+"%'s regrowth is lowered by "+this.effects[0].regrowth),this.setUsed(!1)}}},{trigger:"onQuery",_targetTeam:a.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(n.j),{team:this._targetTeam})},query:function(){var t=this.creature,r=this;e.grid.queryCreature({fnOnConfirm:function(){r.animation.apply(r,arguments)},team:this._targetTeam,id:t.id,flipped:t.flipped,hexes:t.getHexMap(n.j)})},activate:function(t){this.end();var r=new i.a(this.creature,this.damages,1,[],e),a=t.takeDamage(r);if(""===a.damageObj.status){var n=a.damages.total;if(this.isUpgraded()){var s=this.creature.stats.health-this.creature.health;if(s>0){var u=Math.min(n,s);n-=u,this.creature.heal(u,!1)}}n>0&&this.creature.addEffect(new c.a(this.title,this.creature,this.creature,"",{turnLifetime:1,deleteTrigger:"onStartPhase",alterations:{regrowth:n}},e),"%CreatureName"+this.creature.id+"% gained "+n+" regrowth for now","Regrowth++")}this.creature.effects.forEach((function(e){"Frogger Bonus"==e.name&&e.deleteEffect()}))}},{trigger:"onQuery",require:function(){return this.creature.stats.moveable?this.testRequirements()&&this.creature.stats.moveable:(this.message=e.msg.abilities.notMoveable,!1)},fnOnSelect:function(e){this.creature.tracePosition({x:e.x,y:e.y,overlayClass:"creature moveto selected player"+this.creature.team})},query:function(){var t=this,r=this.creature,i=!this.isUpgraded()||this._isSecondLowJump(),a=this._getHexRange(i);e.grid.queryHexes({fnOnSelect:function(){t.fnOnSelect.apply(t,arguments)},fnOnConfirm:function(){arguments[0].x!=t.creature.x||arguments[0].y!=t.creature.y?t.animation.apply(t,arguments):t.query()},size:r.size,flipped:r.player.flipped,id:r.id,hexes:a,hexesDashed:[],hideNonTarget:!0})},activate:function(t){var r=this;if(r.end(!1,!0),this.isUpgraded()&&!this._isSecondLowJump()){for(var i=this._getHexRange(!0),a=!1,n=0;n<i.length;n++)i[n].x===t.x&&i[n].y===t.y&&(a=!0);a&&this.setUsed(!1)}r.creature.moveTo(t,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.Phaser.camera.shake(.02,100,!0,e.Phaser.camera.SHAKE_VERTICAL,!0),e.onStepIn(r.creature,r.creature.hexagons[0]);var t=setInterval((function(){e.freezedInput||(clearInterval(t),e.UI.selectAbility(-1),e.activeCreature.queryMove())}),100)}}),r.creature.addEffect(new c.a("Offense Bonus",r.creature,r.creature,"onStepIn onEndPhase",{effectFn:function(e){e.deleteEffect()},alterations:r.effects[0]},e))},_getHexRange:function(t){var r=this.creature,i=e.grid.getHexMap(r.x,r.y,0,!1,n.r);i=s.b(i,!1,t,r.id);var a=e.grid.getHexMap(r.x,r.y,0,!0,n.r);a=s.b(a,!1,t,r.id);for(var c=i.concat(a).sort((function(e,t){return e.x-t.x})),u=0,o=0;o<c.length;o++)0===o||c[o-1].x+1===c[o].x?u++:(u<this.creature.size&&(c.splice(o-u,u),o-=u),u=1);return u<this.creature.size&&c.splice(c.length-u,u),c},_isSecondLowJump:function(){return 1===this.timesUsedThisTurn}},{trigger:"onQuery",_targetTeam:a.a.enemy,require:function(){if(!this.testRequirements())return!1;var t=e.grid.getHexMap(this.creature.x-2,this.creature.y-2,0,!1,n.j);return!!this.atLeastOneTarget(t,{team:this._targetTeam})},query:function(){var t=this,r=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:r.id,flipped:r.flipped,hexes:e.grid.getHexMap(r.x-2,r.y-2,0,!1,n.j)})},activate:function(t){this.end();var r=new i.a(this.creature,this.damages,1,[],e),a=t.takeDamage(r);if(this.isUpgraded()&&!a.kill){var n=t.x-this.creature.x,s=t.y-this.creature.y,c=Object(u.a)(t.y,n,s),o=e.grid.getHexLine(t.x,t.y,c,t.flipped);o.length>=2&&o[1].isWalkable(t.size,t.id,!0)&&t.moveTo(o[1],{callback:function(){e.activeCreature.queryMove()},ignoreMovementPoint:!0,ignorePath:!0,overrideSpeed:500,animation:"push"})}this.creature.effects.forEach((function(e){"Offense Bonus"==e.name&&e.deleteEffect()}))}}]}},987:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(3),a=r.n(i),n=r(4),s=r.n(n),c=r(0),u=r(5),o=function(){function e(t,r,i,n,s,u){a()(this,e),this.id=u.effectId++,this.game=u,this.name=t,this.owner=r,this.target=i,this.trigger=n,this.creationTurn=u.turn;var o=c.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},s);c.extend(this,o),u.effects.push(this)}return s()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof u.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()},988:function(e,t,r){"use strict";function i(e,t,r){var i;return t>1&&(t=1),t<-1&&(t=-1),0===r?i=1===t?1:4:(e%2==0&&t<1&&t++,i=1===t?-1===r?0:2:1===r?3:5),i}r.d(t,"a",(function(){return i}))}}]);