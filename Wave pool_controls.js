PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"actions": [
        {
            "func": "function(){ var enabled = this.viewer.gyroscopeEnabled(); var gb = this.get('gyrobutton'); if (gb){ gb.skin = enabled?gb.enabledskin:gb.disabledskin; gb.updateSkins(); } }",
            "id": "updateGyroButton"
        },
        {
            "func": "function(a){ var d=this.viewer.get('thumbnailGallery');if (d&&!d.collapsing){d.collapsing = !0;if (!d.visible){ d.viewer.action('hideMap'); var th = (d.thumbnailHeight+2*d.thumbnailPadding); d.setVisible(true); d.style = 'opacity: 1.0;'; d.updateStyles(); var o = d.viewer.get('map'); if (!!o&&o.align==d.align){ d.height = o.height; d.updateSize(); } d.tween({'time': 0.3, 'transition': 'easeInOutSine', 'height': th, 'onUpdate': function(a){ a.updateSize(); },'onComplete': function(a){ a.collapsing = !1; a.height = th; a.updateSize(); } });} else { d.style = 'opacity: 0.0;'; d.updateStyles(); d.tween({'time': 0.3, 'transition': 'easeInOutSine', 'height': 0, 'onUpdate': function(a){ a.updateSize(); },'onComplete': function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); } });}}}",
            "id": "toggleGallery"
        },
        {
            "func": "function(a){ var d=this.viewer.get('thumbnailGallery');if (d&&d.visible&&!d.collapsing){ d.collapsing = !0; d.style = 'opacity: 0.0;'; d.updateStyles(); d.tween({'time': 0.3, 'transition': 'easeInOutSine', 'height': 0, 'onUpdate': function(a){ a.updateSize();  },'onComplete': function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); }});}}",
            "id": "hideGallery"
        },
        {
            "func": "function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan,0,100,1.0,0,'easeInOutSine',true); this.tween({'time': 1.0, 'lp': 0.0, 'transition': 'easeInOutSine', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); }",
            "id": "leaveLittlePlanet"
        },
        {
            "func": "function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan+90,90,150,1.0,0,'easeInOutSine',true); this.tween({'time': 1.0, 'lp': 1.0, 'transition': 'easeInOutSine', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); }",
            "id": "enterLittlePlanet"
        },
        {
            "func": "function(a){ var id = this.viewer.currentMBId; if (!!id&&(a.id!=id)){this.viewer.action('hideMessage');} if (a.id!=id){ var s=this.viewer.get('globalData'); if (s&&s.messageBoxStyle){ a.style = s.messageBoxStyle; }this.viewer.currentMBId=null; if (!this.viewer.isVRModeEnabled()){ this.viewer.add('textbox',a); this.viewer.currentMBId=a.id; } } }",
            "id": "showMessage"
        },
        {
            "func": "function(){ if (this.viewer.currentMBId) this.viewer.remove(this.viewer.currentMBId); this.viewer.currentMBId=null; }",
            "id": "hideMessage"
        },
        {
            "func": "function(a){ var id = this.viewer.currentMBId; if (a.id!=id){ this.viewer.action('showMessage',a); } else { this.viewer.action('hideMessage'); } }",
            "id": "toggleMessage"
        }
    ],
"button": [
        {
            "align": "leftbottom",
            "height": 28,
            "id": "showTbButton",
            "onclick": "function(){ var tb = this.get('toolbar'); if (tb.running) return; tb.running = true; tb.tween({'time': 0.75, 'yoff': 10,'onInit': function(a){ a.setVisible(true); a.style = 'opacity: 1.0;'; a.updateStyles(); }, 'onUpdate': function(a){ a.updateAlign(); } });this.tween({ 'time': 0.75, 'yoff' : -52,'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onUpdate' : function(a) { a.updateAlign(); }, 'onComplete': function(a){ a.setVisible(false);  tb.running = false; }}); var ops=ops2=false; var btn = this.get('galleryBtnPrev'); btn&&this.viewer.hasGallery&&btn.tween({ 'time': 0.75, 'xoff' : 8, 'onInit': function(a){ a.setVisible(true); }, 'onUpdate' : function(a){ if (!ops){a.style = 'opacity: 1.0;'; a.updateStyles(); ops=true;} a.updateAlign(); } });btn = this.get('galleryBtnNext'); btn&& this.viewer.hasGallery&& btn.tween({ 'time': 0.75, 'xoff' : 8, 'onInit': function(a){ a.setVisible(true); }, 'onUpdate' : function(a) { if (!ops2){a.style = 'opacity: 1.0;'; a.updateStyles(); ops2=true;} a.updateAlign(); } }); }",
            "oninit": "function(){ this.setVisible(false);}",
            "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,128,192,64,64,0,4,24,24)",
            "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,192,64,64,0,4,24,24)",
            "style": " border-radius: 50%; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.0); transition: background-color 100ms; transition: opacity 0.75s;",
            "styleactive": " background-color: rgba(255,255,255,0.66);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); transition: opacity 0.75s;",
            "stylehover": " background-color: rgba(255,255,255,0.33);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); transition: opacity 0.75s;",
            "width": 28,
            "xoff": 8,
            "yoff": -52
        },
        {
            "align": "leftbottom",
            "height": 28,
            "id": "leftStereoButton",
            "onclick": "function(){ this.viewer.exitVRMode();  } ",
            "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,192,256,64,64,2,2,24,24)",
            "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,256,64,64,2,2,24,24)",
            "skinhover": "dim(-10px,-10px,48px,48px,48,48);comp(0.5);copy(defaultSkin,0,128,64,64,0,0,48,48);comp(1.0);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,256,64,64,12,12,24,24)",
            "style": " border-radius: 50%; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.0); transition: background-color 100ms;",
            "styleactive": " background-color: rgba(255,255,255,0.66);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1);",
            "stylehover": " background-color: rgba(255,255,255,0.33);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1);",
            "visible": false,
            "width": 28,
            "xoff": 8,
            "yoff": 8
        },
        {
            "align": "bottom",
            "height": 28,
            "id": "rightStereoButton",
            "onclick": "function(){ this.viewer.exitVRMode();  } ",
            "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,192,256,64,64,2,2,24,24)",
            "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,256,64,64,2,2,24,24)",
            "skinhover": "dim(-10px,-10px,48px,48px,48,48);comp(0.5);copy(defaultSkin,0,128,64,64,0,0,48,48);comp(1.0);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,256,64,64,12,12,24,24)",
            "style": " border-radius: 50%; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.0); transition: background-color 100ms;",
            "styleactive": " background-color: rgba(255,255,255,0.66);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1);",
            "stylehover": " background-color: rgba(255,255,255,0.33);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1);",
            "visible": false,
            "width": 28,
            "xoff": 22,
            "yoff": 8
        },
        {
            "align": "left",
            "height": 28,
            "id": "galleryBtnPrev",
            "onclick": "function(){ var g = this.viewer.gallery(); if (!!g){ g.set(g.previous());}}",
            "oninit": "function(){ var g = this.viewer.gallery(); if ((!!g)&&g.length>1){this.setVisible(true);}}",
            "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,192,384,64,64,2,2,24,24)",
            "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,384,64,64,2,2,24,24)",
            "style": " border-radius: 50%; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.0); transition: background-color 100ms,opacity 0.75s;",
            "styleactive": " background-color: rgba(255,255,255,0.66);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); opacity: 1.0; transition: opacity 0.75s;",
            "stylehover": " background-color: rgba(255,255,255,0.33);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); opacity: 1.0; transition: opacity 0.75s;",
            "visible": false,
            "width": 28,
            "xoff": 8,
            "yoff": -24
        },
        {
            "align": "right",
            "height": 28,
            "id": "galleryBtnNext",
            "onclick": "function(){ var g = this.viewer.gallery(); if (!!g){ g.set(g.next());}}",
            "oninit": "function(){ var g = this.viewer.gallery(); if ((!!g)&&g.length>1){this.setVisible(true);}}",
            "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,128,384,64,64,2,2,24,24)",
            "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,384,64,64,2,2,24,24)",
            "style": " border-radius: 50%; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.0); transition: background-color 100ms,opacity 0.75s;",
            "styleactive": " background-color: rgba(255,255,255,0.66);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); opacity: 1.0; transition: opacity 0.75s;",
            "stylehover": " background-color: rgba(255,255,255,0.33);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); opacity: 1.0; transition: opacity 0.75s;",
            "visible": false,
            "width": 28,
            "xoff": 8,
            "yoff": -24
        }
    ],
"buttonBox": [
        {
            "align": "bottom",
            "button": [
                {
                    "align": "left",
                    "id": "hideTbButton",
                    "index": 1,
                    "onclick": "function(){ var tb = this.get('toolbar'); if (tb.running) return; tb.running = true;this.viewer.action('hideGallery'); tb.tween({'time': 0.75, 'yoff': -70, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onUpdate': function(a){ a.updateAlign(); },'onComplete': function(a){ a.setVisible(false); tb.running = false; } });var ops=false; this.get('showTbButton').tween({ 'time': 0.75, 'yoff' : 8, 'onInit': function(a){ a.setVisible(true); }, 'onUpdate' : function(a) { if (!ops){a.style = 'opacity: 1.0;'; a.updateStyles(); ops=true;} a.updateAlign(); } }); var btn = this.get('galleryBtnPrev'); btn&&this.viewer.hasGallery&&btn.tween({ 'time': 0.75, 'xoff' : -40, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onComplete': function(a){ a.setVisible(false); }, 'onUpdate' : function(a){ a.updateAlign(); } });btn = this.get('galleryBtnNext'); btn&& this.viewer.hasGallery&& btn.tween({ 'time': 0.75, 'xoff' : -40, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onComplete': function(a){ a.setVisible(false); }, 'onUpdate' : function(a) { a.updateAlign(); } }); }",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,5,5,24,24);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,5,5,24,24);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "left",
                    "id": "gallerybutton",
                    "index": 4,
                    "onclick": "function(){ this.viewer.action('toggleGallery'); }",
                    "oninit": "function(){var g = this.viewer.gallery(); if ((!!g) && g.length>1){ this.setVisible(true);}}",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,320,64,64,5,5,24,24);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,320,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,320,64,64,5,5,24,24);",
                    "visible": false,
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "infobutton",
                    "index": 5,
                    "onclick": "function(){ var d=this.viewer.get('localData'); d&&(d=d.infoTextBox); if(!d){ var d=this.viewer.get('globalData'); d&&(d=d.infoTextBox); } if (!!d){this.viewer.action('toggleMessage',d);} }",
                    "onscenechanged": "function(){ var d=this.viewer.get('localData'); var g=this.viewer.get('globalData'); var o=d&&d.infoTextBox||g&&g.infoTextBox; this.setVisible(!!o); }",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,5,5,24,24);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,5,5,24,24);",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "hotspotsButton",
                    "index": 6,
                    "onclick": "function(){ this.viewer.toggleHotspots(); }",
                    "onscenechanged": "function(){ this.setVisible(this.viewer.hotspots()&&this.viewer.hotspots().length>0); } ",
                    "priority": 1,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,256,64,64,5,5,24,24);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,256,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,256,64,64,5,5,24,24);",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 7,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,5,5,24,24);",
                    "type": 1,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 8,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,5,5,24,24);",
                    "type": 2,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 9,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,5,5,24,24);",
                    "type": 3,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 10,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,5,5,24,24);",
                    "type": 4,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 11,
                    "priority": 2,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,5,5,24,24);",
                    "type": 5,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 12,
                    "priority": 2,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,5,5,24,24);",
                    "type": 6,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "playbutton",
                    "index": 13,
                    "onclick": "function(){ if (this.viewer.isPlaying()) this.viewer.stopAutoPlay(); else this.viewer.startAutoPlay(); }",
                    "priority": 1,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,5,5,24,24)",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "vrButton",
                    "index": 14,
                    "onclick": "function(){ if (this.viewer.isVRModeEnabled()){ this.viewer.exitVRMode();} else { this.viewer.enterVRMode(); } } ",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,256,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,256,64,64,5,5,24,24);",
                    "visible": false,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "disabledskin": "shadow(3,0,0,rgba(0,0,0,1));comp(0.66);copy(defaultSkin,64,128,64,64,5,5,24,24);",
                    "enabledskin": "shadow(3,0,0,rgba(0,0,0,1));comp(1.0);copy(defaultSkin,64,128,64,64,5,5,24,24);",
                    "id": "gyrobutton",
                    "index": 18,
                    "onclick": "function(){ var enabled = this.viewer.enableGyroscope(!this.viewer.gyroscopeEnabled()); } ",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(0.66);copy(defaultSkin,64,128,64,64,5,5,24,24);",
                    "visible": false,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "audiobutton",
                    "index": 17,
                    "onclick": "function(){ var o = this.get('gAudio'); if (!o) o = this.get('lAudio'); if (!!o){ o.isPlaying()?o.pause():o.play(); }   }",
                    "onscenechanged": "function(){ var o = this.get('gAudio')||this.get('lAudio'); this.setVisible(!!o); }",
                    "pauseskin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,5,5,24,24);",
                    "pauseskinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,5,5,24,24);",
                    "playskin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,256,64,64,5,5,24,24);",
                    "playskinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,256,64,64,5,5,24,24);",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,5,5,24,24);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "fullscreenButton",
                    "index": 16,
                    "onclick": "function(){ this.viewer.toggleFullscreen();  } ",
                    "oninit": "function(){ if (!this.viewer.fullscreenSupported()) this.viewer.remove('fullscreenButton');  } ",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,5,5,24,24);",
                    "xoff": 8,
                    "yoff": 0
                }
            ],
            "buttonheight": 34,
            "buttonstyle": "border-radius: 50%; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.0); transition: background-color 100ms;",
            "buttonstyleactive": "background-color: rgba(255,255,255,0.66);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1);",
            "buttonstylehover": "background-color: rgba(255,255,255,0.33);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1);",
            "buttonwidth": 34,
            "galleryElement": {
                "align": "lefttop",
                "contentstyle": "position: absolute; left: 4px; right: 4px; bottom: 4px; color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 11px; text-shadow: 0px 0px 2px #000, 0px 0px 2px #000; font-weight: normal; text-align:center; display: inline; overflow: hidden;",
                "edgeEffect": "tilt",
                "height": "112px",
                "id": "thumbnailGallery",
                "oninit": "function(){ var g = this.viewer.gallery(); if ((!!g) && g.length>1){ this.setVisible(true); } }",
                "selectionstyle": "border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 1px 1px;",
                "style": "opacity: 1; transition: opacity 0.5s",
                "thumbnailHeight": 96,
                "thumbnailPadding": 8,
                "thumbnailWidth": 96,
                "thumbstyle": "border-radius: 2px; box-shadow: rgba(0, 0, 0, 1) 0px 0px 1px 1px;",
                "thumbstylehover": "border-radius: 2px; box-shadow: rgba(0, 0, 0, 1) 0px 0px 1px 1px;",
                "visible": false
            },
            "height": "48px",
            "hidestyle": "",
            "id": "toolbar",
            "spacing": 8,
            "style": "max-width: 100%;background: rgba(0,0,0,0.0); opacity: 1.0; transition: opacity 0.75s;",
            "visible": true,
            "width": "540px",
            "yoff": 10
        }
    ],
"contextmenu": {
        "id": "menu",
        "items": [
            {
                "id": "fullscreenItem",
                "onclick": "function(){ this.viewer.toggleFullscreen(); }",
                "oninit": "function(){ this.caption = this.viewer.tr('Fullscreen'); if (!this.viewer.fullscreenSupported()) this.visible = false;  } "
            },
            {
                "caption": "-"
            },
            {
                "id": "normalView",
                "onclick": "function(){  if (this.viewer.fisheyeDistortion()!=0.0){ this.viewer.action('leaveLittlePlanet'); } }",
                "oninit": "function(){  this.caption = this.viewer.tr('Normal View'); }"
            },
            {
                "id": "littlePlanetView",
                "onclick": "function(){ if (this.viewer.fisheyeDistortion()!=1.0){ this.viewer.action('enterLittlePlanet'); } }",
                "oninit": "function(){  this.caption = this.viewer.tr('LittlePlanet View'); }"
            },
            {
                "caption": "-"
            },
            {
                "id": "gyroItem",
                "onclick": "function(){  var gb = this.get('gyrobutton'); if (gb){ gb.onclick(); } else { this.viewer.enableGyroscope(!this.viewer.gyroscopeEnabled()); } }",
                "oninit": "function(){  this.caption = this.viewer.tr('Gyroscope Control'); }"
            }
        ],
        "onshow": "function(){ var view1 = this.getItem('normalView'); if (view1){ view1.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular()) ? true : false; } var view2 = this.getItem('littlePlanetView'); if (view2){ view2.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular())?true:false; } var gyro = this.getItem('gyroItem'); if (gyro){ gyro.visible = this.viewer.gyroAvailable?true:false; }  this.update(); }",
        "style": "background-color: rgba(255,255,255,0.8); box-shadow: 4px 4px 4px rgba(0,0,0,0.5); border-radius: 3px;"
    },
"events": {
        "id": "mainEvents",
        "onentervrmode": "function(){ this.viewer.action('hideMessage'); var tb = this.get('toolbar'); tb&&tb.setVisible(false); tb = this.get('galleryBtnPrev'); tb&&this.viewer.hasGallery&&tb.setVisible(false); tb = this.get('galleryBtnNext'); tb&&this.viewer.hasGallery&&tb.setVisible(false); tb = this.get('compass'); tb&&tb.setVisible(false); var lvrb = this.get('leftStereoButton'); lvrb&&lvrb.setVisible(true); var rvrb = this.get('rightStereoButton'); rvrb&&rvrb.setVisible(true); } ",
        "onexit": "function(){  var d=this.viewer.get('localData'); if (!!d&&d.infoTextBox){ this.viewer.action('hideMessage'); } this.viewer.gyroWasEnabled = this.viewer.gyroAvailable&&this.viewer.gyroscopeEnabled();\t}",
        "onexitvrmode": "function(){  var tb = this.get('toolbar'); tb&&tb.setVisible(true); var g = this.viewer.gallery(); tb = this.get('galleryBtnPrev'); tb&&this.viewer.hasGallery&&tb.setVisible(g&&g.length>1); tb = this.get('galleryBtnNext'); tb&&this.viewer.hasGallery&&tb.setVisible(g&&g.length>1); tb = this.get('compass'); tb&&tb.setVisible(true); var lvrb = this.get('leftStereoButton'); lvrb&&lvrb.setVisible(false); var rvrb = this.get('rightStereoButton'); rvrb&&rvrb.setVisible(false); } ",
        "ongyroscopeavailable": "function(available){ this.viewer.gyroAvailable = available; var o = this.get('gyrobutton'); if(!!o){ o.setVisible(available&&this.viewer.panoType()==0); available&&o.onclick(); } } ",
        "ongyroscopetoggle": "function(enabled){ this.viewer.action('updateGyroButton'); }",
        "oninit": "function(){ var g = this.viewer.gallery(); this.viewer.hasGallery = ((!!g) && g.length>1); this.viewer.checkForGyroscope(); }",
        "onplay": "function(){ var o = this.get('playbutton'); if (!!o){ o.sbackup = o.skin; o.sabackup = o.skinactive; o.skin = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,5,5,24,24)'; o.skinactive = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,5,5,24,24)'; o.updateSkins(); } } ",
        "onresize": "function(){ this.viewer.action('resizeMap');  }",
        "onscenechanged": "function(){ var o = this.get('gyrobutton'); if(!!o){ o.setVisible(this.viewer.gyroAvailable&&this.viewer.panoType()==0); this.viewer.gyroAvailable&&this.viewer.panoType()==0&&this.viewer.gyroWasEnabled&&o.onclick(); } if (this.viewer.isVRModeEnabled()){this.viewer.enableGyroscope(!0);}}",
        "onstartaudio": "function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.playskin; o.skinhover = o.playskinhover; o.skinactive = o.playskinactive; o.updateSkins(); }} } ",
        "onstop": "function(){ var o = this.get('playbutton'); if (!!o){ o.skin = o.sbackup; o.skinactive = o.sabackup; o.updateSkins(); } } ",
        "onstopaudio": "function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.pauseskin; o.skinhover = o.pauseskinhover; o.skinactive = o.pauseskinactive; o.updateSkins(); }} } ",
        "onuseswebgl": "function(available){ this.viewer.webglAvailable = available; if (available){ var vr = this.get('vrButton'); vr&&vr.setVisible(true); } } "
    },
"settings": {
        "safeareamargin": "-8 -8 -8 -8"
    },
"translate": {
        "de": {
            "Fullscreen": "Vollbild",
            "Gyroscope Control": "Gyroskop-Steuerung",
            "LittlePlanet View": "LittlePlanet-Ansicht",
            "Normal View": "Normale Ansicht"
        }
    }
}
}