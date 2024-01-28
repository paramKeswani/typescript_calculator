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
var user = /** @class */ (function () {
    function user(u, e) {
        this.username = u;
        this.email = e;
    }
    user.prototype.getUserInfo = function () {
        return "username :" + this.username + "email :" + this.username;
    };
    return user;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(username, email, an, ae) {
        var _this = _super.call(this, username, email) || this;
        _this.adminName = an;
        _this.adminEmail = ae;
        return _this;
    }
    Admin.prototype.grantAccess = function (User) {
        console.log("admin" + this.adminName + "grants access to user " + User.getUserInfo());
    };
    return Admin;
}(user));
var DataManager = /** @class */ (function () {
    function DataManager(data) {
        this.data = data;
    }
    DataManager.prototype.getData = function (admin) {
        return "The data is : " + this.data + " admin is :" + admin.getUserInfo();
    };
    return DataManager;
}());
var norm_user = new user("soham", "abc@gmail.com");
norm_user.getUserInfo();
var administrator = new Admin("param", "abc@gmail.com", "shivam", "xyz@gmail.com");
administrator.getUserInfo();
administrator.grantAccess(norm_user);
var d_m = new DataManager("hello");
console.log(d_m.getData(administrator));
