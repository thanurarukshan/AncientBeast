(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{307:function(e,t,a){"use strict";a.r(t);var r=a(112),i=a(26),n=a(42),s=(a(2),a(113));t.default=function(e){e.abilities[33]=[{trigger:"onDamage onStartPhase",_damaged:!1,_targets:[],require:function(){return e.activeCreature!=this.creature?(this._damaged=!0,!1):!!this._damaged&&(this._damaged=!1,this._targets=this.creature.adjacentHexes(1),!(this.isUpgraded()&&!this.atLeastOneTarget(this._targets,{team:i.a.enemy}))&&this.testRequirements())},activate:function(){var t=this.creature,a=new r.a(t,{sonic:30},this._targets.length,[],e),i=new Set;this._targets.forEach((function(e){void 0===e.creature||i.has(e.creature)||i.add(e.creature)})),this.end(!1,!0),i.forEach((function(e,t,r){e.takeDamage(a)})),this.end(!0,!1)}},{trigger:"onQuery",damages:{slash:40},_targetTeam:i.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.adjacentHexes(1),{team:this._targetTeam})},query:function(){var t=this.creature,a=this;e.grid.queryCreature({fnOnConfirm:function(){a.animation.apply(a,arguments)},team:this._targetTeam,id:t.id,flipped:t.flipped,hexes:e.grid.getHexMap(t.x-2,t.y-2,0,!1,[[0,0,0,0],[0,1,0,1],[1,0,0,1],[0,1,0,1]])})},activate:function(t){this.end();var a=new r.a(this.creature,this.damages,1,[],e),i=t.takeDamage(a);""==i.status&&this.creature.addEffect(new s.a("Regrowth++",this.creature,this.creature,"onStartPhase",{effectFn:function(e){e.deleteEffect()},alterations:{regrowth:Math.round(i.damages.total/4)}},e)),this.creature.effects.forEach((function(e){"Frogger Bonus"==e.name&&this.deleteEffect()}))}},{trigger:"onQuery",require:function(){return this.testRequirements()},fnOnSelect:function(e){this.creature.tracePosition({x:e.x,y:e.y,overlayClass:"creature moveto selected player"+this.creature.team})},query:function(){var t=this,a=this.creature,r=e.grid.getFlyingRange(a.x,a.y,50,a.size,a.id).filter((function(e){return a.item==e.y}));e.grid.queryHexes({fnOnSelect:function(){t.fnOnSelect.apply(t,arguments)},fnOnConfirm:function(){t.animation.apply(t,arguments)},size:a.size,flipped:a.player.flipped,id:a.id,hexes:r})},activate:function(t){this.end(),this.creature.moveTo(t,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.activeCreature.queryMove()}}),this.creature.addEffect(new s.a("Offense++",this.creature,this.creature,"onStepIn onEndPhase",{effectFn:function(e){e.deleteEffect()},alterations:{offense:25}},e))}},{trigger:"onQuery",damages:{pierce:15,slash:10,crush:5},_targetTeam:i.a.enemy,require:function(){if(!this.testRequirements())return!1;var t=e.grid.getHexMap(this.creature.x-2,this.creature.y-2,0,!1,n.i);return!!this.atLeastOneTarget(t,{team:this._targetTeam})},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:a.id,flipped:a.flipped,hexes:e.grid.getHexMap(a.x-2,a.y-2,0,!1,n.i)})},activate:function(t){this.end();var a=new r.a(this.creature,this.damages,1,[],e);t.takeDamage(a),this.creature.effects.forEach((function(e){"Offense++"==e.name&&e.deleteEffect()}))}}]}}}]);