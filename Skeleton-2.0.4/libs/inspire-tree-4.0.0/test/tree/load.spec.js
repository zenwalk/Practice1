var chai = require('chai');
var expect = chai.expect;
var InspireTree = require('../../build/inspire-tree');
var sinon = require('sinon');

describe('Tree.load', function() {
    it('loads data via array', function() {
        var tree = new InspireTree({
            data: [{
                text: 'Test'
            }]
        });

        expect(tree.nodes()).to.have.length(1);
    });

    it('clears existing data when deferred loading is not used', function() {
        var tree = new InspireTree({
            data: function(node, resolve) {
                resolve([{
                    text: 'Test'
                }]);
            }
        });

        tree.load([{
            text: 'Test2'
        }]);

        expect(tree.nodes()).to.have.length(1);
    });

    it('loads data via callback', function() {
        var tree = new InspireTree({
            data: function(node, resolve) {
                resolve([{
                    text: 'Test'
                }]);
            }
        });

        expect(tree.nodes()).to.have.length(1);
    });

    it('loads data via promise', function(done) {
        var tree = new InspireTree({
            data: new Promise(function(resolve) {
                resolve([{
                    text: 'Test'
                }]);
            })
        });

        tree.on('data.loaded', function(nodes) {
            expect(nodes).to.have.length(1);
            done();
        });

        tree.on('data.loaderror', done);
    });

    it('doesn\'t error with an invalid nodes array', function(done) {
        var tree = new InspireTree({
            data: []
        });

        tree.load(function(node, resolve) {
            resolve();
        }).catch(function(err) {
            expect(err instanceof TypeError).to.be.true;

            done();
        });
    });

    it('returns a promise', function() {
        var tree = new InspireTree({
            data: []
        });

        expect(tree.load([]).then).to.be.a('function');
    });

    it('loads child node data dynamically', function() {
        var tree = new InspireTree({
            data: function(node, resolve) {
                if (!node) {
                    resolve([{
                        text: 'A',
                        id: 1,
                        children: true
                    }]);
                }
                else {
                    resolve([{
                        text: 'B'
                    }]);
                }
            }
        });

        expect(tree.nodes()).to.have.length(1);

        var parent = tree.node(1);
        expect(parent.children).to.be.true;

        parent.expand();

        expect(parent.children).to.be.an('object');
        expect(parent.children).to.have.length(1);
    });

    it('applies custom sorter', function() {
        var tree = new InspireTree({
            data: [{
                text: 'C'
            }, {
                text: 'B'
            }, {
                text: 'A'
            }],
            sort: 'text'
        });

        var nodes = tree.nodes();
        expect(nodes[0].text).to.equal('A');
        expect(nodes[1].text).to.equal('B');
        expect(nodes[2].text).to.equal('C');
    });

    it('delays event for synchronous loader', function(done) {
        var callback = sinon.spy();

        var tree = new InspireTree({
            data: [{
                text: 'A'
            }]
        });

        tree.on('model.loaded', callback);

        setTimeout(function() {
            callback.should.have.been.called;
            done();
        });
    });

    it('triggers promise on instantiation load error', function(done) {
        var tree = new InspireTree({
            data: function(node, resolve, reject) {
                reject(new Error('Fake'));
            }
        });

        tree._loader.promise.catch(function(err) {
            expect(err.message).to.equal('Fake');

            done();
        });
    });
});
