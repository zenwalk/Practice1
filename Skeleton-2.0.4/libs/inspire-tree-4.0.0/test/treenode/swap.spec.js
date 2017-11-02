var expect = require('chai').expect;
var InspireTree = require('../../build/inspire-tree');

describe('TreeNode.prototype.swap', function() {
    var tree;

    before(function() {
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'AA',
                    id: 11
                }]
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
        expect(tree.node(1).swap).to.be.a('function');
    });

    it('swaps two node positions', function() {
        expect(tree.nodes()[0].id).to.equal(1);
        expect(tree.nodes()[1].id).to.equal(2);
        expect(tree.nodes()[2].id).to.equal(3);

        tree.node(1).swap(tree.node(3));

        expect(tree.nodes()[0].id).to.equal(3);
        expect(tree.nodes()[1].id).to.equal(2);
        expect(tree.nodes()[2].id).to.equal(1);
    });

    it('swaps nodes across contexts', function() {
        expect(tree.nodes()[0].id).to.equal(3);
        expect(tree.node(1).children[0].id).to.equal(11);

        tree.node(3).swap(tree.node(11));

        expect(tree.node(1).children[0].id).to.equal(3);
        expect(tree.nodes()[0].id).to.equal(11);
    });
});
