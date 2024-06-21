PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"audio": {
        "autoplay": true,
        "id": "gAudio",
        "loop": true,
        "src": "M2.mp3"
    },
"control": {
        "enablevrcontroller": true,
        "mousemode": "drag",
        "touchmode": "drag",
        "vrdisplay": "auto"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#000; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; border-radius: 3px; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.6);"
    },
"include": [
        {
            "src": "360virtualtour_controls.js"
        },
        {
            "src": "panoStudioViewerGallery.js"
        }
    ],
"logo": {
        "href": "",
        "src": "LCPano.png",
        "style": "max-width: 80%;",
        "target": "_blank"
    },
"node": {
	"autoplay": {
	        "pan": 2,
	        "restart": 5,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 360,
	        "maxtilt": 90,
	        "minpan": 0,
	        "mintilt": -90
	    },
	"data": {
	        "id": "localData",
	        "infoTextBox": {
	            "align": "center",
	            "captureMouse": true,
	            "checkHover": true,
	            "id": "infobox",
	            "maxwidth": "66%",
	            "onclick": "function(){ this.viewer.action('hideMessage'); } ",
	            "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#000; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; border-radius: 3px; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.6);",
	            "text": "<div style='padding: 16px;'>USE YOUR MOUSE FOR <strong>PAN, TILT &amp; ZOOM&nbsp;&nbsp; &nbsp;|&nbsp;&nbsp; </strong>&nbsp;TO <strong>CLOSE </strong>THIS INFO BOX, JUST <strong>CLICK HERE &nbsp;&nbsp;<br> </strong> <strong><a href=\"https://www.riolento.com/\">RIO LENTO</a> | +961.4.91 56 56</strong></p>\n\n<!DOCTYPE html>\n<html>\n<head>\n<style>\n\nh5 {text-align: right;}\n\n</style>\n</head>\n<body>\n\n<h5><i>Powered by</i> <b>: LibanCiel sarl</b></div>",
	            "xoff": 0,
	            "yoff": -30
	        }
	    },
	"hotspot": [
	        {
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "",
	            "opacity": "1.00;1.00",
	            "position": "234.4283,28.4170",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "RIO LENTO - Parking Area"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "Island Restaurant.js",
	            "opacity": "1.00;1.00",
	            "position": "214.0973,40.6777",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Island Restaurant"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "Kiddie pool.js",
	            "opacity": "1.00;1.00",
	            "position": "202.6901,46.2649",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Kiddie pool"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "Hello slide and Black hole.js",
	            "opacity": "1.00;1.00",
	            "position": "196.4822,28.3394",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Hello slide and Black hole"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "Snack and Kiosk.js",
	            "opacity": "1.00;1.00",
	            "position": "189.4982,38.6601",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Snack and Kiosk"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "Sidewinder.js",
	            "opacity": "1.00;1.00",
	            "position": "164.2783,25.6234",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Sidewinder"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "Body slides.js",
	            "opacity": "1.00;1.00",
	            "position": "147.1288,26.5546",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Body slides"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "bitmap": "Video Icon.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo7",
	                "maxwidth": "66%",
	                "onclick": "function(){ this.viewer.action('hideMessage'); } ",
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#000; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; border-radius: 3px; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.6);",
	                "text": "<div style='padding: 16px;'><video width=\"640\" height=\"480\" controls>\n   <source src=\"1.mp4\" type=\"video/mp4\">\n   <source src=\"1.ogg\" type=\"video/ogg\">\n   Your browser does not support the video tag.\n</video> </div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": "function(){ this.viewer.action('toggleMessage',this.hsinfo); }",
	            "opacity": "1.00;1.00",
	            "position": "174.8319,41.2985",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "<object width=\"600\" height=\"400\" data=\"1.MP4\">\n</object><br>"
	            },
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.0667,
	                "frames": 32,
	                "height": 42,
	                "width": 102
	            },
	            "bitmap": "pap_perspectiveArrow.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "",
	            "opacity": "1.00;1.00",
	            "position": "212.1573,33.6937",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "WC"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "Wave pool.js",
	            "opacity": "1.00;1.00",
	            "position": "163.3782,37.7444",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Wave pool"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        }
	    ],
	"hotspots": {
	        "visible": true
	    },
	"id": "360virtualtour",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"360virtualtour_tiles/360virtualtour_t_1b_%0y_%0x.jpg"},"down":{"src":"360virtualtour_tiles/360virtualtour_t_1d_%0y_%0x.jpg"},"front":{"src":"360virtualtour_tiles/360virtualtour_t_1f_%0y_%0x.jpg"},"height":7383,"left":{"src":"360virtualtour_tiles/360virtualtour_t_1l_%0y_%0x.jpg"},"right":{"src":"360virtualtour_tiles/360virtualtour_t_1r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"360virtualtour_tiles/360virtualtour_t_1u_%0y_%0x.jpg"},"width":7383},{"back":{"src":"360virtualtour_tiles/360virtualtour_t_2b_%0y_%0x.jpg"},"down":{"src":"360virtualtour_tiles/360virtualtour_t_2d_%0y_%0x.jpg"},"front":{"src":"360virtualtour_tiles/360virtualtour_t_2f_%0y_%0x.jpg"},"height":3692,"left":{"src":"360virtualtour_tiles/360virtualtour_t_2l_%0y_%0x.jpg"},"right":{"src":"360virtualtour_tiles/360virtualtour_t_2r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"360virtualtour_tiles/360virtualtour_t_2u_%0y_%0x.jpg"},"width":3692},{"back":{"src":"360virtualtour_tiles/360virtualtour_t_3b_%0y_%0x.jpg"},"down":{"src":"360virtualtour_tiles/360virtualtour_t_3d_%0y_%0x.jpg"},"front":{"src":"360virtualtour_tiles/360virtualtour_t_3f_%0y_%0x.jpg"},"height":1846,"left":{"src":"360virtualtour_tiles/360virtualtour_t_3l_%0y_%0x.jpg"},"right":{"src":"360virtualtour_tiles/360virtualtour_t_3r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"360virtualtour_tiles/360virtualtour_t_3u_%0y_%0x.jpg"},"width":1846},{"back":{"src":"360virtualtour_tiles/360virtualtour_t_4b_%0y_%0x.jpg"},"down":{"src":"360virtualtour_tiles/360virtualtour_t_4d_%0y_%0x.jpg"},"front":{"src":"360virtualtour_tiles/360virtualtour_t_4f_%0y_%0x.jpg"},"height":923,"left":{"src":"360virtualtour_tiles/360virtualtour_t_4l_%0y_%0x.jpg"},"right":{"src":"360virtualtour_tiles/360virtualtour_t_4r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"360virtualtour_tiles/360virtualtour_t_4u_%0y_%0x.jpg"},"width":923},{"back":{"src":"360virtualtour_tiles/360virtualtour_t_5b_%0y_%0x.jpg"},"down":{"src":"360virtualtour_tiles/360virtualtour_t_5d_%0y_%0x.jpg"},"front":{"src":"360virtualtour_tiles/360virtualtour_t_5f_%0y_%0x.jpg"},"height":462,"left":{"src":"360virtualtour_tiles/360virtualtour_t_5l_%0y_%0x.jpg"},"right":{"src":"360virtualtour_tiles/360virtualtour_t_5r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"360virtualtour_tiles/360virtualtour_t_5u_%0y_%0x.jpg"},"width":462}],"multilevel":true,"preview":{"src":"360virtualtour_tiles/360virtualtour_preview.jpg"},"projection":"cubic"},
	"textbox": [
	        {
	            "align": "top",
	            "style": " color:#ffffff; font-family: Arial,Helvetica,sans-serif; text-shadow: 0px 0px 3.8px #000000, 0px 0px 2.5px #000000, 0px 0px 1.7px #000000; font-size: 12px; font-weight: bold; text-align:center;",
	            "text": "360° Virtual Tour",
	            "yoff": "4px"
	        }
	    ],
	"view": {
	        "hfov": 106,
	        "pan": 190.43,
	        "tilt": 43.84
	    }
},
"version": "4.1"
}
}