(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{313:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r(114),n=r(29),s=r(45),u=r(11),c=r(5);t.default=function(e){e.abilities[31]=[{triggerFunc:function(){return this.isUpgraded()?"onStartPhase onEndPhase":"onStartPhase"},require:function(){return this.testRequirements()},activate:function(){var t=this.creature.getHexMap(s.p);if(!(t.length<1)){var r=t[0].creature;if(r&&Object(n.b)(this.creature,r,n.a.enemy)){this.end();var i=new a.a(this.creature,this.damages,1,[],e);r.takeDamage(i),this.setUsed(!1)}}}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.j),{team:this._targetTeam})},query:function(){var t=this,r=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:r.id,flipped:r.player.flipped,hexes:r.getHexMap(s.j)})},activate:function(t){this.end();var r=new a.a(this.creature,this.damages,1,[],e);if(t.takeDamage(r),this.isUpgraded()){var i=Math.min(8,t.energy);t.energy-=i,this.creature.recharge(i),e.log("%CreatureName"+this.creature.id+"% steals "+i+" energy from %CreatureName"+t.id+"%")}}},{trigger:"onQuery",require:function(){return this.isUpgraded()?(this.requirements={energy:30},this.costs={energy:30}):(this.requirements={energy:40},this.costs={energy:40}),this.testRequirements()},query:function(){var t=this,r=this.creature,i=s.r,a=s.d,c=[u.b(e.grid.getHexMap(r.x,r.y-2,0,!1,a),!0,!0,r.id).concat(u.b(e.grid.getHexMap(r.x,r.y,0,!1,i),!0,!0,r.id),u.b(e.grid.getHexMap(r.x,r.y,0,!1,a),!0,!0,r.id)),u.b(e.grid.getHexMap(r.x-1,r.y-2,0,!0,a),!0,!0,r.id).concat(u.b(e.grid.getHexMap(r.x-1,r.y,0,!0,i),!0,!0,r.id),u.b(e.grid.getHexMap(r.x-1,r.y,0,!0,a),!0,!0,r.id))];c[0].choiceId=0,c[1].choiceId=1,e.grid.queryChoice({fnOnCancel:function(){e.activeCreature.queryMove(),e.grid.clearHexViewAlterations()},fnOnConfirm:function(){t.animation.apply(t,arguments)},team:n.a.both,id:r.id,requireCreature:!1,choices:c})},activate:function(t){this.end();var r,i=this.creature,n=s.r,d=s.d;r=0===t.choiceId?[u.b(e.grid.getHexMap(i.x,i.y-2,0,!1,d),!0,!0,i.id),u.b(e.grid.getHexMap(i.x,i.y,0,!1,n),!0,!0,i.id),u.b(e.grid.getHexMap(i.x,i.y,0,!1,d),!0,!0,i.id)]:[u.b(e.grid.getHexMap(i.x-1,i.y-2,0,!0,d),!0,!0,i.id),u.b(e.grid.getHexMap(i.x-1,i.y,0,!0,n),!0,!0,i.id),u.b(e.grid.getHexMap(i.x-1,i.y,0,!0,d),!0,!0,i.id)];for(var g=0;g<r.length;g++)if(0!==r[g].length&&r[g][r[g].length-1].creature instanceof c.a){var h=r[g][r[g].length-1].creature,o=new a.a(this.creature,this.damages,1,[],e);h.takeDamage(o)}else this.token+=1;this.token>0&&e.log("%CreatureName"+this.creature.id+"% missed "+this.token+" rocket(s)")}},{trigger:"onQuery",require:function(){return!!this.testRequirements()&&(0!==this.creature.abilities[2].token||(this.message="No rocket launched.",!1))},query:function(){var t=this,r=this.creature,i=e.grid.allhexes.slice(0);e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:n.a.enemy,id:r.id,flipped:r.player.flipped,hexes:i})},activate:function(t){this.end();var r=t,n=this.creature.abilities[2],s=n.token;this.isUpgraded()||(s=Math.min(s,2)),n.token-=s;var u=i.extend({},n.damages);for(var c in u)({}).hasOwnProperty.call(u,c)&&(u[c]*=s);e.log("%CreatureName"+this.creature.id+"% redirects "+s+" rocket(s)");var d=new a.a(this.creature,u,1,[],e);r.takeDamage(d)}}]}}}]);