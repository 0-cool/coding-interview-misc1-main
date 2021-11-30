import {assert} from 'chai';
import RingBuffer from './RingBuffer';

describe("RingBuffer", function() {

    it("basic", function () {

        const rb = new RingBuffer<number>(1);


        rb.push(1);
        assert.equal(rb.peek(), 1);

        assert.equal(rb.pop(), 1);


    });

    it("lost data", function() {

        const rb = new RingBuffer<number>(3);
        rb.push(1);
        rb.push(2);
        rb.push(3);
        rb.push(4);

        assert.equal(rb.pop(), 3);

    });

});
