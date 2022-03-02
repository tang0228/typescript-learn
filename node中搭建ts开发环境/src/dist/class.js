var User = /** @class */ (function () {
    function User(name, _age) {
        this.name = name;
        this._age = _age;
        this.gender = '男';
        this._canPublishNum = 3;
        this._curPublishNum = 1;
        this.id = Math.random();
    }
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return Math.floor(this._age);
        },
        set: function (value) {
            if (value < 0) {
                this._age = 0;
            }
            else if (value > 200) {
                this._age = 200;
            }
            else {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.publish = function (title) {
        if (this._curPublishNum < this._canPublishNum) {
            console.log("发布一篇文章" + title);
            this._curPublishNum++;
        }
        else {
            console.log("文字发布上限");
        }
    };
    return User;
}());
var u = new User('tyq', 12);
u.pid = "123123213";
u.publish('123');
u.publish('123');
u.publish('123');
u.publish('123');
u.publish('123');
u.publish('123');
u.publish('123');
u.age = 123;
console.log(u.age);
