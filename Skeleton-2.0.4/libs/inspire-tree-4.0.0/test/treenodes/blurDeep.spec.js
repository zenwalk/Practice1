var expect = require('chai').expect;
var InspireTree = require('../../build/inspire-tree');

describe('TreeNodes.prototype.blurDeep', function() {
    var tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'B',
                    id: 2
                }]
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().blurDeep).to.be.a('function');
        expect(tree.blurDeep).to.be.a('function');
    });

    it('blurs all nodes', function() {
        var node = tree.node(2);
        node.focus();

        expect(node.focused()).to.be.true;

        tree.blurDeep();
        expect(node.focused()).to.be.false;
    });
});
