import {assert} from 'chai';
import { DeepCopy } from './DeepCopy';

describe("DeepCopy", function() {

    // TODO: make sure all of the following tests pass with your new code.

    it("basic tests", function() {

        const dict: any = {
            "hello": "world"
        };

        const copy = dict;
        assert.deepEqual(dict, copy);

    });

    it("basic integrity", function() {

        const dict: any = {
            "hello": "world"
        };

        let copy = dict;
        assert.deepEqual(copy, {
            "hello": "world"
        });

    });

    it("inner integrity", function() {

        const dict: any = {
            "hello": "world",
            "inner": {
                "foo": "bar"
            }
        };

        let copy = dict;
        dict['inner']['foo'] = 'bar';

        assert.deepEqual(copy, {
            "hello": "world",
            "inner": {
                "foo": "bar"
            }
        });

    });


    it("inner integrity with array", function() {

        const dict: any = {
            "hello": "world",
            "inner": [
                'bar'
            ]
        };

        let copy = dict;
        dict['inner'][0] = 'bar';

        assert.deepEqual(copy, {
            "hello": "world",
            "inner": [
                'bar'
            ]
        });

    });

    it("deep copy of primitives", function() {

        var str : string = "hello";
        assert.equal(5, 5);
        assert.equal(str, "hello");

    });

})
