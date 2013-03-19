var Sun = function () {
    this.time = null;
};

Sun.prototype.getTime = function () {
    return (new Date()).getHours();
};

Sun.prototype.isShining = function () {
};

exports.Sun = Sun;
