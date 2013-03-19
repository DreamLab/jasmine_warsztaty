var Sun = function () {
    this.time = null;
};

Sun.prototype.getTime = function () {
    return (new Date()).getHours();
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
