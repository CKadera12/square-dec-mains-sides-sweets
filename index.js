(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[302,170,95,57],[352,229,47,52],[399,170,38,43],[302,317,70,48],[302,0,119,110],[302,112,110,56],[302,229,48,86],[0,252,300,250],[0,0,300,250]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.sixteenbeans = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sixteenblue = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sixteencandle = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sixteencup = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sixteenmeats = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sixteenpie = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.sixteenspinach = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sixteentablejpgcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.squaredecholidaymainssidessweets = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68290F").s().p("AqoZMQk7iFjyjyQjxjyiFk6QiKlFAAlkQAAljCKlFQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE6CFDyDxQDyDyCFE7QCKFFAAFjQAAFkiKFFQiFE7jyDxQjxDyk7CFQlFCKlkAAQljAAlFiKg");
	this.shape.setTransform(175,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,350,350), null);


(lib.sixteentableuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteentablejpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteentableuse, new cjs.Rectangle(-150,-125,300,250), null);


(lib.sixteentable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.squaredecholidaymainssidessweets();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteentable, new cjs.Rectangle(-150,-125,300,250), null);


(lib.sixteenspinach_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenspinach();
	this.instance.parent = this;
	this.instance.setTransform(-24,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenspinach_1, new cjs.Rectangle(-24,-43,48,86), null);


(lib.sixteenrec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AndCXQg+AAgtgsQgsgsAAg/IAAAAQAAg+AsgsQAtgsA+AAIO7AAQA+AAAsAsQAtAsAAA+IAAAAQAAA/gtAsQgsAsg+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenrec, new cjs.Rectangle(-62.8,-15.1,125.8,30.3), null);


(lib.sixteenpie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenpie();
	this.instance.parent = this;
	this.instance.setTransform(-55,-28);

	this.instance_1 = new lib.sixteenpie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenpie_1, new cjs.Rectangle(-55,-28,110,56), null);


(lib.sixteenmeats_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenmeats();
	this.instance.parent = this;
	this.instance.setTransform(-59.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenmeats_1, new cjs.Rectangle(-59.5,-55,119,110), null);


(lib.sixteencup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteencup();
	this.instance.parent = this;
	this.instance.setTransform(-35,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteencup_1, new cjs.Rectangle(-35,-24,70,48), null);


(lib.sixteencanlde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteencandle();
	this.instance.parent = this;
	this.instance.setTransform(-19,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteencanlde, new cjs.Rectangle(-19,-21.5,38,43), null);


(lib.sixteenblue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenblue();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenblue_1, new cjs.Rectangle(-23.5,-26,47,52), null);


(lib.sixteenbeans_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenbeans();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenbeans_1, new cjs.Rectangle(-47.5,-28.5,95,57), null);


(lib.mainssidessweets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBHIgOgCIgEACIgEABIgDgBIgDgBQgFgEgEgLQgDgLAAgLQAAgEACgDQACgDADAAQAHAAAHALIAEAJQAFAFAHADQAHADAHAAQAKAAAFgEQAFgFAAgHQAAgMgWgLIgIgEQgWgLgHgIQgHgJgBgNQAAgSANgLQAMgLAUAAIAJAAIAJACIAHgCIAEgBQAHAAAHALQAGAKAAAMQAAAFgCADQgCADgEAAQgEAAgDgDIgHgJQgFgJgFgDQgGgDgHAAQgIAAgFAEQgEAFAAAHQgBAGAGAFQAFAFAQAIIACABQAmASAAAWQAAATgPANQgOANgXAAg");
	this.shape.setTransform(102.9,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBSQgHgCgGgEQgEgFgCgHQgCgIAAgVIAAhIIgNAAIgEgBIgBgEIAAgDQAAgFAOgMIAGgFIAFgEQAOgNAGAAIADABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAZIAeAAQAEAAABACQABABAAAEIAAADQABAEgCABQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAIgcAAIgCABIgBADIAABDQAAASADAEQADAFAJAAIALgCIAJgDQADAAACACQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAHgMAIQgMAHgPAAQgHAAgGgDg");
	this.shape_1.setTransform(92.3,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsA0QgTgUAAgeQAAgfATgVQAVgVAeAAQAbAAAPAQQAPAPAAAZQABAJgDADQgDACgKAAIgzAAQgFAAgCgCQgDgCAAgEQAAgEADgCQACgCAFAAIAbAAIAHgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAOQgIAPAAAUQAAAUALAQQALAPAQAAQAKAAAHgCQAIgCAGgFIAFgDQAHgGAEAAQADAAACACQACACAAADQAAADgDAFQgEAFgGAEQgMAKgLAEQgLAFgNAAQgcAAgUgUg");
	this.shape_2.setTransform(80.1,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA0QgTgUAAgeQgBgfAVgVQAUgVAeAAQAbAAAPAQQAQAPAAAZQgBAJgCADQgCACgLAAIg0AAQgEAAgCgCQgDgCAAgEQAAgEADgCQACgCAEAAIAcAAIAHgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAOQgIAPAAAUQAAAUALAQQALAPAQAAQAKAAAIgCQAGgCAHgFIAFgDQAHgGAEAAQADAAACACQACACAAADQAAADgDAFQgEAFgGAEQgMAKgLAEQgLAFgNAAQgcAAgUgUg");
	this.shape_3.setTransform(65.6,19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAPIgQgqQgIgUgGgDIgEgCQgIgDAAgFQAAgFAHgDQAHgCAVAAQATAAAGACQAHADAAAFIgBAEIgDADIgEACQgGACAAADIADAJIALAdIAMAaQADAGACAAQABAAADgEIAGgMIAPgiQAFgNAAgFIgBgFIgDgDIgEgBQgGgDAAgEQAAgFAGgDQAGgCARAAQAOAAAGACQAGADAAAFQAAAFgHADIgFABQgGADgNAdIgDAHIgFAMQggBHgJAAQgJAAgYg4gAhQAIIgEgIIgJgYQgJgXgGgDIgEgCQgIgDAAgFQAAgFAHgDQAHgCAWAAQATAAAGACQAHADAAAFIgBAEIgCADIgFACQgFACAAADIADAMIAKAaIAMAZQADAHACAAQAEAAAEgJIAEgJIADgEQACgCADAAQAEAAACACQABACAAADQAAAEgDAIQgPAfgGALQgGAKgFAAQgKAAgbg/g");
	this.shape_4.setTransform(47.2,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBjQgPgDgKgGQgGgDgDgMQgEgMAAgPQAAgHADgDQACgDAEAAQAHAAAHAMIADAGQAJAPAKAHQAKAHAOAAQAPAAAKgJQALgJAAgNQAAgTgogSIgFgCQghgNgLgMQgLgNAAgTQAAgZASgPQATgQAdAAIAPABIATAEIAGgDIAEgBQADAAADACIAGAHQAEAIADAJQADAJAAAHQAAAFgCACQgDADgDAAQgIAAgHgKIgCgDQgHgKgJgFQgKgFgLAAQgPAAgIAIQgJAHAAAMQAAALAHAIQAHAHAdANIAGACQAYALALAJQAIAGAEAKQAEAJAAALQAAAcgUAQQgTAPgjAAQgQAAgPgDg");
	this.shape_5.setTransform(27.8,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7BTQgQgTgBgdQAAghATgVQASgVAdAAIAKABQAEACACADQACADABADQAAAIgJgBIgEAAIgDAAQgPAAgJANQgKALAAAVQAAAXAKAPQAKAOAQAAQANABAIgJQAIgHAAgPIAAgmIAAg+QAAgKgCgEQgBgEgGgCIgDgBQgJgCAAgFQAAgDADgDQAEgDALgEIAPgEIAMgCQAFAAACADQACACAAAHIAAAGIgBBVIABA5QABANABACIAKADQAHACAAAFQAAAGgTAGIgOAEIgLABQgDAAgCgCQgCgCAAgFIAAgHIAAgCIgBgBIgEADIgHAFQgHAFgIAEQgHACgIAAQgaABgQgTg");
	this.shape_6.setTransform(4.6,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBEQgHgCAAgGQAAgFAHgDIAEgBQADgCACgFIABgOIAAgJIAAgLIAAgOQAAgVgBgHQgBgHgDgBIgHgCQgIgDAAgFQAAgDADgCQACgDAGgCIAUgHIAOgCQAEAAACACQABADAAAEIAAAJIABACIAAAAIABAAIABgBIADgCIADgEQAPgNAQAAQAKgBAJAFQAJAEAHAHQAGAIADAKQACALAAAWIAAARIAAAJIAAAIIABAPQACADADACIAEABQAHADAAAFQAAAFgHADQgGACgVAAQgTAAgHgCQgHgCAAgGQAAgEAHgDIAFgDQAEgBABgGQABgGAAgPQAAgrgFgLQgGgLgOAAQgHAAgGAEQgHAFgEAHQgDAHgBAKQgBAKAAAbQAAANABAEQABAFADABIAFADQAHADAAAEQAAAGgHACQgGACgSAAQgVAAgHgCg");
	this.shape_7.setTransform(-12.2,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBBIgHgIIgGADQgQAMgRAAQgUAAgNgMQgMgLAAgTQAAgWAQgMQAQgMAdAAQAGAAADACQAEACAAAFQAAAIgJAAQgOAAgIAGQgIAHAAALQAAALAHAHQAHAGAMAAQANAAAGgGQAFgFAAgPIAAgzQAAgMgFgHQgFgGgJAAQgHAAgGADQgFADgGAGIgDADQgIALgJAAQgGAAgDgEQgDgDAAgGQAAgNAQgJQAQgJAZAAQAOAAALAEQALAEAGAIQAEAFACAJQABAIAAAUIAAArQAAAIACAEQABAEADAAIAEACQAJACAAAFQAAAGgJAGQgKAFgMAAQgGAAgHgHg");
	this.shape_8.setTransform(-27.5,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBHIgPgCIgEACIgFABIgCgBIgDgBQgEgEgEgLQgFgLAAgLQABgEACgDQACgDADAAQAHAAAHALIAEAJQAFAFAHADQAHADAHAAQAJAAAGgEQAFgFAAgHQAAgMgWgLIgIgEQgVgLgIgIQgHgJAAgNQAAgSAMgLQAMgLAUAAIAJAAIAKACIAGgCIAEgBQAHAAAHALQAGAKAAAMQAAAFgCADQgDADgEAAQgDAAgCgDIgHgJQgGgJgFgDQgGgDgIAAQgGAAgFAEQgGAFAAAHQABAGAFAFQAEAFARAIIABABQAnASAAAWQAAATgPANQgPANgWAAg");
	this.shape_9.setTransform(-48.6,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA0QgUgUAAgeQABgfATgVQAVgVAeAAQAbAAAPAQQAPAPABAZQAAAJgDADQgCACgKAAIg1AAQgEAAgDgCQgCgCAAgEQAAgEACgCQADgCAEAAIAcAAIAHgBQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAOQgIAPAAAUQAAAUALAQQALAPARAAQAJAAAHgCQAIgCAGgFIAFgDQAHgGAEAAQADAAACACQACACAAADQAAADgEAFQgDAFgGAEQgMAKgLAEQgLAFgNAAQgdAAgTgUg");
	this.shape_10.setTransform(-61.7,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8BTQgQgTAAgdQABghASgVQATgVAdAAIAJABQAEACADADQACADAAADQAAAIgJgBIgEAAIgDAAQgPAAgKANQgIALgBAVQABAXAJAPQAKAOAPAAQAPABAHgJQAIgHAAgPIAAgmIAAg+QAAgKgCgEQgCgEgEgCIgFgBQgHgCgBgFQAAgDAEgDQADgDAKgEIAQgEIAMgCQAFAAACADQACACAAAHIAAAGIgCBVIABA5QABANACACIAKADQAIACgBAFQABAGgVAGIgNAEIgLABQgEAAgBgCQgCgCAAgFIAAgHIAAgCIgBgBIgEADIgHAFQgHAFgHAEQgJACgHAAQgbABgQgTg");
	this.shape_11.setTransform(-76.6,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBiQgGgCgBgGQAAgFAHgDIAEgBQADgCACgFIABgPIAAgJIAAgLIAAgOQAAgWgBgFQgBgHgDgBIgGgDQgJgCAAgFQABgDACgCQADgDAFgCIAVgHIANgDQAEAAACADQABADABAGIAAAIIAAAGIgBAiIAAABIgBAiIABASQABAGADABIAGADQAGACABAFQgBAGgGACQgHACgSAAQgUAAgHgCgAgQhFQgGgEAAgIQAAgHAGgGQAHgFAJAAQAIAAAGAFQAGAFAAAHQAAAIgHAFQgGAFgIAAQgKAAgFgFg");
	this.shape_12.setTransform(-89.2,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghBjQgPgDgKgGQgGgDgDgMQgEgMAAgPQAAgHADgDQACgDAEAAQAHAAAHAMIADAGQAJAPAKAHQAKAHAOAAQAPAAAKgJQALgJAAgNQAAgTgogSIgFgCQghgNgLgMQgLgNAAgTQAAgZASgPQATgQAdAAIAPABIATAEIAGgDIAEgBQADAAADACIAGAHQAEAIADAJQADAJAAAHQAAAFgCACQgDADgDAAQgIAAgHgKIgCgDQgHgKgJgFQgKgFgLAAQgPAAgIAIQgJAHAAAMQAAALAHAIQAHAHAdANIAGACQAYALALAJQAIAGAEAKQAEAJAAALQAAAcgUAQQgTAPgjAAQgQAAgPgDg");
	this.shape_13.setTransform(-101.1,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAqQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAIADgGIACgEIAIgPQADgHABgDIgBgDIgFgCQgHgDgDgFQgEgFAAgHQAAgJAGgGQAFgGAJAAQAJAAAFAIQAHAIgBAMQAAAJgDAJQgDAKgKAPIgGALQgDADgCAAQgFAAgCgBg");
	this.shape_14.setTransform(74.5,-5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJBHIgPgCIgEACIgFABIgCgBIgDgBQgEgEgEgLQgFgLAAgLQABgEACgDQACgDADAAQAHAAAHALIAEAJQAFAFAHADQAHADAHAAQAJAAAGgEQAFgFAAgHQAAgMgWgLIgIgEQgVgLgIgIQgHgJAAgNQAAgSAMgLQAMgLAUAAIAJAAIAKACIAGgCIAEgBQAHAAAHALQAGAKAAAMQAAAFgCADQgDADgEAAQgDAAgCgDIgHgJQgGgJgFgDQgGgDgIAAQgGAAgFAEQgGAFAAAHQABAGAFAFQAEAFARAIIABABQAnASAAAWQAAATgPANQgPANgWAAg");
	this.shape_15.setTransform(64.3,-13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDBEQgHgCAAgGQAAgFAHgDIAEgBQADgCACgFIABgOIAAgJIAAgMIAAgNQAAgVgBgHQgBgHgDgBIgHgDQgIgCAAgFQAAgDADgCQACgDAGgCIAUgGIAOgDQAEAAACADQABACAAAEIAAAJIABACIAAAAIABAAIABgBIADgDIADgDQAPgOAQAAQAKAAAJAFQAJAEAHAHQAGAIADAKQACALAAAWIAAASIAAAJIAAAIIABANQACAEADACIAEABQAHADAAAFQAAAGgHACQgGACgVAAQgTAAgHgCQgHgCAAgGQAAgEAHgDIAFgCQAEgCABgGQABgGAAgPQAAgqgFgMQgGgLgOAAQgHAAgGAFQgHAEgEAHQgDAHgBAKQgBAKAAAbQAAAOABADQABAFADACIAFACQAHADAAAEQAAAGgHACQgGADgSgBQgVABgHgDg");
	this.shape_16.setTransform(50.3,-13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXBiQgIgCABgGQAAgFAGgDIAEgBQAEgCABgFIABgPIAAgJIAAgLIAAgOQAAgWgBgFQgBgHgDgBIgHgDQgHgCAAgFQAAgDACgCQADgDAGgCIAUgHIAOgDQAEAAABADQABADAAAGIAAAIIAAAGIgBAiIAAABIAAAiIABASQABAGAEABIAEADQAIACgBAFQABAGgIACQgGACgSAAQgUAAgGgCgAgRhFQgFgEAAgIQAAgHAHgGQAGgFAJAAQAIAAAGAFQAGAFAAAHQAAAIgGAFQgHAFgJAAQgJAAgGgFg");
	this.shape_17.setTransform(38.2,-16.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAYBBIgHgIIgGADQgQAMgRAAQgUAAgNgMQgMgLAAgTQAAgWAQgMQAQgMAdAAQAGAAADACQAEACAAAFQAAAIgJAAQgOAAgIAGQgIAHAAALQAAALAHAHQAHAGAMAAQANAAAGgGQAFgFAAgPIAAgzQAAgMgFgHQgFgGgJAAQgHAAgGADQgFADgGAGIgDADQgIALgJAAQgGAAgDgEQgDgDAAgGQAAgNAQgJQAQgJAZAAQAOAAALAEQALAEAGAIQAEAFACAJQABAIAAAUIAAArQAAAIACAEQABAEADAAIAEACQAJACAAAFQAAAGgJAGQgKAFgMAAQgGAAgHgHg");
	this.shape_18.setTransform(27.2,-13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAzBhQgHgDAAgGQAAgFAIgEIAGgDQADgBABgHQABgGAAgSIAAgHIgBg6IAAgiIgSAtQgoBogIAAQgEAAgIgOQgIgOgUgtIgehEIgBA1IAAAlIABAaQAAAGADABIAGADQAIAEAAAFQAAAGgHADQgHACgRAAQgPAAgGgDQgHgCAAgGQAAgFAHgDQAIgEAAgDQACgGACgkQACgiAAgrIAAgFQAAgOgBgFQgBgFgDgCIgHgDQgIgDAAgGQAAgFAGgCQAGgCAUAAIATAAIAGACQACABAKAZIAIATIAEAKQAhBSACAAQADAAANgeQAMgcARgxIADgIQAEgPAFgFQACgCAFgBIATgBQASAAAHACQAGACAAAFQAAAGgIADIgEACQgEACgBAFQgCAGAAAVIACBNIACAoQABAEAGACIADABIAGADQABACAAADQAAAGgIADQgHACgXAAQgUAAgIgCg");
	this.shape_19.setTransform(7.2,-16.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag/BbQgGgGAAgJQAAgGAFgFQAEgFAHAAIAGABIAEADIAEAFQAEAFACAAQAHAAAIgKQAHgKAAgLQAAgLgKgWIgBgDIgWgwIgNgbQgCgEgIgEQgFgCgCgCQgBgCAAgDQAAgGAHgCQAHgCAUAAQAUAAAHACQAHACAAAGIgBAEIgDACIgFADQgFACAAACIADAKIALAcIAKAaQAEAGACAAQABAAADgGIAJgWIAKgbQAEgKAAgDQAAgEgIgFQgIgEAAgDQAAgFAGgCQAHgCAPAAQARAAAGACQAFACAAAGQAAAFgHACIgGACQgIAEgJAXIgEALIgRArQgXA5gNARQgPARgUAAQgKAAgHgFg");
	this.shape_20.setTransform(-19.5,-10.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYBBIgHgIIgGADQgQAMgRAAQgUAAgNgMQgMgLAAgTQAAgWAQgMQAQgMAdAAQAGAAADACQAEACAAAFQAAAIgJAAQgOAAgIAGQgIAHAAALQAAALAHAHQAHAGAMAAQANAAAGgGQAFgFAAgPIAAgzQAAgMgFgHQgFgGgJAAQgHAAgGADQgFADgGAGIgDADQgIALgJAAQgGAAgDgEQgDgDAAgGQAAgNAQgJQAQgJAZAAQAOAAALAEQALAEAGAIQAEAFACAJQABAIAAAUIAAArQAAAIACAEQABAEADAAIAEACQAJACAAAFQAAAGgJAGQgKAFgMAAQgGAAgHgHg");
	this.shape_21.setTransform(-33.6,-13.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag8BTQgQgSAAgeQABgiASgUQATgVAdAAIAJABQAEABADAEQACADAAADQAAAHgJAAIgEAAIgDAAQgPAAgKAMQgIAMgBAVQABAYAJAOQAKAOAPAAQAPABAHgJQAIgHAAgPIAAgmIAAg/QAAgJgCgEQgCgEgEgCIgFgBQgHgCgBgFQAAgDAEgDQADgDAKgDIAQgFIAMgCQAFABACACQACACAAAGIAAAHIgCBVIABA5QABAOACABIAKADQAIABgBAGQABAGgVAGIgNAEIgLABQgEAAgBgCQgCgCAAgEIAAgIIAAgCIgBgBIgEADIgHAEQgHAHgHACQgJAEgHAAQgbAAgQgTg");
	this.shape_22.setTransform(-48.7,-16.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYBiQgGgCgBgGQAAgFAHgDIAEgBQADgCACgFIABgPIAAgJIAAgLIAAgOQAAgWgBgFQgBgHgDgBIgGgDQgJgCAAgFQABgDACgCQADgDAFgCIAVgHIANgDQAEAAACADQABADABAGIAAAIIAAAGIgBAiIAAABIgBAiIABASQABAGADABIAGADQAGACABAFQgBAGgGACQgHACgSAAQgUAAgHgCgAgQhFQgGgEAAgIQAAgHAGgGQAHgFAJAAQAIAAAGAFQAGAFAAAHQAAAIgHAFQgGAFgIAAQgKAAgFgFg");
	this.shape_23.setTransform(-61.3,-16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWBiQgHgBAAgHQAAgEAGgCIAHgFQACgCABgIIABgbIAAgVIAAgZIAAgLQAAgjgBgJQgCgLgDgBIgIgDQgJgDAAgFQAAgDADgCQADgCAJgEIATgFIANgCQAEAAACACQACAEAAAFIgBAMQgBAwAAAxIABAvQABAKACACIAIAFQAGACAAAFQAAAFgHACQgHADgSAAQgUAAgGgDg");
	this.shape_24.setTransform(-69.2,-16.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxAzQgUgUAAgeQAAgeAVgVQAUgVAeAAQAeAAATAUQATATAAAeQAAAfgVAVQgUAWgdAAQgeAAgTgVgAgZgoQgJALAAASQAAAbAMASQALASAQAAQANAAAJgLQAIgLAAgTQAAgagMgSQgLgSgQAAQgNAAgIALg");
	this.shape_25.setTransform(-80.5,-13.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAeBhQgHgDAAgGQAAgFAJgEIAGgDQACgBABgJIABggIAAgTIgCgGQgBgCgHgBQgGgBgaAAIgdAAQgHABgDACIgBAEIgBAKIAAAMIABAgQABAJACABIAGADQAJAEAAAFQAAAGgIADQgHACgWAAQgVAAgIgCQgIgDAAgGQAAgFAJgEIAGgDQADgCABgRIABg6IgBgzQgBgVgCgCQgBgCgHgDQgIgDAAgGQAAgFAGgCQAGgCAZAAQAYAAAHACQAGACAAAFQAAAGgJADIgGADQgCACgBAJIgBAoQAAAGAFACQAFACAUAAIALAAIAdgBQAIgBADgCIABgDIABgFIAAgGIgBgiQgBgHgCgCIgGgDQgJgDAAgGQAAgFAGgCQAHgCAYAAQAZAAAGACQAGACAAAFQAAAGgJADIgGADQgDACgBATIgBA3IABA1QABAUACADQABACAHADQAIADAAAFQAAAGgIADQgIACgVAAQgWAAgIgCg");
	this.shape_26.setTransform(-98.6,-16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainssidessweets, new cjs.Rectangle(-111,-34.6,222.1,69.2), null);


(lib.mainbtngreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99CC33").ss(1,1,1).p("A5Y1oMAyxAAAMAAAArRMgyxAAAg");
	this.shape.setTransform(0,0,0.922,0.903);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("A5YVpMAAAgrRMAyxAAAMAAAArRg");
	this.shape_1.setTransform(0,0,0.922,0.903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A24y+MAtxAAAMAAAAl9MgtxAAAg");
	this.shape.setTransform(0,0,1.021,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-150.5,-125.5,301,251), null);


(lib.findastore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAwIAAhfIA9AAIAAAMIgvAAIAAAdIAsAAIAAAKIgsAAIAAAgIAxAAIAAAMg");
	this.shape.setTransform(41.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAwIgXgrIgPAAIAAArIgNAAIAAhfIAfAAIAMACQAGABAEADQAFADADAFQADAFAAAIQAAAKgHAHIgHAEIgKADIAbAsgAgUgFIAQAAIAHgBIAHgCQAEgCABgDQACgDAAgEQAAgFgCgDIgEgEIgHgDIgHAAIgRAAg");
	this.shape_1.setTransform(33.8,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAxIgJgDQgJgDgHgHQgHgHgEgJQgEgJAAgLQAAgKAEgKQAEgJAHgGQAHgHAJgEIAJgCIAKgBQALAAAJADIAJAFIAHAGQAHAGAEAJQAEAKAAAKQAAALgEAJQgEAJgHAHIgHAGIgJAEQgJAEgLAAIgKgBgAgOgjQgHAEgEAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgEgFgHgEQgHgDgIAAQgHAAgHADg");
	this.shape_2.setTransform(23.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAwIAAhTIgeAAIAAgMIBJAAIAAAMIgeAAIAABTg");
	this.shape_3.setTransform(13.9,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAvQgJgEgFgHIAKgIQAEAFAFADQAGADAGAAIAGgBIAGgDQADgCACgDQACgDAAgFQAAgEgCgDQgCgDgDgCIgHgDIgIgDIgJgDIgIgEQgEgDgCgFQgCgEAAgHQAAgHADgFQADgFAFgEQAEgDAGgCIALgBIAIAAIAIADQAHADAEAFIgJAJQgDgEgFgDQgFgCgGAAIgFABIgGADQgDACgCADQgBACAAAEQAAAEABADIAEAFIAHADIAGACIAKAEIAJAEQAEADADAEQACAFAAAHQAAAIgCAFQgDAGgFADQgEAEgGABQgGACgGAAQgJAAgIgDg");
	this.shape_4.setTransform(6.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgAwIgKgYIgsAAIgKAYIgPAAIAqhfIALAAIApBfgAASAMIgSgrIgRArIAjAAg");
	this.shape_5.setTransform(-5.6,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpAwIAAhfIAhAAQAIAAAJADQAJADAIAFQAHAGAFAJIADAKIABALIgBALIgDAKIgGAIIgGAHQgIAGgJADQgLADgGAAgAgcAkIARAAQAJAAAGgCQAHgDAGgEQAFgFADgHIACgHIABgIIgBgHIgCgIQgDgGgFgFQgGgEgHgDQgGgCgJAAIgRAAg");
	this.shape_6.setTransform(-18.7,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXAwIgxhNIAABNIgOAAIAAhfIASAAIAxBMIAAhMIANAAIAABfg");
	this.shape_7.setTransform(-29.2,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_8.setTransform(-36.3,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAwIAAhfIA7AAIAAAMIguAAIAAAeIArAAIAAAKIgrAAIAAArg");
	this.shape_9.setTransform(-41.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.findastore, new cjs.Rectangle(-47.7,-10.3,95.5,20.6), null);


(lib.fadefromwhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4NUjMAAAgpFMAwbAAAMAAAApFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fadefromwhite, new cjs.Rectangle(-154.9,-131.5,310,263), null);


(lib.deliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAsQgKgEgHgGIgBgCIAAgCIABgDIADgDIADgCIADgCQABAAAAABQABAAAAAAQABAAAAABQABAAABABIAFADIAIAEQAFACAFAAIAGgBIAIgCIAFgEQACgDABgEQgBgEgCgCQgCgCgFgBIgJgCIgKgBIgLgDQgFgBgEgCQgEgDgDgFQgCgEgBgHQAAgHAFgFQADgGAGgDQAFgDAGgCQAIgBAEAAIAJAAIAJACIAJAEQAEACADADIABABIAAADIgBADIgCACIgEACIgEACIgCgBQgFgEgFgCQgGgDgGAAIgFABIgHACQgDABgCACQgCADAAAEQAAAFAFACQAEACAHABIAMABQAIABAHADQAGACAEAEQAFAGAAAJQAAAIgEAGQgDAGgHAEQgFADgHACIgNABQgKAAgKgDg");
	this.shape.setTransform(90.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIA/AAIACACIABADIAAADIAAADIgBADIgCADIgvAAIgDABIgBACIAAANIABADIADABIAeAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABAEIAAADIAAACQAAAEgDABIgdAAIgDABIgCADIAAAPIABACIADABIAuAAQADADAAADIAAACIAAAFIgBACIgCABg");
	this.shape_1.setTransform(82.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAvIgCAAQgEAAgBgDIAAhYIACgCIADAAIACAAIAEAAQADAAABADIAABWIgCADIgDABg");
	this.shape_2.setTransform(75.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXAuIgCgBIgCgBIgBgBIgQgYIgCgDIgEAAIgLAAIgEAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAAWQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgDACIgEAAIgDAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIACgBIAmAAQAHAAAGACQAGADAFAEQAEAEACAFQADAGAAAIQAAAHgDAFIgGAHIgHAEQgDACAAADIAAACIAEAFIAFAHIAFAHIACAFQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgDACIgDACIgDAAgAgSgdQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAAVQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIAEABIASAAIAHgBIAFgCQADgCABgDQABgCAAgEQAAgIgFgEQgCgCgDgBIgHAAIgSAAIgEAAg");
	this.shape_3.setTransform(69.3,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAuIgJgDIgJgDIgHgGQgGgHgEgJIgDgJIgBgJIABgJIADgJQAEgJAGgGIAHgFIAJgFIAJgDIAJAAIAKAAIAJADQAJAEAHAGQAGAGAEAJQAEAJAAAJIgBAJIgDAJQgEAJgGAHQgHAGgJADIgJADIgKABIgJgBgAgLgcQgFADgFAEQgEAEgDAGQgCAFAAAGQAAAGACAHQADAFAEAFQAFAEAFACQAGADAFAAQAGAAAGgDQAFgCAFgEIAHgKQACgHAAgGQAAgGgCgFIgHgKQgFgEgFgDQgGgCgGAAQgFAAgGACg");
	this.shape_4.setTransform(58.9,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfAuIgFgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgpIgBgBIgCgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAIgOAWQgCADgCAAIgCgBIgCgCIgNgWQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIgCACIAAABIAAAoQgCADgDABIgFABIgDAAIgCgBIgBgBIgBgDIAAhSQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAGAAIACAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAWAkQACADABAAIADgBIACgCIAWgkQACgDAFAAIAEAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABIAABTIgBADIgDACIgEAAg");
	this.shape_5.setTransform(48.4,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIA/AAIACACIABADIAAADIAAADIgBADIgCADIgvAAIgDABIgBACIAAANIABADIADABIAeAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABAEIAAADIAAACQAAAEgDABIgdAAIgDABIgCADIAAAPIABACIADABIAuAAQADADAAADIAAACIAAAFIgBACIgCABg");
	this.shape_6.setTransform(39.3,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeAuIgDgBQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgpIgBgBIgCgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIgPAWQgCADgCAAIgDgBIgCgCIgMgWQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIgCACIgBABIAAAoQgBADgCABIgGABIgCAAIgDgBIgCgBIgBgDIAAhSQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAFAAIADAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAVAkQACADADAAIACgBIACgCIAWgkQACgDAFAAIAEAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABTIgBADIgCACIgEAAg");
	this.shape_7.setTransform(29.4,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAsQgJgEgHgGIgCgCIAAgCIABgDIADgDIADgCIADgCQAAAAABABQABAAAAAAQABAAAAABQABAAAAABIAHADIAHAEQAEACAGAAIAGgBIAIgCIAFgEQADgDgBgEQABgEgDgCQgDgCgEgBIgKgCIgJgBIgKgDQgGgBgEgCQgEgDgDgFQgCgEAAgHQAAgHADgFQAEgGAFgDQAGgDAGgCQAHgBAGAAIAIAAIAKACIAIAEQAEACADADIABABIAAADIgBADIgDACIgDACIgEACIgCgBQgFgEgFgCQgGgDgGAAIgFABIgHACQgDABgBACQgCADAAAEQAAAFADACQAFACAGABIAOABQAHABAHADQAGACAFAEQAEAGAAAJQAAAIgDAGQgFAGgFAEQgGADgHACIgNABQgKAAgKgDg");
	this.shape_8.setTransform(16,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAsQgHgDgGgFQgFgFgDgHIgCgHIgBgJIAAgYIAAgZIABgDIADgBIAEgBIADAAIADABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAIAAAvIABAKQABAFADADQADAEAFACQAEACAFAAQAFAAAFgCQAEgCADgEQADgDACgFIACgKIAAguQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAEgBIADAAIADAAIAEACIABADIAAAxIgBAJIgDAHQgDAHgGAFQgFAFgHADQgIADgIAAQgHAAgIgDg");
	this.shape_9.setTransform(6.5,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAuIgJgDIgJgDIgHgGQgGgHgEgJIgDgJIgBgJIABgJIADgJQAEgJAGgGIAHgFIAJgFIAJgDIAJAAIAKAAIAJADQAJAEAHAGQAGAGAEAJQAEAJAAAJIgBAJIgDAJQgEAJgGAHQgHAGgJADIgJADIgKABIgJgBgAgLgcQgFADgFAEQgEAEgDAGQgCAFAAAGQAAAGACAHQADAFAEAFQAFAEAFACQAGADAFAAQAGAAAGgDQAFgCAFgEIAHgKQACgHAAgGQAAgGgCgFIgHgKQgFgEgFgDQgGgCgGAAQgFAAgGACg");
	this.shape_10.setTransform(-4,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAvIgCAAQgEAAgBgDIAAhYIACgCIADAAIACAAIAEAAQADAAABADIAABWIgCADIgDABg");
	this.shape_11.setTransform(-11.3,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAuIgJgDIgIgDIgIgGIgGgHIgEgIQgEgJgBgKQABgKAEgIIAEgIIAGgHQAGgHAKgDQAEgCAFgBIAJAAIAJAAQAGACAFACIAJAFIAIAHIAAACQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgEADIgDACQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEgCIgEgFIgIgDQgEgCgGAAQgGAAgFACQgGADgFAEQgEAEgCAGQgDAGAAAFQAAAHADAFQACAGAEAEQAFAEAGADQAFADAGAAQAGAAAGgEQAHgCAFgGIADAAIACABIAEACIADADIABADIAAACIgIAHIgJAFIgKADIgKABIgJgBg");
	this.shape_12.setTransform(-18.2,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAvIgCAAQgEAAgBgDIAAhYIACgCIADAAIACAAIAEAAQADAAABADIAABWIgCADIgDABg");
	this.shape_13.setTransform(-25,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAuIgDgBIgBgDIAAhTIABgDIADgBIADAAIADAAIAEAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIAABAIABADIABACQACACAEAAIApAAIACACIACACIABACIAAADIgBAFQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAg");
	this.shape_14.setTransform(-30.8,-0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIA/AAIACACIABADIAAADIAAADIgBADIgCADIgvAAIgDABIgBACIAAANIABADIADABIAeAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABAEIAAADIAAACQAAAEgDABIgdAAIgDABIgCADIAAAPIABACIADABIAuAAQADADAAADIAAACIAAAFIgBACIgCABg");
	this.shape_15.setTransform(-39.5,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAhSQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIADgBIAiAAIAIABIAKADQAIADAHAGQAHAGAEAIIADAJIABAJQAAAKgEAJIgFAHIgGAHIgHAFIgJAFQgJACgIAAgAgYgbQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAAyQAAAAAAAAQAAABABAAQAAABAAAAQAAAAABAAIADABIARAAQAFAAAGgCQAGgCAEgDQAFgEACgFQADgGAAgHQAAgFgDgGQgCgFgFgEQgEgEgGgDQgGgBgFAAIgRAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_16.setTransform(-49.2,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIA/AAIACACIABADIAAADIAAADIgBADIgCADIgvAAIgDABIgBACIAAANIABADIADABIAeAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIABAEIAAADIAAACQAAAEgDABIgdAAIgDABIgCADIAAAPIABACIADABIAuAAQADADAAADIAAACIAAAFIgBACIgCABg");
	this.shape_17.setTransform(-62.7,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVAvIgDgCIgXgiQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAIgDgBIgFABQgBAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIAAAcIgBADIgEACIgEAAIgDABQgFAAAAgGIAAhUIACgCIADgCIADAAIADAAQAEAAACAEIAAAcQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAFABQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAZgeIACgBIACAAIADAAIADACIADACIABADIgBACIgWAaIgBADIAAACIAAACIABACIAcAnIABABIAAABIgBADIgDACIgEABIgDABg");
	this.shape_18.setTransform(-71.5,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAkAuIgDAAIgEAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgFgNIgCgCIgDAAIgeAAIAAAAIgCABIgBABIgBAAIgFANIgBABIgDABIgDABIgCAAIgDAAIgDAAIgCgBIgBgCIAlhVIACgDIADAAIADAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABIAkBUIAAABIgBACIgDABgAAAgNIgBABIgBACIgCAEIgCAGIgCAEIgCAEIgBACIABACIACABIARAAIACgBIABgCIgBgEIgDgGIgEgIIgCgFIgCgBg");
	this.shape_19.setTransform(-80.8,-0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeAuIgDgBQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgpIgBgBIgCgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIgPAWQgCADgCAAIgDgBIgCgCIgMgWQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIgCACIgBABIAAAoQgBADgCABIgGABIgCAAIgDgBIgCgBIgBgDIAAhSQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAFAAIADAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAVAkQACADADAAIACgBIACgCIAWgkQACgDAFAAIAEAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABTIgBADIgCACIgEAAg");
	this.shape_20.setTransform(-90.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.deliciousmemories, new cjs.Rectangle(-97.4,-8.6,194.9,17.4), null);


(lib.ctavidrollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AndCXQg+AAgtgsQgsgsAAg/IAAAAQAAg+AsgsQAtgsA+AAIO7AAQA+AAAsAsQAtAsAAA+IAAAAQAAA/gtAsQgsAsg+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctavidrollover, new cjs.Rectangle(-62.8,-15.1,125.8,30.3), null);


(lib.WFM_Logo_White_RGBbrownbackgroundai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(175,175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(305.4,234.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(163.9,260);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(305.6,233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(126.2,205.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(130.7,263.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(239.5,205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(181.9,205.3);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(175,175,1,1,0,0,0,175,175);
	this.instance.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.sixteenrollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// Layer 1
	this.instance = new lib.ctavidrollover();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-15.1,125.8,30.3);


(lib.sixteenbeansuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenbeans_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenbeansuse, new cjs.Rectangle(-47.5,-28.5,95,57), null);


(lib.wfmbrownbackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WFM_Logo_White_RGBbrownbackgroundai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.1,0,1,1,0,0,0,175,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-175,350,350);


// stage content:
(lib.squaresixteen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_55 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(34).call(this.frame_89).wait(3));

	// button
	this.btn_main = new lib.mainbtngreen();
	this.btn_main.parent = this;
	this.btn_main.setTransform(149.7,124.5);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbtngreen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(92));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92));

	// fade-from-white
	this.instance_1 = new lib.fadefromwhite();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153,125.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(83));

	// logo
	this.instance_2 = new lib.wfmbrownbackground("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(250.8,32.8,0.223,0.223);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0,scaleY:0},0).to({regX:0.2,scaleX:0.24,scaleY:0.24,alpha:1},6).to({regX:0,scaleX:0.22,scaleY:0.22},7).wait(70));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax8T5MAAAgnxMAmBAAAMAAAAnxg");
	mask.setTransform(128.5,115.3);

	// delicious-memories
	this.instance_3 = new lib.deliciousmemories();
	this.instance_3.parent = this;
	this.instance_3.setTransform(110,66.7);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({x:-125.6,alpha:1},0).to({x:120},10,cjs.Ease.get(1)).to({x:110},8,cjs.Ease.get(1)).wait(29));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ax8T5MAAAgnxMAmBAAAMAAAAnxg");
	mask_1.setTransform(128.5,115.3);

	// holiday-mains-sides
	this.instance_4 = new lib.mainssidessweets();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.6,108.6);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({x:-111,alpha:1},0).to({x:134.6},10,cjs.Ease.get(1)).to({x:124.6},8,cjs.Ease.get(1)).wait(29));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ax8T5MAAAgnxMAmBAAAMAAAAnxg");
	mask_2.setTransform(128.5,115.3);

	// FIND-A-STORE
	this.instance_5 = new lib.findastore();
	this.instance_5.parent = this;
	this.instance_5.setTransform(73.9,163.8);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({x:-76.1,alpha:1},0).to({x:83.9},10,cjs.Ease.get(1)).to({x:75.4},8,cjs.Ease.get(1)).wait(19));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ax8T5MAAAgnxMAmBAAAMAAAAnxg");
	mask_3.setTransform(128.5,115.3);

	// rollover
	this.cta_rollover = new lib.sixteenrollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(75.4,164.6);
	this.cta_rollover.alpha = 0;

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(55).to({x:-74.6,alpha:1},0).to({x:85.4},10,cjs.Ease.get(1)).to({x:76.9},8,cjs.Ease.get(1)).wait(19));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ax8T5MAAAgnxMAmBAAAMAAAAnxg");
	mask_4.setTransform(128.5,115.3);

	// cta
	this.instance_6 = new lib.sixteenrec();
	this.instance_6.parent = this;
	this.instance_6.setTransform(75.4,164.6);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55).to({x:-74.6,alpha:1},0).to({x:85.4},10,cjs.Ease.get(1)).to({x:76.9},8,cjs.Ease.get(1)).wait(19));

	// blue
	this.instance_7 = new lib.sixteenblue_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(23.5,217.9);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({alpha:1},10).wait(73));

	// beans
	this.instance_8 = new lib.sixteenbeansuse();
	this.instance_8.parent = this;
	this.instance_8.setTransform(78.7,221.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({alpha:1},10).wait(69));

	// cup
	this.instance_9 = new lib.sixteencup_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(158,226);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({alpha:1},10).wait(65));

	// meats
	this.instance_10 = new lib.sixteenmeats_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(240.5,195);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({alpha:1},10).wait(61));

	// spinach
	this.instance_11 = new lib.sixteenspinach_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(276,111);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25).to({alpha:1},10).wait(57));

	// candle
	this.instance_12 = new lib.sixteencanlde();
	this.instance_12.parent = this;
	this.instance_12.setTransform(28,36.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(33).to({alpha:1},10).wait(49));

	// pie
	this.instance_13 = new lib.sixteenpie_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(88,28);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({alpha:1},10).wait(53));

	// TABLE
	this.instance_14 = new lib.sixteentableuse();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,125);

	this.instance_15 = new lib.sixteentable();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,118.9,310,263.2);
// library properties:
lib.properties = {
	id: '92879F2740E34FB9890B82961B713FEA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['92879F2740E34FB9890B82961B713FEA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;