export default class RingBuffer<T> {
    capacity: number;
    constructor(_capacity: number);
    push(value: T): void;
    peek(): T | number;
    pop(): T | number;
}
