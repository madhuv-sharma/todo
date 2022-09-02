System.register([], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ValidatableTodo;
    var __moduleName = context_1 && context_1.id;
    function validate() {
        var validators = [].concat(this._validators), errors = [];
        for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
            var validator = validators_1[_i];
            var result = validator(this);
            if (!result.isValid) {
                errors.push(result);
            }
        }
        return errors;
    }
    exports_1("validate", validate);
    function validatable(target) {
        target.prototype.validate = validate;
    }
    exports_1("validatable", validatable);
    function required(target, propertyName) {
        var validatable = target, validators = (validatable._validators || (validatable._validators = []));
        validators.push(function (instance) {
            var propertyValue = instance[propertyName], isValid = propertyValue != undefined;
            if (typeof propertyValue === 'string') {
                isValid = propertyValue && propertyValue.length > 0;
            }
            return {
                isValid: isValid,
                message: "".concat(propertyName, " is required"),
                property: propertyName
            };
        });
    }
    exports_1("required", required);
    function regex(pattern) {
        var expression = new RegExp(pattern);
        return function regex(target, propertyName) {
            var validatable = target, validators = (validatable._validators || (validatable._validators = []));
            validators.push(function (instance) {
                var propertyValue = instance[propertyName], isValid = expression.test(propertyValue);
                return {
                    isValid: isValid,
                    message: "".concat(propertyName, " does not match ").concat(expression),
                    property: propertyName
                };
            });
        };
    }
    exports_1("regex", regex);
    return {
        setters: [],
        execute: function () {
            ValidatableTodo = /** @class */ (function () {
                function ValidatableTodo() {
                }
                __decorate([
                    required,
                    regex("^[a-zA-Z ]*$")
                ], ValidatableTodo.prototype, "name", void 0);
                ValidatableTodo = __decorate([
                    validatable
                ], ValidatableTodo);
                return ValidatableTodo;
            }());
            exports_1("ValidatableTodo", ValidatableTodo);
        }
    };
});
//# sourceMappingURL=Validators.js.map