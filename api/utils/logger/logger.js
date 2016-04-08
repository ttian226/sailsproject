/**
 * Created by wangxu on 4/7/16.
 */

module.exports.getLogger = function (title, level) {
  return new MyLogger(title, level);
};

var log4js = require('log4js');

var MyLogger = function (title, level) {
  title = title || 'error';
  level = level || 'INFO';

  // 初始化logger
  this.logger = log4js.getLogger(title);
  // 设置打印级别
  this.logger.setLevel(level);
};

MyLogger.toArray = function (obj) {
  return Array.prototype.slice.call(obj);
};

MyLogger.prototype = {
  trace: function () {
    this.logger.trace(MyLogger.toArray(arguments));
  },
  debug: function () {
    this.logger.debug(MyLogger.toArray(arguments));
  },
  info: function () {
    this.logger.info(MyLogger.toArray(arguments));
  },
  warn: function () {
    this.logger.warn(MyLogger.toArray(arguments));
  },
  error: function () {
    this.logger.error(MyLogger.toArray(arguments));
  },
  fatal: function () {
    this.logger.fatal(MyLogger.toArray(arguments));
  }
};

