"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscribable_class_1 = require("./Subscribable-class");
var sub = new Subscribable_class_1.Subscribable();
var unsub = sub.subscribe(console.log);
sub.publish('Hello1');
sub.publish('Hello2');
sub.publish('Hello3');
sub.publish('Hello4');
unsub();
sub.publish("Doesn't log");
var DataClass = /** @class */ (function (_super) {
    __extends(DataClass, _super);
    function DataClass(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    DataClass.prototype.setValue = function (v) {
        this.value = v;
        this.publish(v);
    };
    return DataClass;
}(Subscribable_class_1.Subscribable));
var dc = new DataClass(0);
var dcUnsub = dc.subscribe(function (v) { return console.log("DC: " + v); });
var dcUnsub2 = dc.subscribe(function (v) {
    return console.log("DC2: " + v.toExponential(3));
});
dc.setValue(42); // log twice
dcUnsub();
dc.setValue(20); // log once
dcUnsub2();
dc.setValue(50); // log zero
