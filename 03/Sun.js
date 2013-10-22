var Sun = function () {
};

Sun.prototype.getTime = function () {
    return (new Date()).getHours();
};

Sun.prototype.isShining = function () {
};

exports.Sun = Sun;
