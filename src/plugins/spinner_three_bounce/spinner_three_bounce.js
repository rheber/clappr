// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var UIPlugin = require('../../base/ui_plugin');
var Styler = require('../../base/styler');
var JST = require('../../base/jst');

var SpinnerThreeBouncePlugin = UIPlugin.extend({
  name: 'spinner_three_bounce',
  attributes: {
    "data-spinner":""
  },
  initialize: function(options) {
    this.super('initialize');
    this.template = JST[this.name];
    this.listenTo(this.container, 'container:state:buffering', this.onBuffering);
    this.listenTo(this.container, 'container:state:bufferfull', this.onBufferFull);
    this.render();
  },
  onBuffering: function() {
    this.$el.show();
  },
  onBufferFull: function() {
    this.$el.hide();
  },
  render: function() {
    this.$el.hide();
    this.$el.html(this.template());
    var style = Styler.getStyleFor(this.name);
    this.container.$el.append(style);
    this.container.$el.append(this.$el);
    return this;
  }
});

module.exports = SpinnerThreeBouncePlugin;
