(function(g){var window=this;'use strict';var L6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.ke=!1;this.player=a;this.T(a,"minimized",this.ag);this.T(a,"onStateChange",this.WG)},M6=function(a){g.CM.call(this,a);
this.i=new L6(this.player);this.i.hide();g.pM(this.player,this.i.element,4);a.Pe()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(L6,g.V);g.k=L6.prototype;
g.k.OE=function(){this.tooltip=new g.kQ(this.player,this);g.I(this,this.tooltip);g.pM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.vN(this.player);g.I(this,this.zc);this.Fg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Fg);this.Fg.Da(this.element);this.T(this.Fg.element,"click",this.CA);var a=new g.V({G:"button",Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.rK()]});g.I(this,a);a.Da(this.Fg.element);this.T(a.element,"click",this.Ki);
a=new g.$1(this.player,this);g.I(this,a);a.Da(this.Fg.element);this.Gp=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.Gp);this.Gp.Da(this.Fg.element);this.T(this.Gp.element,"click",this.CA);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Da(this.Gp.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Da(this.Gp.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Da(this.Gp.element);this.BN=new g.VO(this.player,
this,!1);g.I(this,this.BN);this.BN.Da(b.element);b=new g.TO(this.player,this);g.I(this,b);b.Da(a.element);this.nextButton=new g.VO(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Da(c.element);this.Ig=new g.XP(this.player,this);g.I(this,this.Ig);this.Ig.Da(this.Fg.element);this.Lc=new g.bP(this.player,this);g.I(this,this.Lc);g.pM(this.player,this.Lc.element,4);this.qA=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.qA);g.pM(this.player,this.qA.element,4);a=new g.V({G:"button",
Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.rK()]});g.I(this,a);a.Da(this.qA.element);this.T(a.element,"click",this.Ki);a=new g.V({G:"button",Ja:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.wK()]});g.I(this,a);a.Da(this.qA.element);this.T(a.element,"click",this.dW);this.T(this.player,"presentingplayerstatechange",this.Pc);this.T(this.player,"appresize",this.zb);this.T(this.player,"fullscreentoggled",this.zb);this.zb()};
g.k.show=function(){this.Pd=new g.Ur(this.tq,null,this);this.Pd.start();this.ke||(this.OE(),this.ke=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Lc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.V.prototype.hide.call(this);this.player.Pe()||(this.ke&&this.Lc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.V.prototype.ya.call(this)};
g.k.Ki=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.k.dW=function(){this.player.playVideo()};
g.k.CA=function(a){if(a.target===this.Fg.element||a.target===this.Gp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.uJ(this.player.Ab())?this.player.pauseVideo():this.player.playVideo():this.player.Pa("onExpandMiniplayer")};
g.k.ag=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Pe())};
g.k.Ad=function(){this.Lc.Tb();this.Ig.Tb()};
g.k.tq=function(){this.Ad();this.Pd&&this.Pd.start()};
g.k.Pc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.zb=function(){g.oP(this.Lc,0,this.player.eb().getPlayerSize().width,!1);g.cP(this.Lc)};
g.k.WG=function(a){this.player.Pe()&&(0===a?this.hide():this.show())};
g.k.dc=function(){return this.tooltip};
g.k.Ve=function(){return!1};
g.k.yf=function(){return!1};
g.k.Ei=function(){return!1};
g.k.sx=function(){};
g.k.zn=function(){};
g.k.zs=function(){};
g.k.Nn=function(){return null};
g.k.Tv=function(){return null};
g.k.zj=function(){return new g.Wm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Bq=function(a,b,c,d,e){var f=0,h=d=0,l=g.pn(a);if(b){c=g.bs(b,"ytp-prev-button")||g.bs(b,"ytp-next-button");var m=g.bs(b,"ytp-play-button"),n=g.bs(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.nn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.bs(b,"ytp-miniplayer-button-top-left"),f=g.nn(b,this.element),b=g.pn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.vg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.ql=function(){};
g.k.Ik=function(){return!1};g.w(M6,g.CM);M6.prototype.create=function(){};
M6.prototype.Wi=function(){return!1};
M6.prototype.load=function(){this.player.hideControls();this.i.show()};
M6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.BM("miniplayer",M6);})(_yt_player);
