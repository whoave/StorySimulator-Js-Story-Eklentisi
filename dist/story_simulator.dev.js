"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// MERT CAN USLU
var storySimulator =
/*#__PURE__*/
function () {
  function storySimulator(a) {
    _classCallCheck(this, storySimulator);

    this.uID = a.uID, this.pIMG = a.pIMG, this.sLIST = a.sLIST, this.fID = a.fID, this.stAdet = 1, this.create(this.uID, this.pIMG, this.sLIST, this.stAdet, this.fID);
  }

  _createClass(storySimulator, [{
    key: "create",
    value: function create(a, b, c, d, e) {
      var f = c.length;
      document.getElementById("story_wrapper").innerHTML += "\n        <div onclick=\"ot('".concat(a, "',").concat(f, ")\" class=\"storysimulator\" >\n            <img  title=\"").concat(e, "\" alt=\"").concat(e, "\" src=\"").concat(b, "\" />\n        </div>\n        <div id=\"").concat(a, "\" class=\"story_ic\">\n            <span id=\"stProgress\">\n            Y\xFCkleniyor...\n            </span>\n            <span onclick=\"ot('").concat(a, "')\" class=\"xtrastory\">X</span>\n        </div>\n        "), c.forEach(function (b) {
        var c = window.innerHeight;
        $("#" + a).html($("#" + a).html() + "<div id=\"".concat(a + "x" + d, "\" style=\"height:").concat(c, "px;background-image:url('").concat(b, "');\"></div>")), d++;
      });
    }
  }]);

  return storySimulator;
}();

function ot(a, b) {
  $("#" + a).is(":hidden") ? $("#" + a).css("display", "block") : $("#" + a).css("display", "none"), $("#" + a + " div").css("display", "none");
  var c = setInterval(function () {
    $("span#stProgress").toggle("slow"), clearInterval(c);
  }, 500),
      d = 0;
  if (!isNaN(b)) var e = setInterval(function () {
    $("#" + a + "x" + d).css("display", "none"), $("#" + a + "x" + ++d).css("display", "block");
  }, 1500);else clearInterval(e), e = "";
}

$(document).on('click', ".storysimulator", function () {
  $(this).addClass("seen");
});