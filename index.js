var splineLoopSample = require('threejs-spline-loop-sample');
function SplineLoop(points) {
	THREE.Spline.call(this, points);
	splineLoopSample(this);
}

SplineLoop.prototype = Object.create(THREE.Spline.prototype);
module.exports = SplineLoop;