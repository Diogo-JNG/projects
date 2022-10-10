gdjs.ConnectCode = {};
gdjs.ConnectCode.GDbackObjects1= [];
gdjs.ConnectCode.GDbackObjects2= [];
gdjs.ConnectCode.GDbackObjects3= [];
gdjs.ConnectCode.GDcloudObjects1= [];
gdjs.ConnectCode.GDcloudObjects2= [];
gdjs.ConnectCode.GDcloudObjects3= [];
gdjs.ConnectCode.GDjoin_95inputObjects1= [];
gdjs.ConnectCode.GDjoin_95inputObjects2= [];
gdjs.ConnectCode.GDjoin_95inputObjects3= [];
gdjs.ConnectCode.GDhost_95gameObjects1= [];
gdjs.ConnectCode.GDhost_95gameObjects2= [];
gdjs.ConnectCode.GDhost_95gameObjects3= [];
gdjs.ConnectCode.GDJoinObjects1= [];
gdjs.ConnectCode.GDJoinObjects2= [];
gdjs.ConnectCode.GDJoinObjects3= [];
gdjs.ConnectCode.GDred_95buttonObjects1= [];
gdjs.ConnectCode.GDred_95buttonObjects2= [];
gdjs.ConnectCode.GDred_95buttonObjects3= [];

gdjs.ConnectCode.conditionTrue_0 = {val:false};
gdjs.ConnectCode.condition0IsTrue_0 = {val:false};
gdjs.ConnectCode.condition1IsTrue_0 = {val:false};
gdjs.ConnectCode.condition2IsTrue_0 = {val:false};
gdjs.ConnectCode.conditionTrue_1 = {val:false};
gdjs.ConnectCode.condition0IsTrue_1 = {val:false};
gdjs.ConnectCode.condition1IsTrue_1 = {val:false};
gdjs.ConnectCode.condition2IsTrue_1 = {val:false};


gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDJoinObjects1Objects = Hashtable.newFrom({"Join": gdjs.ConnectCode.GDJoinObjects1});
gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDhost_9595gameObjects1Objects = Hashtable.newFrom({"host_game": gdjs.ConnectCode.GDhost_95gameObjects1});
gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDjoin_9595inputObjects1Objects = Hashtable.newFrom({"join_input": gdjs.ConnectCode.GDjoin_95inputObjects1});
gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.ConnectCode.GDbackObjects1});
gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDhost_9595gameObjects1ObjectsGDgdjs_46ConnectCode_46GDJoinObjects1Objects = Hashtable.newFrom({"host_game": gdjs.ConnectCode.GDhost_95gameObjects1, "Join": gdjs.ConnectCode.GDJoinObjects1});
gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDhost_9595gameObjects1ObjectsGDgdjs_46ConnectCode_46GDJoinObjects1Objects = Hashtable.newFrom({"host_game": gdjs.ConnectCode.GDhost_95gameObjects1, "Join": gdjs.ConnectCode.GDJoinObjects1});
gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDhost_9595gameObjects1Objects = Hashtable.newFrom({"host_game": gdjs.ConnectCode.GDhost_95gameObjects1});
gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDJoinObjects2Objects = Hashtable.newFrom({"Join": gdjs.ConnectCode.GDJoinObjects2});
gdjs.ConnectCode.eventsList0 = function(runtimeScene) {

{


{
/* Reuse gdjs.ConnectCode.GDjoin_95inputObjects2 */
{gdjs.evtTools.p2p.sendDataTo((( gdjs.ConnectCode.GDjoin_95inputObjects2.length === 0 ) ? "" :gdjs.ConnectCode.GDjoin_95inputObjects2[0].getString()), "can_join", "");
}}

}


};gdjs.ConnectCode.eventsList1 = function(runtimeScene) {

{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Join"), gdjs.ConnectCode.GDJoinObjects2);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDJoinObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
gdjs.ConnectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("join_input"), gdjs.ConnectCode.GDjoin_95inputObjects2);
{gdjs.evtTools.p2p.connect((( gdjs.ConnectCode.GDjoin_95inputObjects2.length === 0 ) ? "" :gdjs.ConnectCode.GDjoin_95inputObjects2[0].getString()));
}
{ //Subevents
gdjs.ConnectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("you_p1", true);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("playerID").setNumber(1);
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("you_p2", true);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("playerID").setNumber(2);
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("you_can", true);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map 1", false);
}}

}


};gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDcloudObjects2Objects = Hashtable.newFrom({"cloud": gdjs.ConnectCode.GDcloudObjects2});
gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDcloudObjects1Objects = Hashtable.newFrom({"cloud": gdjs.ConnectCode.GDcloudObjects1});
gdjs.ConnectCode.eventsList2 = function(runtimeScene) {

{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
gdjs.ConnectCode.GDcloudObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cloud");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDcloudObjects2Objects, -(72), gdjs.randomInRange(144, 21), "");
}{for(var i = 0, len = gdjs.ConnectCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDcloudObjects2[i].addForce(10, 0, 1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.ConnectCode.GDcloudObjects2);
{for(var i = 0, len = gdjs.ConnectCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDcloudObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.ConnectCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.ConnectCode.GDcloudObjects2[i].setOpacity(100);
}
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "cloud") > gdjs.randomInRange(15, 30);
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
{gdjs.ConnectCode.conditionTrue_1 = gdjs.ConnectCode.condition1IsTrue_0;
gdjs.ConnectCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14043484);
}
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {
gdjs.ConnectCode.GDcloudObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDcloudObjects1Objects, -(72), gdjs.randomInRange(72, 21), "");
}{for(var i = 0, len = gdjs.ConnectCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDcloudObjects1[i].addForce(10, 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cloud");
}}

}


};gdjs.ConnectCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Join"), gdjs.ConnectCode.GDJoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.ConnectCode.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("host_game"), gdjs.ConnectCode.GDhost_95gameObjects1);
gdjs.copyArray(runtimeScene.getObjects("join_input"), gdjs.ConnectCode.GDjoin_95inputObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDJoinObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDhost_9595gameObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDjoin_9595inputObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.ConnectCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDbackObjects1[i].hide();
}
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("playerID").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.ConnectCode.GDbackObjects1);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
gdjs.ConnectCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDbackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Join"), gdjs.ConnectCode.GDJoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("host_game"), gdjs.ConnectCode.GDhost_95gameObjects1);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDhost_9595gameObjects1ObjectsGDgdjs_46ConnectCode_46GDJoinObjects1Objects, runtimeScene, true, true);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ConnectCode.GDJoinObjects1 */
/* Reuse gdjs.ConnectCode.GDhost_95gameObjects1 */
{for(var i = 0, len = gdjs.ConnectCode.GDhost_95gameObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDhost_95gameObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.ConnectCode.GDJoinObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDJoinObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Join"), gdjs.ConnectCode.GDJoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("host_game"), gdjs.ConnectCode.GDhost_95gameObjects1);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDhost_9595gameObjects1ObjectsGDgdjs_46ConnectCode_46GDJoinObjects1Objects, runtimeScene, true, false);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ConnectCode.GDJoinObjects1 */
/* Reuse gdjs.ConnectCode.GDhost_95gameObjects1 */
{for(var i = 0, len = gdjs.ConnectCode.GDhost_95gameObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDhost_95gameObjects1[i].setColor("7;39;4");
}
for(var i = 0, len = gdjs.ConnectCode.GDJoinObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDJoinObjects1[i].setColor("7;39;4");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("host_game"), gdjs.ConnectCode.GDhost_95gameObjects1);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
gdjs.ConnectCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDhost_9595gameObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("playerID").setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map 1", false);
}}

}


{


gdjs.ConnectCode.eventsList1(runtimeScene);
}


{


gdjs.ConnectCode.eventsList2(runtimeScene);
}


};

gdjs.ConnectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConnectCode.GDbackObjects1.length = 0;
gdjs.ConnectCode.GDbackObjects2.length = 0;
gdjs.ConnectCode.GDbackObjects3.length = 0;
gdjs.ConnectCode.GDcloudObjects1.length = 0;
gdjs.ConnectCode.GDcloudObjects2.length = 0;
gdjs.ConnectCode.GDcloudObjects3.length = 0;
gdjs.ConnectCode.GDjoin_95inputObjects1.length = 0;
gdjs.ConnectCode.GDjoin_95inputObjects2.length = 0;
gdjs.ConnectCode.GDjoin_95inputObjects3.length = 0;
gdjs.ConnectCode.GDhost_95gameObjects1.length = 0;
gdjs.ConnectCode.GDhost_95gameObjects2.length = 0;
gdjs.ConnectCode.GDhost_95gameObjects3.length = 0;
gdjs.ConnectCode.GDJoinObjects1.length = 0;
gdjs.ConnectCode.GDJoinObjects2.length = 0;
gdjs.ConnectCode.GDJoinObjects3.length = 0;
gdjs.ConnectCode.GDred_95buttonObjects1.length = 0;
gdjs.ConnectCode.GDred_95buttonObjects2.length = 0;
gdjs.ConnectCode.GDred_95buttonObjects3.length = 0;

gdjs.ConnectCode.eventsList3(runtimeScene);
return;

}

gdjs['ConnectCode'] = gdjs.ConnectCode;
