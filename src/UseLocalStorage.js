"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RememberPassword = exports.useLocalStorageState = void 0;
const react_1 = __importDefault(require("react"));
function useLocalStorageState(key, initialValue) {
    return [];
}
exports.useLocalStorageState = useLocalStorageState;
const RememberPassword = () => {
    const [value, setValue] = react_1.default.useState('off');
    return (react_1.default.createElement("input", { type: "checkbox", value: value, onChange: event => setValue(event.currentTarget.value) }));
};
exports.RememberPassword = RememberPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlTG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlTG9jYWxTdG9yYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBMEI7QUE2QjFCLFNBQWdCLG9CQUFvQixDQUFJLEdBQVcsRUFBRSxZQUFlO0lBSWhFLE9BQU8sRUFBUyxDQUFDO0FBRXJCLENBQUM7QUFORCxvREFNQztBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO0lBR2pDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUdoRCxPQUFPLENBQ0gseUNBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ2pHLENBQUM7QUFFTixDQUFDLENBQUE7QUFWWSxRQUFBLGdCQUFnQixvQkFVNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudCBhIHJlcGxhY2VtZW50IGZvciB1c2VTdGF0ZSB3aGljaCBrZWVwcyB2YWx1ZXMgaW4gdGhlIGxvY2FsU3RvcmFnZS5cbiAqXG4gKiBUaGUgaWRlYSBoZXJlIGlzIHRoYXQgYWxsIGNhbGxzIHRvIHVzZSB1c2VTdGF0ZSBjYW4gYmUgcmVwbGFjZWQgd2l0aFxuICogdXNlTG9jYWxTdG9yYWdlU3RhdGUoa2V5LCBpbml0aWFsVmFsdWUpIGFuZCBpbXBsZW1lbnQgdGhlIHNhbWUgYmVoYXZpb3IuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdXNlTG9jYWxTdG9yYWdlU3RhdGUgaXMgY2FsbGVkIHRoZSB2YWx1ZSB3aWxsIGJlIGluaXRpYWxWYWx1ZVxuICogYmVjYXVzZSBub3RoaW5nIGlzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2UuXG4gKlxuICogRWFjaCB0aW1lIHRoZSB1c2VyIGNhbGxzIHRoZSBzZXR0ZXIgKHNpbWlsYXIgdG8gdXNlU3RhdGUpIHdlIG5lZWQgdG8gdHJpZ2dlclxuICogY29tcG9uZW50IHJlLXJlbmRlciBhbmQgc2F2ZSB0aGUgdXBkYXRlZCB2YWx1ZSBpbiBsb2NhbFN0b3JhZ2UuXG4gKlxuICogVGhlIG5leHQgdGltZSB3ZSBhcmUgY2FsbGVkIHdlIHNob3VsZCB1c2UgdGhlIHZhbHVlIGZyb20gbG9jYWxTdG9yYWdlLlxuICpcbiAqIFdlIHNob3VsZCBzdXBwb3J0IHRoZSBmb2xsb3dpbmcgdmFsdWVzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2U6XG4gKlxuICogc3RyaW5nLCBudW1iZXIsIG9iamVjdCwgYXJyYXlcbiAqXG4gKiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgR2l0SHViIGdpc3RzIGhlcmUgYmVjYXVzZSB0aGVyZSdzIG5vIGNvbXBpbGVyLiAgUGxlYXNlXG4gKiBtYWtlIHN1cmUgeW91ciBjb2RlIGlzIGZ1bGx5IGZvcm1lZCwgbm8gZWRnZSBjYXNlLCBjbGVhbiwgZXRjLlxuICpcbiAqIFdlJ3JlIG5vdCB3b3JyaWVkIGFib3V0IHNtYWxsIGlzc3VlcyBsaWtlIGltcG9ydHMuIFRoZSBtYWluIGlzc3VlIGlzIHRoYXQgdGhlXG4gKiBjb2RlIGlzIGZyZWUgb2YgYnVncyBhbmQgaGlnaCBxdWFsaXR5LlxuICpcbiAqIEBwYXJhbSBrZXkgVGhlIGtleSBzaG91bGQgYmUgdGhlIGtleSB1c2VkIGJ5IGxvY2FsU3RvcmFnZVxuICogQHBhcmFtIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSB0byBzdG9yZSBmb3IgdGhlIGZpcnN0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlU3RhdGU8Vj4oa2V5OiBzdHJpbmcsIGluaXRpYWxWYWx1ZTogVik6IFtWLCAobmV3VmFsdWU6IFYpID0+IHZvaWRdIHtcblxuICAgIC8vIFRPRE86IGltcGxlbWVudCB0aGlzIGNvZGUgLSB0aGlzIGp1c3QgcmV0dXJucyAnYW55JyB3aGljaCB3b3VsZCBub3QgYmUgdXNhYmxlLlxuXG4gICAgcmV0dXJuIFtdIGFzIGFueTtcblxufVxuXG5leHBvcnQgY29uc3QgUmVtZW1iZXJQYXNzd29yZCA9ICgpID0+IHtcblxuICAgIC8vIFRPRE86IGNoYW5nZSB0aGlzIHRvIHVzZSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJ29mZicpO1xuICAgIC8vIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoJ3JlbWVtYmVyLXBhc3N3b3JkJywgJ29mZicpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldFZhbHVlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpfS8+XG4gICAgKTtcblxufVxuIl19