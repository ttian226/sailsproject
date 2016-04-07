/**
 * Created by wangxu on 4/6/16.
 */

module.exports = {
  index: function (req, res) {
    console.log(req.headers.referer);
    res.ok();
  }
};