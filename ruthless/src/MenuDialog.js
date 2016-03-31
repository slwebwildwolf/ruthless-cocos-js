// Generated by CoffeeScript 1.10.0

/*
  菜单弹出对话框
 */

(function() {
  this.MenuDialog = cc.LayerColor.extend({
    dialog: null,
    dialogLayer: null,
    btnClose: null,
    btnExit: null,
    btnSetting: null,
    btnAbout: null,
    ctor: function() {
      this._super(cc.color(0, 0, 0, 0));
      this.dialog = new Dialog();
      this.dialogLayer = this.dialog.dialogLayer;
      this.addChild(this.dialog);
      this.initExitBtn();
      this.initSettingBtn();
      return this.initAboutBtn();
    },
    initExitBtn: function() {
      var self;
      this.btnExit = new ccui.Button();
      this.btnExit.loadTextureNormal(res.igBtnExitGame, ccui.Widget.LOCAL_TEXTURE);
      this.btnExit.setPressedActionEnabled(true);
      this.btnExit.setTouchEnabled(true);
      this.btnExit.attr({
        x: this.dialogLayer.width / 2,
        y: this.dialogLayer.height - 150
      });
      this.dialogLayer.addChild(this.btnExit, 5);
      self = this;
      return this.btnExit.addTouchEventListener(function(touch, event) {
        if (event === ccui.Widget.TOUCH_ENDED) {
          LogTool.c("点击退出游戏按钮按钮");
          self.dialog.popDialog.hidden();
          return cc.director.end();
        }
      }, this.btnExit);
    },
    initSettingBtn: function() {
      var self;
      this.btnSetting = new ccui.Button();
      this.btnSetting.loadTextureNormal(res.igBtnSettingGame, ccui.Widget.LOCAL_TEXTURE);
      this.btnSetting.setPressedActionEnabled(true);
      this.btnSetting.setTouchEnabled(true);
      this.btnSetting.attr({
        x: this.dialogLayer.width / 2,
        y: this.dialogLayer.height / 2 - 25
      });
      this.dialogLayer.addChild(this.btnSetting, 5);
      self = this;
      return this.btnSetting.addTouchEventListener(function(touch, event) {
        if (event === ccui.Widget.TOUCH_ENDED) {
          LogTool.c("点击游戏设置按钮");
          self.dialog.popDialog.hidden();
          return self.scheduleOnce(function() {
            return self.addChild(new GameSettingDialog(), 5);
          }, THIS.nextDialogDelay);
        }
      }, this.btnSetting);
    },
    initAboutBtn: function() {
      var self;
      this.btnAbout = new ccui.Button();
      this.btnAbout.loadTextureNormal(res.igBtnAboutGame, ccui.Widget.LOCAL_TEXTURE);
      this.btnAbout.setPressedActionEnabled(true);
      this.btnAbout.setTouchEnabled(true);
      this.btnAbout.attr({
        x: this.dialogLayer.width / 2,
        y: 100
      });
      this.dialogLayer.addChild(this.btnAbout, 5);
      self = this;
      return this.btnAbout.addTouchEventListener(function(touch, event) {
        if (event === ccui.Widget.TOUCH_ENDED) {
          LogTool.c("点击关于游戏按钮");
          self.dialog.popDialog.hidden();
          return self.scheduleOnce(function() {
            return self.addChild(new AboutGameDialog(), 5);
          }, THIS.nextDialogDelay);
        }
      }, this.btnAbout);
    }
  });

}).call(this);

//# sourceMappingURL=MenuDialog.js.map
