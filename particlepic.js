(function (window, undefined) {
    'use strict';

    function Particle(targetX, targetY, startX, startY, targetSize, color) {
        this.tx = targetX;
        this.ty = targetY;
        this.x = startX;
        this.y = startY;
        this.ts = targetSize;
        this.color = color;

    }

    Particle.prototype = {
        constructor: Particle,
        update: function () {
        }
    };

    function ParticlePic(canvas, image) {
        this._can = canvas;
        this._particles = [];
        this._init(image);
        this._ani = 0;


    }

    ParticlePic.prototype = {
        constructor: ParticlePic,
        start: function () {
            this._ani = requestAnimationFrame(this.start);
            this._update();
            this._draw();
        }.bind(this),
        stop: function () {
            cancelRequestAnimationFrame(this._ani);
        }.bind(this),
        _update: function () {
        },
        _draw: function () {
        },
        _init: function (image) {
            this._height = this._can.height;
            this._width = this._can.width;
            this._loadImage(image);
            this.start();
        },
        _loadImage: function (image) {
            var tCtx = document.createElement('canvas').getContext('2d'),
                tImg = new Image();
            tImg.onload = function () {
                var w = tCtx.canvas.width = tImg.width;
                var h = tCtx.canvas.height = tImg.height;
                tCtx.drawImage(tImg, 0, 0);
                var imgData = tCtx.getImageData(0, 0, w, h).data;
                var size = 10;
                for (var x = 0; x < w; x++)
                    for (var y = 0; y < h; y++) {
                        var i = (y * w + x) * 4;
                        if(imgData[i+3] > 0){


                        }

                    }

            };
            tImg.src = image;

        }
    };

    if (typeof window.module === object && typeof window.module.exports !== undefined) module.exports = ParticlePic;
    else window.ParticlePic = ParticlePic;
}(window));