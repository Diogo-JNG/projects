gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDbackObjects1= [];
gdjs.Main_32MenuCode.GDbackObjects2= [];
gdjs.Main_32MenuCode.GDbackObjects3= [];
gdjs.Main_32MenuCode.GDcloudObjects1= [];
gdjs.Main_32MenuCode.GDcloudObjects2= [];
gdjs.Main_32MenuCode.GDcloudObjects3= [];
gdjs.Main_32MenuCode.GDropeObjects1= [];
gdjs.Main_32MenuCode.GDropeObjects2= [];
gdjs.Main_32MenuCode.GDropeObjects3= [];
gdjs.Main_32MenuCode.GDplrObjects1= [];
gdjs.Main_32MenuCode.GDplrObjects2= [];
gdjs.Main_32MenuCode.GDplrObjects3= [];
gdjs.Main_32MenuCode.GDplr2Objects1= [];
gdjs.Main_32MenuCode.GDplr2Objects2= [];
gdjs.Main_32MenuCode.GDplr2Objects3= [];
gdjs.Main_32MenuCode.GDversionObjects1= [];
gdjs.Main_32MenuCode.GDversionObjects2= [];
gdjs.Main_32MenuCode.GDversionObjects3= [];
gdjs.Main_32MenuCode.GDtitleObjects1= [];
gdjs.Main_32MenuCode.GDtitleObjects2= [];
gdjs.Main_32MenuCode.GDtitleObjects3= [];
gdjs.Main_32MenuCode.GDbranchObjects1= [];
gdjs.Main_32MenuCode.GDbranchObjects2= [];
gdjs.Main_32MenuCode.GDbranchObjects3= [];
gdjs.Main_32MenuCode.GDcloudObjects1= [];
gdjs.Main_32MenuCode.GDcloudObjects2= [];
gdjs.Main_32MenuCode.GDcloudObjects3= [];
gdjs.Main_32MenuCode.GDplayObjects1= [];
gdjs.Main_32MenuCode.GDplayObjects2= [];
gdjs.Main_32MenuCode.GDplayObjects3= [];
gdjs.Main_32MenuCode.GDsettingsObjects1= [];
gdjs.Main_32MenuCode.GDsettingsObjects2= [];
gdjs.Main_32MenuCode.GDsettingsObjects3= [];
gdjs.Main_32MenuCode.GDprofileObjects1= [];
gdjs.Main_32MenuCode.GDprofileObjects2= [];
gdjs.Main_32MenuCode.GDprofileObjects3= [];
gdjs.Main_32MenuCode.GDhowToPlayObjects1= [];
gdjs.Main_32MenuCode.GDhowToPlayObjects2= [];
gdjs.Main_32MenuCode.GDhowToPlayObjects3= [];
gdjs.Main_32MenuCode.GDshopObjects1= [];
gdjs.Main_32MenuCode.GDshopObjects2= [];
gdjs.Main_32MenuCode.GDshopObjects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.asyncCallback14073636 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("move"), false);
}}
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14073636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback14075380 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("move"), true);
}}
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14075380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcloudObjects2Objects = Hashtable.newFrom({"cloud": gdjs.Main_32MenuCode.GDcloudObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcloudObjects1Objects = Hashtable.newFrom({"cloud": gdjs.Main_32MenuCode.GDcloudObjects1});
gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.Main_32MenuCode.GDcloudObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cloud");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcloudObjects2Objects, gdjs.randomInRange(24, 412), -(36), "");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDcloudObjects2[i].addForce(0, 100, 1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.Main_32MenuCode.GDcloudObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDcloudObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDcloudObjects2[i].setOpacity(100);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "cloud") > gdjs.randomInRange(0.5, 3);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14078812);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
gdjs.Main_32MenuCode.GDcloudObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcloudObjects1Objects, gdjs.randomInRange(24, 412), -(36), "");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDcloudObjects1[i].addForce(0, 100, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cloud");
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.Main_32MenuCode.GDplayObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDsettingsObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDprofileObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDhowToPlayObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDshopObjects1Objects = Hashtable.newFrom({"play": gdjs.Main_32MenuCode.GDplayObjects1, "settings": gdjs.Main_32MenuCode.GDsettingsObjects1, "profile": gdjs.Main_32MenuCode.GDprofileObjects1, "howToPlay": gdjs.Main_32MenuCode.GDhowToPlayObjects1, "shop": gdjs.Main_32MenuCode.GDshopObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDsettingsObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDprofileObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDhowToPlayObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDshopObjects1Objects = Hashtable.newFrom({"play": gdjs.Main_32MenuCode.GDplayObjects1, "settings": gdjs.Main_32MenuCode.GDsettingsObjects1, "profile": gdjs.Main_32MenuCode.GDprofileObjects1, "howToPlay": gdjs.Main_32MenuCode.GDhowToPlayObjects1, "shop": gdjs.Main_32MenuCode.GDshopObjects1});
gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("version"), gdjs.Main_32MenuCode.GDversionObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tree");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "player");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("move"), true);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDversionObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDversionObjects1[i].setString("version:" + gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tree") > 0.01;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rope"), gdjs.Main_32MenuCode.GDropeObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDropeObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDropeObjects1[i].setY(gdjs.Main_32MenuCode.GDropeObjects1[i].getY() - (0.5));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDropeObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDropeObjects1[i].setHeight(gdjs.Main_32MenuCode.GDropeObjects1[i].getHeight() + (0.5));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tree");
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("move"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("plr"), gdjs.Main_32MenuCode.GDplrObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplrObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplrObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDplrObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplrObjects1[i].addForce(0, -(30), 1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("move"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("plr2"), gdjs.Main_32MenuCode.GDplr2Objects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplr2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplr2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDplr2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplr2Objects1[i].addForce(0, 30, 1);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("move"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("plr"), gdjs.Main_32MenuCode.GDplrObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplrObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplrObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDplrObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplrObjects1[i].addForce(0, 30, 1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("move"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("plr2"), gdjs.Main_32MenuCode.GDplr2Objects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplr2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplr2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDplr2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplr2Objects1[i].addForce(0, -(30), 1);
}
}}

}


{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Connect", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("howToPlay"), gdjs.Main_32MenuCode.GDhowToPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("profile"), gdjs.Main_32MenuCode.GDprofileObjects1);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.Main_32MenuCode.GDsettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("shop"), gdjs.Main_32MenuCode.GDshopObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDsettingsObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDprofileObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDhowToPlayObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDshopObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDhowToPlayObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDplayObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDprofileObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDsettingsObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDshopObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].setColor("7;39;4");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDsettingsObjects1[i].setColor("7;39;4");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDprofileObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDprofileObjects1[i].setColor("7;39;4");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDhowToPlayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDhowToPlayObjects1[i].setColor("7;39;4");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDshopObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDshopObjects1[i].setColor("7;39;4");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("howToPlay"), gdjs.Main_32MenuCode.GDhowToPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("profile"), gdjs.Main_32MenuCode.GDprofileObjects1);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.Main_32MenuCode.GDsettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("shop"), gdjs.Main_32MenuCode.GDshopObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDsettingsObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDprofileObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDhowToPlayObjects1ObjectsGDgdjs_46Main_9532MenuCode_46GDshopObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDhowToPlayObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDplayObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDprofileObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDsettingsObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDshopObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDsettingsObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDprofileObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDprofileObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDhowToPlayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDhowToPlayObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDshopObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDshopObjects1[i].setColor("0;0;0");
}
}}

}


{


{
}

}


{


{
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDbackObjects1.length = 0;
gdjs.Main_32MenuCode.GDbackObjects2.length = 0;
gdjs.Main_32MenuCode.GDbackObjects3.length = 0;
gdjs.Main_32MenuCode.GDcloudObjects1.length = 0;
gdjs.Main_32MenuCode.GDcloudObjects2.length = 0;
gdjs.Main_32MenuCode.GDcloudObjects3.length = 0;
gdjs.Main_32MenuCode.GDropeObjects1.length = 0;
gdjs.Main_32MenuCode.GDropeObjects2.length = 0;
gdjs.Main_32MenuCode.GDropeObjects3.length = 0;
gdjs.Main_32MenuCode.GDplrObjects1.length = 0;
gdjs.Main_32MenuCode.GDplrObjects2.length = 0;
gdjs.Main_32MenuCode.GDplrObjects3.length = 0;
gdjs.Main_32MenuCode.GDplr2Objects1.length = 0;
gdjs.Main_32MenuCode.GDplr2Objects2.length = 0;
gdjs.Main_32MenuCode.GDplr2Objects3.length = 0;
gdjs.Main_32MenuCode.GDversionObjects1.length = 0;
gdjs.Main_32MenuCode.GDversionObjects2.length = 0;
gdjs.Main_32MenuCode.GDversionObjects3.length = 0;
gdjs.Main_32MenuCode.GDtitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDtitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDtitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDbranchObjects1.length = 0;
gdjs.Main_32MenuCode.GDbranchObjects2.length = 0;
gdjs.Main_32MenuCode.GDbranchObjects3.length = 0;
gdjs.Main_32MenuCode.GDcloudObjects1.length = 0;
gdjs.Main_32MenuCode.GDcloudObjects2.length = 0;
gdjs.Main_32MenuCode.GDcloudObjects3.length = 0;
gdjs.Main_32MenuCode.GDplayObjects1.length = 0;
gdjs.Main_32MenuCode.GDplayObjects2.length = 0;
gdjs.Main_32MenuCode.GDplayObjects3.length = 0;
gdjs.Main_32MenuCode.GDsettingsObjects1.length = 0;
gdjs.Main_32MenuCode.GDsettingsObjects2.length = 0;
gdjs.Main_32MenuCode.GDsettingsObjects3.length = 0;
gdjs.Main_32MenuCode.GDprofileObjects1.length = 0;
gdjs.Main_32MenuCode.GDprofileObjects2.length = 0;
gdjs.Main_32MenuCode.GDprofileObjects3.length = 0;
gdjs.Main_32MenuCode.GDhowToPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDhowToPlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDhowToPlayObjects3.length = 0;
gdjs.Main_32MenuCode.GDshopObjects1.length = 0;
gdjs.Main_32MenuCode.GDshopObjects2.length = 0;
gdjs.Main_32MenuCode.GDshopObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
