var CGPoint = require('../index.js');
var assert = require("assert")

var defaultPointValues = new CGPoint();
var defaultY = new CGPoint(1);
var positivePoint = new CGPoint(1, 3);
var negativePoint = new CGPoint(-1, -3);
var mixedPoint = new CGPoint(1, -3);
var doubleProp = new CGPoint(1.1, -3.3 );
var stringProp = new CGPoint("1", "3");
var invalidString = new CGPoint('F','?');

describe('CGPoint', function(){

    describe('Arguments should be of type number (int)', function(){
        it('should coerse non-int values if possible', function(){
            assert.equal(doubleProp.x, 1);
            assert.equal(doubleProp.y, -3);
            assert.equal(stringProp.x, 1);
            assert.equal(stringProp.y, 3);
            assert.equal(mixedPoint.y, -3);
            assert.equal(negativePoint.x, -1);
            assert.equal(negativePoint.y, -3);
            assert.equal(new CGPoint('x', 'z').x, null);
        })
    });


    describe('var defaultPointValues = new CGPoint()', function(){
        it('default values should be null', function(){
            assert.equal(defaultPointValues.x, null);
            assert.equal(defaultPointValues.y, null);
        })
    });

    describe('var point = new CGPoint(1, 3)', function(){
        it('should be point.x = 1 and point.y = 3', function(){
            assert.equal(positivePoint.x, 1);
            assert.equal(positivePoint.y, 3);
        })
    });

    describe('point.equalToPoint(otherPoint)', function(){
        it('should return true if the points are equal', function(){
            assert.equal(defaultPointValues.equalToPoint(new CGPoint()), true);
            assert.equal(positivePoint.equalToPoint(new CGPoint(1, 3)), true);
            assert.equal(negativePoint.equalToPoint(new CGPoint(-1, -3)), true);
            assert.equal(stringProp.equalToPoint(new CGPoint(1, 3)), true);
            assert.equal(mixedPoint.equalToPoint(new CGPoint(1, -3)), true);
            assert.equal(positivePoint.equalToPoint(positivePoint), true);
            assert.equal(positivePoint.equalToPoint(), false);
            assert.equal(positivePoint.equalToPoint(defaultPointValues), false);
            assert.equal(positivePoint.equalToPoint(positivePoint), true);
            assert.equal(positivePoint.equalToPoint(new CGPoint()), false);
            assert.equal(defaultPointValues.equalToPoint(new CGPoint()), true);
        })
    });
});