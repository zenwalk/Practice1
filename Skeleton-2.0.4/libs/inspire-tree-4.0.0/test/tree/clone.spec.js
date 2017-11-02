var expect = require('chai').expect;
var InspireTree = require('../../build/inspire-tree');

describe('Tree.clone', function() {
    var tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            selection: {
                autoDeselect: false
            },
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
        expect(tree.clone).to.be.a('function');
    });

    // Note: logic is covered by copy-merges spec
});
