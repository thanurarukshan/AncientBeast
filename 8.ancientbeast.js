(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{319:function(e,t,r){"use strict";r.r(t);var i=r(114),a=r(29),n=r(45),s=r(11),c=r(987);t.default=function(e){e.abilities[4]=[{trigger:"onStartPhase",require:function(){return this.testRequirements()},activate:function(){this._addTrap(this.creature.hexagons[1]),this._addTrap(this.creature.hexagons[this.creature.player.flipped?0:2]),e.Phaser.add.audio("MagmaSpawn0").play()},_addTrap:function(t){var r=this,a=this.isUpgraded()?0:1;t.createTrap("scorched-ground",[new c.a(this.title,this.creature,t,"onStepIn",{requireFn:function(){return!!this.trap.hex.creature&&this.trap.hex.creature.id!==r.creature.id},effectFn:function(t,a){a.takeDamage(new i.a(t.attacker,r.damages,1,[],e),{isFromTrap:!0}),this.trap.destroy(),t.deleteEffect()},attacker:this.creature},e)],this.creature.player,{turnLifetime:a,ownerCreature:this.creature,fullTurnLifetime:!0})}},{trigger:"onQuery",_lastTargetId:-1,_targetTeam:a.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(n.k),{team:this._targetTeam})},query:function(){var t=this,r=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:r.id,flipped:r.flipped,hexes:this.creature.getHexMap(n.k)})},activate:function(t){var r;this.end();var a={burn:this.damages.burn,crush:this.damages.crush},n=0;for(r=0;r<t.effects.length;r++)t.effects[r].name===this.title&&t.effects[r].owner===this.creature&&n++;a.burn+=n*this.damages.burn;var s=new i.a(this.creature,a,1,[],e);t.takeDamage(s);var u=1;for(this.isUpgraded()&&t.id===this._lastTargetId&&(u=2),this._lastTargetId=t.id,r=0;r<u;r++)t.addEffect(new c.a(this.title,this.creature,t,"",{deleteTrigger:"",stackable:!0},e))}},{trigger:"onQuery",map:[[0,0,1,0],[0,0,1,1],[1,1,1,0],[0,0,1,1],[0,0,1,0]],require:function(){return this.testRequirements()},query:function(){var t=this,r=this.creature;this.map.origin=[0,2],e.grid.queryChoice({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:a.a.both,requireCreature:0,id:r.id,flipped:r.flipped,choices:[r.getHexMap(this.map),r.getHexMap(this.map,!0)]})},activate:function(e){var t=this;t.end();for(var r=t.getTargets(e),i=0;i<r.length;i++)if(r[i].target===this.creature){r.splice(i,1);break}t.areaDamage(t.creature,t.damages1,[],r),this.isUpgraded()&&e.forEach((function(e){e.creature&&e.creature!==t.creature||t.creature.abilities[0]._addTrap(e)}))}},{trigger:"onQuery",directions:[0,1,0,0,1,0],_targetTeam:a.a.enemy,require:function(){if(!this.testRequirements())return!1;if(!this.creature.stats.moveable)return this.message=e.msg.abilities.notMoveable,!1;var t=this.creature,r=t.player.flipped?t.x-t.size+1:t.x;return!!this.testDirection({team:this._targetTeam,x:r,directions:this.directions})},query:function(){var t=this,r=this.creature,i=r.player.flipped?r.x-r.size+1:r.x;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:r.id,requireCreature:!0,x:i,y:r.y,directions:this.directions})},activate:function(t,r){var n=this,c=this.creature;n.end(!1,!0);for(var u=new i.a(n.creature,n.damages,1,[],e),h=0;h<this.creature.hexagons.length;h++)this.creature.hexagons[h].trap&&this.creature.hexagons[h].destroyTrap();!function t(i){var h=s.d(i).creature,o=c.hexagons[4===r.direction?c.size-1:0];s.b(i,!1,!1),i.unshift(o);var f=s.d(i),d=f.x+(4===r.direction?c.size-1:0);f=e.grid.hexes[f.y][d],c.moveTo(f,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){i.forEach((function(e){e.trap&&e.destroyTrap()}));var o=!1;void 0!==h&&(o=h.takeDamage(u,!0).kill);var f=!1;if(n.isUpgraded()&&o){var d=e.grid.getHexLine(h.x,h.y,r.direction,!1);s.b(d,!0,!0,c.id);var g=s.d(d).creature;g&&Object(a.b)(c,g,n._targetTeam)&&(f=!0,t(d))}if(!f)var p=setInterval((function(){e.freezedInput||(clearInterval(p),e.UI.selectAbility(-1),e.activeCreature.queryMove())}),100)}})}(t)}}]}},987:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var i=r(3),a=r.n(i),n=r(4),s=r.n(n),c=r(0),u=r(5),h=function(){function e(t,r,i,n,s,u){a()(this,e),this.id=u.effectId++,this.game=u,this.name=t,this.owner=r,this.target=i,this.trigger=n,this.creationTurn=u.turn;var h=c.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},s);c.extend(this,h),u.effects.push(this)}return s()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof u.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);