"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const RingBuffer_1 = __importDefault(require("./RingBuffer"));
describe("RingBuffer", function () {
    it("basic", function () {
        const rb = new RingBuffer_1.default(1);
        rb.push(1);
        chai_1.assert.equal(rb.peek(), 1);
        chai_1.assert.equal(rb.pop(), 1);
    });
    it("lost data", function () {
        const rb = new RingBuffer_1.default(3);
        rb.push(1);
        rb.push(2);
        rb.push(3);
        rb.push(4);
        chai_1.assert.equal(rb.pop(), 3);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmluZ0J1ZmZlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSaW5nQnVmZmVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUE0QjtBQUM1Qiw4REFBc0M7QUFFdEMsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVuQixFQUFFLENBQUMsT0FBTyxFQUFFO1FBRVIsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBR3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWCxhQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzQixhQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUc5QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFFWixNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFVLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWCxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVYLGFBQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTlCLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgUmluZ0J1ZmZlciBmcm9tICcuL1JpbmdCdWZmZXInO1xuXG5kZXNjcmliZShcIlJpbmdCdWZmZXJcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImJhc2ljXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCByYiA9IG5ldyBSaW5nQnVmZmVyPG51bWJlcj4oMSk7XG5cblxuICAgICAgICByYi5wdXNoKDEpO1xuICAgICAgICBhc3NlcnQuZXF1YWwocmIucGVlaygpLCAxKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmIucG9wKCksIDEpO1xuXG5cbiAgICB9KTtcblxuICAgIGl0KFwibG9zdCBkYXRhXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHJiID0gbmV3IFJpbmdCdWZmZXI8bnVtYmVyPigzKTtcbiAgICAgICAgcmIucHVzaCgxKTtcbiAgICAgICAgcmIucHVzaCgyKTtcbiAgICAgICAgcmIucHVzaCgzKTtcbiAgICAgICAgcmIucHVzaCg0KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmIucG9wKCksIDMpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19