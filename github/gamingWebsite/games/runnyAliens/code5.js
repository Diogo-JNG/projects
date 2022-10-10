gdjs.PlayCode = {};
gdjs.PlayCode.GDbackObjects1= [];
gdjs.PlayCode.GDbackObjects2= [];
gdjs.PlayCode.GDbackObjects3= [];
gdjs.PlayCode.GDcloudObjects1= [];
gdjs.PlayCode.GDcloudObjects2= [];
gdjs.PlayCode.GDcloudObjects3= [];
gdjs.PlayCode.GDropeObjects1= [];
gdjs.PlayCode.GDropeObjects2= [];
gdjs.PlayCode.GDropeObjects3= [];
gdjs.PlayCode.GDplrObjects1= [];
gdjs.PlayCode.GDplrObjects2= [];
gdjs.PlayCode.GDplrObjects3= [];
gdjs.PlayCode.GDplr2Objects1= [];
gdjs.PlayCode.GDplr2Objects2= [];
gdjs.PlayCode.GDplr2Objects3= [];
gdjs.PlayCode.GDMULTIPLAYERObjects1= [];
gdjs.PlayCode.GDMULTIPLAYERObjects2= [];
gdjs.PlayCode.GDMULTIPLAYERObjects3= [];
gdjs.PlayCode.GDbranchObjects1= [];
gdjs.PlayCode.GDbranchObjects2= [];
gdjs.PlayCode.GDbranchObjects3= [];
gdjs.PlayCode.GDcloudObjects1= [];
gdjs.PlayCode.GDcloudObjects2= [];
gdjs.PlayCode.GDcloudObjects3= [];
gdjs.PlayCode.GDsingleObjects1= [];
gdjs.PlayCode.GDsingleObjects2= [];
gdjs.PlayCode.GDsingleObjects3= [];
gdjs.PlayCode.GDmultiObjects1= [];
gdjs.PlayCode.GDmultiObjects2= [];
gdjs.PlayCode.GDmultiObjects3= [];
gdjs.PlayCode.GDsettingsObjects1= [];
gdjs.PlayCode.GDsettingsObjects2= [];
gdjs.PlayCode.GDsettingsObjects3= [];
gdjs.PlayCode.GDshopObjects1= [];
gdjs.PlayCode.GDshopObjects2= [];
gdjs.PlayCode.GDshopObjects3= [];

gdjs.PlayCode.conditionTrue_0 = {val:false};
gdjs.PlayCode.condition0IsTrue_0 = {val:false};
gdjs.PlayCode.condition1IsTrue_0 = {val:false};
gdjs.PlayCode.condition2IsTrue_0 = {val:false};
gdjs.PlayCode.conditionTrue_1 = {val:false};
gdjs.PlayCode.condition0IsTrue_1 = {val:false};
gdjs.PlayCode.condition1IsTrue_1 = {val:false};
gdjs.PlayCode.condition2IsTrue_1 = {val:false};


gdjs.PlayCode.asyncCallback14399924 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("move"), false);
}}
gdjs.PlayCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.PlayCode.asyncCallback14399924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayCode.asyncCallback14401732 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("move"), true);
}}
gdjs.PlayCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.PlayCode.asyncCallback14401732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDcloudObjects2Objects = Hashtable.newFrom({"cloud": gdjs.PlayCode.GDcloudObjects2});
gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDcloudObjects1Objects = Hashtable.newFrom({"cloud": gdjs.PlayCode.GDcloudObjects1});
gdjs.PlayCode.eventsList2 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDcloudObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cloud");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDcloudObjects2Objects, gdjs.randomInRange(24, 412), -(36), "");
}{for(var i = 0, len = gdjs.PlayCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDcloudObjects2[i].addForce(0, 100, 1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.PlayCode.GDcloudObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDcloudObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.PlayCode.GDcloudObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDcloudObjects2[i].setOpacity(100);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
gdjs.PlayCode.condition1IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "cloud") > gdjs.randomInRange(0.5, 3);
}if ( gdjs.PlayCode.condition0IsTrue_0.val ) {
{
{gdjs.PlayCode.conditionTrue_1 = gdjs.PlayCode.condition1IsTrue_0;
gdjs.PlayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14405364);
}
}}
if (gdjs.PlayCode.condition1IsTrue_0.val) {
gdjs.PlayCode.GDcloudObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDcloudObjects1Objects, gdjs.randomInRange(24, 412), -(36), "");
}{for(var i = 0, len = gdjs.PlayCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDcloudObjects1[i].addForce(0, 100, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cloud");
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmultiObjects1Objects = Hashtable.newFrom({"multi": gdjs.PlayCode.GDmultiObjects1});
gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDsingleObjects1Objects = Hashtable.newFrom({"single": gdjs.PlayCode.GDsingleObjects1});
gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmultiObjects1Objects = Hashtable.newFrom({"multi": gdjs.PlayCode.GDmultiObjects1});
gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.PlayCode.GDbackObjects1});
gdjs.PlayCode.eventsList3 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tree");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "player");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("move"), true);
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tree") > 0.01;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rope"), gdjs.PlayCode.GDropeObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDropeObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDropeObjects1[i].setY(gdjs.PlayCode.GDropeObjects1[i].getY() - (0.5));
}
}{for(var i = 0, len = gdjs.PlayCode.GDropeObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDropeObjects1[i].setHeight(gdjs.PlayCode.GDropeObjects1[i].getHeight() + (0.5));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tree");
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("move"), true);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("plr"), gdjs.PlayCode.GDplrObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDplrObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDplrObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.PlayCode.GDplrObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDplrObjects1[i].addForce(0, -(30), 1);
}
}
{ //Subevents
gdjs.PlayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("move"), true);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("plr2"), gdjs.PlayCode.GDplr2Objects1);
{for(var i = 0, len = gdjs.PlayCode.GDplr2Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDplr2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.PlayCode.GDplr2Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDplr2Objects1[i].addForce(0, 30, 1);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("move"), false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("plr"), gdjs.PlayCode.GDplrObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDplrObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDplrObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.PlayCode.GDplrObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDplrObjects1[i].addForce(0, 30, 1);
}
}
{ //Subevents
gdjs.PlayCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("move"), false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("plr2"), gdjs.PlayCode.GDplr2Objects1);
{for(var i = 0, len = gdjs.PlayCode.GDplr2Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDplr2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.PlayCode.GDplr2Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDplr2Objects1[i].addForce(0, -(30), 1);
}
}}

}


{


gdjs.PlayCode.eventsList2(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("multi"), gdjs.PlayCode.GDmultiObjects1);
gdjs.copyArray(runtimeScene.getObjects("single"), gdjs.PlayCode.GDsingleObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmultiObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDsingleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("multi"), gdjs.PlayCode.GDmultiObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
gdjs.PlayCode.condition1IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PlayCode.condition0IsTrue_0.val ) {
{
gdjs.PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmultiObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PlayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Connect", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.PlayCode.GDbackObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
gdjs.PlayCode.condition1IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PlayCode.condition0IsTrue_0.val ) {
{
gdjs.PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDbackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PlayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayCode.GDbackObjects1.length = 0;
gdjs.PlayCode.GDbackObjects2.length = 0;
gdjs.PlayCode.GDbackObjects3.length = 0;
gdjs.PlayCode.GDcloudObjects1.length = 0;
gdjs.PlayCode.GDcloudObjects2.length = 0;
gdjs.PlayCode.GDcloudObjects3.length = 0;
gdjs.PlayCode.GDropeObjects1.length = 0;
gdjs.PlayCode.GDropeObjects2.length = 0;
gdjs.PlayCode.GDropeObjects3.length = 0;
gdjs.PlayCode.GDplrObjects1.length = 0;
gdjs.PlayCode.GDplrObjects2.length = 0;
gdjs.PlayCode.GDplrObjects3.length = 0;
gdjs.PlayCode.GDplr2Objects1.length = 0;
gdjs.PlayCode.GDplr2Objects2.length = 0;
gdjs.PlayCode.GDplr2Objects3.length = 0;
gdjs.PlayCode.GDMULTIPLAYERObjects1.length = 0;
gdjs.PlayCode.GDMULTIPLAYERObjects2.length = 0;
gdjs.PlayCode.GDMULTIPLAYERObjects3.length = 0;
gdjs.PlayCode.GDbranchObjects1.length = 0;
gdjs.PlayCode.GDbranchObjects2.length = 0;
gdjs.PlayCode.GDbranchObjects3.length = 0;
gdjs.PlayCode.GDcloudObjects1.length = 0;
gdjs.PlayCode.GDcloudObjects2.length = 0;
gdjs.PlayCode.GDcloudObjects3.length = 0;
gdjs.PlayCode.GDsingleObjects1.length = 0;
gdjs.PlayCode.GDsingleObjects2.length = 0;
gdjs.PlayCode.GDsingleObjects3.length = 0;
gdjs.PlayCode.GDmultiObjects1.length = 0;
gdjs.PlayCode.GDmultiObjects2.length = 0;
gdjs.PlayCode.GDmultiObjects3.length = 0;
gdjs.PlayCode.GDsettingsObjects1.length = 0;
gdjs.PlayCode.GDsettingsObjects2.length = 0;
gdjs.PlayCode.GDsettingsObjects3.length = 0;
gdjs.PlayCode.GDshopObjects1.length = 0;
gdjs.PlayCode.GDshopObjects2.length = 0;
gdjs.PlayCode.GDshopObjects3.length = 0;

gdjs.PlayCode.eventsList3(runtimeScene);
return;

}

gdjs['PlayCode'] = gdjs.PlayCode;
