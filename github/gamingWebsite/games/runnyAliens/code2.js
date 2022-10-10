gdjs.ShopCode = {};
gdjs.ShopCode.GDbackObjects1= [];
gdjs.ShopCode.GDbackObjects2= [];
gdjs.ShopCode.GDbackObjects3= [];
gdjs.ShopCode.GDcloudObjects1= [];
gdjs.ShopCode.GDcloudObjects2= [];
gdjs.ShopCode.GDcloudObjects3= [];
gdjs.ShopCode.GDropeObjects1= [];
gdjs.ShopCode.GDropeObjects2= [];
gdjs.ShopCode.GDropeObjects3= [];
gdjs.ShopCode.GDplrObjects1= [];
gdjs.ShopCode.GDplrObjects2= [];
gdjs.ShopCode.GDplrObjects3= [];
gdjs.ShopCode.GDplr2Objects1= [];
gdjs.ShopCode.GDplr2Objects2= [];
gdjs.ShopCode.GDplr2Objects3= [];
gdjs.ShopCode.GDversionObjects1= [];
gdjs.ShopCode.GDversionObjects2= [];
gdjs.ShopCode.GDversionObjects3= [];
gdjs.ShopCode.GDcoins_95amountObjects1= [];
gdjs.ShopCode.GDcoins_95amountObjects2= [];
gdjs.ShopCode.GDcoins_95amountObjects3= [];
gdjs.ShopCode.GDgems_95amountObjects1= [];
gdjs.ShopCode.GDgems_95amountObjects2= [];
gdjs.ShopCode.GDgems_95amountObjects3= [];
gdjs.ShopCode.GDtitleObjects1= [];
gdjs.ShopCode.GDtitleObjects2= [];
gdjs.ShopCode.GDtitleObjects3= [];
gdjs.ShopCode.GDbranchObjects1= [];
gdjs.ShopCode.GDbranchObjects2= [];
gdjs.ShopCode.GDbranchObjects3= [];
gdjs.ShopCode.GDcloudObjects1= [];
gdjs.ShopCode.GDcloudObjects2= [];
gdjs.ShopCode.GDcloudObjects3= [];
gdjs.ShopCode.GDshop1Objects1= [];
gdjs.ShopCode.GDshop1Objects2= [];
gdjs.ShopCode.GDshop1Objects3= [];
gdjs.ShopCode.GDshop2Objects1= [];
gdjs.ShopCode.GDshop2Objects2= [];
gdjs.ShopCode.GDshop2Objects3= [];
gdjs.ShopCode.GDshop3Objects1= [];
gdjs.ShopCode.GDshop3Objects2= [];
gdjs.ShopCode.GDshop3Objects3= [];
gdjs.ShopCode.GDshop4Objects1= [];
gdjs.ShopCode.GDshop4Objects2= [];
gdjs.ShopCode.GDshop4Objects3= [];
gdjs.ShopCode.GDcoinsObjects1= [];
gdjs.ShopCode.GDcoinsObjects2= [];
gdjs.ShopCode.GDcoinsObjects3= [];
gdjs.ShopCode.GDSapphireGemObjects1= [];
gdjs.ShopCode.GDSapphireGemObjects2= [];
gdjs.ShopCode.GDSapphireGemObjects3= [];
gdjs.ShopCode.GDskin1Objects1= [];
gdjs.ShopCode.GDskin1Objects2= [];
gdjs.ShopCode.GDskin1Objects3= [];

gdjs.ShopCode.conditionTrue_0 = {val:false};
gdjs.ShopCode.condition0IsTrue_0 = {val:false};
gdjs.ShopCode.condition1IsTrue_0 = {val:false};
gdjs.ShopCode.condition2IsTrue_0 = {val:false};
gdjs.ShopCode.conditionTrue_1 = {val:false};
gdjs.ShopCode.condition0IsTrue_1 = {val:false};
gdjs.ShopCode.condition1IsTrue_1 = {val:false};
gdjs.ShopCode.condition2IsTrue_1 = {val:false};


gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDtitleObjects1Objects = Hashtable.newFrom({"title": gdjs.ShopCode.GDtitleObjects1});
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDcloudObjects2Objects = Hashtable.newFrom({"cloud": gdjs.ShopCode.GDcloudObjects2});
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDcloudObjects1Objects = Hashtable.newFrom({"cloud": gdjs.ShopCode.GDcloudObjects1});
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDcloudObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cloud");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDcloudObjects2Objects, gdjs.randomInRange(24, 412), -(36), "");
}{for(var i = 0, len = gdjs.ShopCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDcloudObjects2[i].addForce(0, 100, 1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.ShopCode.GDcloudObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDcloudObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.ShopCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDcloudObjects2[i].setOpacity(100);
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "cloud") > gdjs.randomInRange(0.5, 3);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14057148);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDcloudObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDcloudObjects1Objects, gdjs.randomInRange(24, 412), -(36), "");
}{for(var i = 0, len = gdjs.ShopCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDcloudObjects1[i].addForce(0, 100, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cloud");
}}

}


};gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDshop1Objects1Objects = Hashtable.newFrom({"shop1": gdjs.ShopCode.GDshop1Objects1});
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDshop1Objects1ObjectsGDgdjs_46ShopCode_46GDshop2Objects1ObjectsGDgdjs_46ShopCode_46GDshop3Objects1ObjectsGDgdjs_46ShopCode_46GDshop4Objects1Objects = Hashtable.newFrom({"shop1": gdjs.ShopCode.GDshop1Objects1, "shop2": gdjs.ShopCode.GDshop2Objects1, "shop3": gdjs.ShopCode.GDshop3Objects1, "shop4": gdjs.ShopCode.GDshop4Objects1});
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDshop1Objects1ObjectsGDgdjs_46ShopCode_46GDshop2Objects1ObjectsGDgdjs_46ShopCode_46GDshop3Objects1ObjectsGDgdjs_46ShopCode_46GDshop4Objects1Objects = Hashtable.newFrom({"shop1": gdjs.ShopCode.GDshop1Objects1, "shop2": gdjs.ShopCode.GDshop2Objects1, "shop3": gdjs.ShopCode.GDshop3Objects1, "shop4": gdjs.ShopCode.GDshop4Objects1});
gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.ShopCode.GDtitleObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDtitleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.ShopCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("shop1"), gdjs.ShopCode.GDshop1Objects1);

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDshop1Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Connect", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("shop1"), gdjs.ShopCode.GDshop1Objects1);
gdjs.copyArray(runtimeScene.getObjects("shop2"), gdjs.ShopCode.GDshop2Objects1);
gdjs.copyArray(runtimeScene.getObjects("shop3"), gdjs.ShopCode.GDshop3Objects1);
gdjs.copyArray(runtimeScene.getObjects("shop4"), gdjs.ShopCode.GDshop4Objects1);

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDshop1Objects1ObjectsGDgdjs_46ShopCode_46GDshop2Objects1ObjectsGDgdjs_46ShopCode_46GDshop3Objects1ObjectsGDgdjs_46ShopCode_46GDshop4Objects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDshop1Objects1 */
/* Reuse gdjs.ShopCode.GDshop2Objects1 */
/* Reuse gdjs.ShopCode.GDshop3Objects1 */
/* Reuse gdjs.ShopCode.GDshop4Objects1 */
{for(var i = 0, len = gdjs.ShopCode.GDshop1Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDshop1Objects1[i].setColor("7;39;4");
}
for(var i = 0, len = gdjs.ShopCode.GDshop2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDshop2Objects1[i].setColor("7;39;4");
}
for(var i = 0, len = gdjs.ShopCode.GDshop3Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDshop3Objects1[i].setColor("7;39;4");
}
for(var i = 0, len = gdjs.ShopCode.GDshop4Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDshop4Objects1[i].setColor("7;39;4");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("shop1"), gdjs.ShopCode.GDshop1Objects1);
gdjs.copyArray(runtimeScene.getObjects("shop2"), gdjs.ShopCode.GDshop2Objects1);
gdjs.copyArray(runtimeScene.getObjects("shop3"), gdjs.ShopCode.GDshop3Objects1);
gdjs.copyArray(runtimeScene.getObjects("shop4"), gdjs.ShopCode.GDshop4Objects1);

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDshop1Objects1ObjectsGDgdjs_46ShopCode_46GDshop2Objects1ObjectsGDgdjs_46ShopCode_46GDshop3Objects1ObjectsGDgdjs_46ShopCode_46GDshop4Objects1Objects, runtimeScene, true, true);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDshop1Objects1 */
/* Reuse gdjs.ShopCode.GDshop2Objects1 */
/* Reuse gdjs.ShopCode.GDshop3Objects1 */
/* Reuse gdjs.ShopCode.GDshop4Objects1 */
{for(var i = 0, len = gdjs.ShopCode.GDshop1Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDshop1Objects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.ShopCode.GDshop2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDshop2Objects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.ShopCode.GDshop3Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDshop3Objects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.ShopCode.GDshop4Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDshop4Objects1[i].setColor("0;0;0");
}
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDbackObjects1.length = 0;
gdjs.ShopCode.GDbackObjects2.length = 0;
gdjs.ShopCode.GDbackObjects3.length = 0;
gdjs.ShopCode.GDcloudObjects1.length = 0;
gdjs.ShopCode.GDcloudObjects2.length = 0;
gdjs.ShopCode.GDcloudObjects3.length = 0;
gdjs.ShopCode.GDropeObjects1.length = 0;
gdjs.ShopCode.GDropeObjects2.length = 0;
gdjs.ShopCode.GDropeObjects3.length = 0;
gdjs.ShopCode.GDplrObjects1.length = 0;
gdjs.ShopCode.GDplrObjects2.length = 0;
gdjs.ShopCode.GDplrObjects3.length = 0;
gdjs.ShopCode.GDplr2Objects1.length = 0;
gdjs.ShopCode.GDplr2Objects2.length = 0;
gdjs.ShopCode.GDplr2Objects3.length = 0;
gdjs.ShopCode.GDversionObjects1.length = 0;
gdjs.ShopCode.GDversionObjects2.length = 0;
gdjs.ShopCode.GDversionObjects3.length = 0;
gdjs.ShopCode.GDcoins_95amountObjects1.length = 0;
gdjs.ShopCode.GDcoins_95amountObjects2.length = 0;
gdjs.ShopCode.GDcoins_95amountObjects3.length = 0;
gdjs.ShopCode.GDgems_95amountObjects1.length = 0;
gdjs.ShopCode.GDgems_95amountObjects2.length = 0;
gdjs.ShopCode.GDgems_95amountObjects3.length = 0;
gdjs.ShopCode.GDtitleObjects1.length = 0;
gdjs.ShopCode.GDtitleObjects2.length = 0;
gdjs.ShopCode.GDtitleObjects3.length = 0;
gdjs.ShopCode.GDbranchObjects1.length = 0;
gdjs.ShopCode.GDbranchObjects2.length = 0;
gdjs.ShopCode.GDbranchObjects3.length = 0;
gdjs.ShopCode.GDcloudObjects1.length = 0;
gdjs.ShopCode.GDcloudObjects2.length = 0;
gdjs.ShopCode.GDcloudObjects3.length = 0;
gdjs.ShopCode.GDshop1Objects1.length = 0;
gdjs.ShopCode.GDshop1Objects2.length = 0;
gdjs.ShopCode.GDshop1Objects3.length = 0;
gdjs.ShopCode.GDshop2Objects1.length = 0;
gdjs.ShopCode.GDshop2Objects2.length = 0;
gdjs.ShopCode.GDshop2Objects3.length = 0;
gdjs.ShopCode.GDshop3Objects1.length = 0;
gdjs.ShopCode.GDshop3Objects2.length = 0;
gdjs.ShopCode.GDshop3Objects3.length = 0;
gdjs.ShopCode.GDshop4Objects1.length = 0;
gdjs.ShopCode.GDshop4Objects2.length = 0;
gdjs.ShopCode.GDshop4Objects3.length = 0;
gdjs.ShopCode.GDcoinsObjects1.length = 0;
gdjs.ShopCode.GDcoinsObjects2.length = 0;
gdjs.ShopCode.GDcoinsObjects3.length = 0;
gdjs.ShopCode.GDSapphireGemObjects1.length = 0;
gdjs.ShopCode.GDSapphireGemObjects2.length = 0;
gdjs.ShopCode.GDSapphireGemObjects3.length = 0;
gdjs.ShopCode.GDskin1Objects1.length = 0;
gdjs.ShopCode.GDskin1Objects2.length = 0;
gdjs.ShopCode.GDskin1Objects3.length = 0;

gdjs.ShopCode.eventsList1(runtimeScene);
return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
