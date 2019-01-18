const sinon = require("sinon");

const obj = {foo: () => {}};

// function
sinon.stub(obj, 'foo', function () {
  return 'boom';
}).toString();
sinon.stub(obj, 'bar');

// Arrow Function
sinon.stub(obj, 'foo', () => {});

// getter
const fakeGetter = function () {
  return false;
};
sinon.stub(obj, "prop", {get: fakeGetter});
sinon.stub(obj, 'prop', {
  get() {
    return false;
  }
});

// setter
function setterFn(val) {
  obj.example = val;
}

sinon.stub(obj, 'prop', {set: setterFn});
sinon.stub(obj, 'prop', {
  set(val) {
    obj.example = val;
  }
});

function myFunc() {}
sinon.stub(obj, 'someMethod', myFunc);

// sandboxed variations
this._sandbox.stub(obj, 'foo', () => {});
this.sandbox.stub(obj, 'foo', () => {});

const someobj = {foo: {query: () => {}}};
let arg1, aFunction;
const query = this._sandbox.stub(someobj.foo, 'query', aFunction.bind(null, 'then', arg1));
const query2 = this.sandbox.stub(someobj.foo, 'query', aFunction.bind(null, 'then', arg1));
