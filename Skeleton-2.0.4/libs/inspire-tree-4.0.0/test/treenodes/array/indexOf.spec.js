var expect = require('chai').expect;
var InspireTree = require('../../../build/inspire-tree');

describe('TreeNodes extends Array.prototype.indexOf', function() {
    var tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1
            }, {
                text: 'B',
                id: 2
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().indexOf).to.be.a('function');
        expect(tree.indexOf).to.be.a('function');
    });

    it('finds the correct index of a given node', function() {
        expect(tree.nodes().indexOf(tree.node(2))).to.equal(1);
    });
});
