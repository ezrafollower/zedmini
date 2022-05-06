
"use strict";

let Object = require('./Object.js');
let RGBDSensors = require('./RGBDSensors.js');
let Skeleton2D = require('./Skeleton2D.js');
let PlaneStamped = require('./PlaneStamped.js');
let BoundingBox3D = require('./BoundingBox3D.js');
let BoundingBox2Df = require('./BoundingBox2Df.js');
let BoundingBox2Di = require('./BoundingBox2Di.js');
let Keypoint3D = require('./Keypoint3D.js');
let Keypoint2Di = require('./Keypoint2Di.js');
let Keypoint2Df = require('./Keypoint2Df.js');
let ObjectsStamped = require('./ObjectsStamped.js');
let Skeleton3D = require('./Skeleton3D.js');

module.exports = {
  Object: Object,
  RGBDSensors: RGBDSensors,
  Skeleton2D: Skeleton2D,
  PlaneStamped: PlaneStamped,
  BoundingBox3D: BoundingBox3D,
  BoundingBox2Df: BoundingBox2Df,
  BoundingBox2Di: BoundingBox2Di,
  Keypoint3D: Keypoint3D,
  Keypoint2Di: Keypoint2Di,
  Keypoint2Df: Keypoint2Df,
  ObjectsStamped: ObjectsStamped,
  Skeleton3D: Skeleton3D,
};
