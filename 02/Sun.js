var Sun = function () {
    this.time = null;
};


Sun.prototype.setTime = function (n) {
    this.time = n;
};

Sun.prototype.getTime = function () {
    return this.time;
};

Sun.prototype.isShining = function () {
    var time = this.getTime();

    if (time == null) {
        throw new Error('empty time value');
    }

    if (time >= 5 && time <= 21) {
        return true;
    } else {
        return false;
    }
};

exports.Sun = Sun;
