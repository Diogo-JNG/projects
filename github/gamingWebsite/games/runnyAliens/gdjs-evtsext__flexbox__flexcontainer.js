
gdjs.evtsExt__FlexBox__FlexContainer = gdjs.evtsExt__FlexBox__FlexContainer || {};

/**
 * Behavior generated from Flex container
 */
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer = class FlexContainer extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.ID = behaviorData.ID !== undefined ? behaviorData.ID : "Default";
    this._behaviorData.Direction = behaviorData.Direction !== undefined ? behaviorData.Direction : "right";
    this._behaviorData.Wrap = behaviorData.Wrap !== undefined ? behaviorData.Wrap : "nowrap";
    this._behaviorData.JustifyContent = behaviorData.JustifyContent !== undefined ? behaviorData.JustifyContent : "flex-start";
    this._behaviorData.AlignItems = behaviorData.AlignItems !== undefined ? behaviorData.AlignItems : "stretch";
    this._behaviorData.AlignContent = behaviorData.AlignContent !== undefined ? behaviorData.AlignContent : "normal";
    this._behaviorData.Gap = behaviorData.Gap !== undefined ? behaviorData.Gap : Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ID !== newBehaviorData.ID)
      this._behaviorData.ID = newBehaviorData.ID;
    if (oldBehaviorData.Direction !== newBehaviorData.Direction)
      this._behaviorData.Direction = newBehaviorData.Direction;
    if (oldBehaviorData.Wrap !== newBehaviorData.Wrap)
      this._behaviorData.Wrap = newBehaviorData.Wrap;
    if (oldBehaviorData.JustifyContent !== newBehaviorData.JustifyContent)
      this._behaviorData.JustifyContent = newBehaviorData.JustifyContent;
    if (oldBehaviorData.AlignItems !== newBehaviorData.AlignItems)
      this._behaviorData.AlignItems = newBehaviorData.AlignItems;
    if (oldBehaviorData.AlignContent !== newBehaviorData.AlignContent)
      this._behaviorData.AlignContent = newBehaviorData.AlignContent;
    if (oldBehaviorData.Gap !== newBehaviorData.Gap)
      this._behaviorData.Gap = newBehaviorData.Gap;

    return true;
  }

  // Properties:
  
  _getID() {
    return this._behaviorData.ID !== undefined ? this._behaviorData.ID : "Default";
  }
  _setID(newValue) {
    this._behaviorData.ID = newValue;
  }
  _getDirection() {
    return this._behaviorData.Direction !== undefined ? this._behaviorData.Direction : "right";
  }
  _setDirection(newValue) {
    this._behaviorData.Direction = newValue;
  }
  _getWrap() {
    return this._behaviorData.Wrap !== undefined ? this._behaviorData.Wrap : "nowrap";
  }
  _setWrap(newValue) {
    this._behaviorData.Wrap = newValue;
  }
  _getJustifyContent() {
    return this._behaviorData.JustifyContent !== undefined ? this._behaviorData.JustifyContent : "flex-start";
  }
  _setJustifyContent(newValue) {
    this._behaviorData.JustifyContent = newValue;
  }
  _getAlignItems() {
    return this._behaviorData.AlignItems !== undefined ? this._behaviorData.AlignItems : "stretch";
  }
  _setAlignItems(newValue) {
    this._behaviorData.AlignItems = newValue;
  }
  _getAlignContent() {
    return this._behaviorData.AlignContent !== undefined ? this._behaviorData.AlignContent : "normal";
  }
  _setAlignContent(newValue) {
    this._behaviorData.AlignContent = newValue;
  }
  _getGap() {
    return this._behaviorData.Gap !== undefined ? this._behaviorData.Gap : Number("0") || 0;
  }
  _setGap(newValue) {
    this._behaviorData.Gap = newValue;
  }
}

// Methods:
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.userFunc0x829a20 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
// Create an HTML element for letting the Browser calculate the CSS.
behavior.element = Object.assign(document.createElement("div"), {
    id: objects[0].getName() + "-" + objects[0].getUniqueId(),
});

const directionMap = {
    right: "row",
    left: "row-reverse",
    down: "column",
    up: "column-reverse",
}

// Set default styles
Object.assign(behavior.element.style, {
    top: 0,
    left: 0,
    display: "flex",
    position: "absolute",
    "flex-direction": directionMap[behavior._getDirection()],
    "flex-wrap": behavior._getWrap(),
    "gap": behavior._getGap() + "px",
    "justify-content": behavior._getJustifyContent(),
    "align-items": behavior._getAlignItems(),
    "align-content": behavior._getAlignContent(),
});

// Small hack to trick the browser into calculating 
// styles without actually putting the element in the DOM 
// (which would pollute the game website and falsify the 
// positional data as other elements would mess with the 
// objects position).
document.body.appendChild(Object.assign(document.createElement("iframe"), { style: "position: absolute; width:0; height:0; border:0;" })).contentDocument.body.appendChild(behavior.element);

// Expose a "global interface" to allow LayoutItems to interact with the container.
(gdjs.layoutContainers || (gdjs.layoutContainers = {}))[behavior._getID()] =
    {
        addChild: behavior.element.appendChild.bind(behavior.element),
    };

};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.userFunc0x829a20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.userFunc0x829ab0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Update the CSS of the HTML element.
const behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
Object.assign(behavior.element.style, {
    width: objects[0].getWidth() + "px",
    height: objects[0].getHeight() + "px",
    "margin-top": objects[0].getY() + "px",
    "margin-left": objects[0].getX() + "px",
});

};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(13744836);
}
}if (gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.userFunc0x829ab0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext = {};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.GDObjectObjects1= [];

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.userFunc0x8298b0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const directionMap = {
    right: "row",
    left: "row-reverse",
    down: "column",
    up: "column-reverse",
};

const behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
behavior.element.style["flex-direction"] = directionMap[eventsFunctionContext.getArgument("direction")];

};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.GDObjectObjects1);
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.userFunc0x8298b0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirection = function(direction, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext = {};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.GDObjectObjects1= [];

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.userFunc0x829878 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
behavior.element.style["flex-wrap"] = eventsFunctionContext.getArgument("wrap");

};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.GDObjectObjects1);
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.userFunc0x829878(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrap = function(wrap, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "wrap") return wrap;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetFlexWrapContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext = {};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.GDObjectObjects1= [];

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.userFunc0x829878 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
behavior.element.style["justify-content"] = eventsFunctionContext.getArgument("alignement");

};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.GDObjectObjects1);
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.userFunc0x829878(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlign = function(alignement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "alignement") return alignement;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetXAlignContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext = {};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.GDObjectObjects1= [];

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.userFunc0x829878 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
behavior.element.style["align-items"] = eventsFunctionContext.getArgument("alignement");

};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.GDObjectObjects1);
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.userFunc0x829878(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlign = function(alignement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "alignement") return alignement;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetYAlignContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext = {};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.GDObjectObjects1= [];

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.userFunc0x829888 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behavior = objects[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
behavior.element.style["align-items"] = eventsFunctionContext.getArgument("alignement");

};
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.GDObjectObjects1);
gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.userFunc0x829888(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlign = function(alignement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "alignement") return alignement;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer.prototype.SetLineAlignContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("FlexBox::FlexContainer", gdjs.evtsExt__FlexBox__FlexContainer.FlexContainer);
