var expect = require('chai').expect;
var InspireTree = require('../../../build/inspire-tree');

describe('TreeNodes extends Array.prototype.toString', function() {
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
            }, {
                text: 'C',
                id: 3
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().toString).to.be.a('function');
        expect(tree.toString).to.be.a('function');
    });

    it('returns a string representing all nodes', function() {
        expect(tree.nodes().toString()).to.equal('A,B,C');
    });
});
