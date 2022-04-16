(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(global))
    : typeof define === 'function' && define.amd
    ? define(factory)
    : factory(global);
})(
  typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : this,
  function (global) {
    'use strict';
    global = global || {};
    var _Base64 = global.Base64;
    var version = '2.5.2';
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
      try {
        buffer = eval("require('buffer').Buffer");
      } catch (err) {
        buffer = undefined;
      }
    }
    var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = (function (bin) {
      var t = {};
      for (var i = 0, l = bin.length; i < l; i++) {
        t[bin.charAt(i)] = i;
      }
      return t;
    })(b64chars);
    var fromCharCode = String.fromCharCode;
    var cb_utob = function (c) {
      if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 128
          ? c
          : cc < 2048
          ? fromCharCode(192 | (cc >>> 6)) + fromCharCode(128 | (cc & 63))
          : fromCharCode(224 | ((cc >>> 12) & 15)) +
            fromCharCode(128 | ((cc >>> 6) & 63)) +
            fromCharCode(128 | (cc & 63));
      } else {
        var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
        return (
          fromCharCode(240 | ((cc >>> 18) & 7)) +
          fromCharCode(128 | ((cc >>> 12) & 63)) +
          fromCharCode(128 | ((cc >>> 6) & 63)) +
          fromCharCode(128 | (cc & 63))
        );
      }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function (u) {
      return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function (ccc) {
      var padlen = [0, 2, 1][ccc.length % 3],
        ord =
          (ccc.charCodeAt(0) << 16) |
          ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
          (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
        chars = [
          b64chars.charAt(ord >>> 18),
          b64chars.charAt((ord >>> 12) & 63),
          padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
          padlen >= 1 ? '=' : b64chars.charAt(ord & 63),
        ];
      return chars.join('');
    };
    var btoa = global.btoa
      ? function (b) {
          return global.btoa(b);
        }
      : function (b) {
          return b.replace(/[\s\S]{1,3}/g, cb_encode);
        };
    var _encode = function (u) {
      var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
      return isUint8Array ? u.toString('base64') : btoa(utob(String(u)));
    };
    var encode = function (u, urisafe) {
      return !urisafe
        ? _encode(u)
        : _encode(String(u))
            .replace(/[+\/]/g, function (m0) {
              return m0 == '+' ? '-' : '_';
            })
            .replace(/[=]/g, '');
    };
    var encodeURI = function (u) {
      return encode(u, true);
    };
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function (cccc) {
      switch (cccc.length) {
        case 4:
          var cp =
              ((7 & cccc.charCodeAt(0)) << 18) |
              ((63 & cccc.charCodeAt(1)) << 12) |
              ((63 & cccc.charCodeAt(2)) << 6) |
              (63 & cccc.charCodeAt(3)),
            offset = cp - 65536;
          return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);
        case 3:
          return fromCharCode(
            ((15 & cccc.charCodeAt(0)) << 12) | ((63 & cccc.charCodeAt(1)) << 6) | (63 & cccc.charCodeAt(2)),
          );
        default:
          return fromCharCode(((31 & cccc.charCodeAt(0)) << 6) | (63 & cccc.charCodeAt(1)));
      }
    };
    var btou = function (b) {
      return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function (cccc) {
      var len = cccc.length,
        padlen = len % 4,
        n =
          (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) |
          (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) |
          (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) |
          (len > 3 ? b64tab[cccc.charAt(3)] : 0),
        chars = [fromCharCode(n >>> 16), fromCharCode((n >>> 8) & 255), fromCharCode(n & 255)];
      chars.length -= [0, 0, 2, 1][padlen];
      return chars.join('');
    };
    var _atob = global.atob
      ? function (a) {
          return global.atob(a);
        }
      : function (a) {
          return a.replace(/\S{1,4}/g, cb_decode);
        };
    var atob = function (a) {
      return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = buffer
      ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (a) {
            return (a.constructor === buffer.constructor ? a : buffer.from(a, 'base64')).toString();
          }
        : function (a) {
            return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
          }
      : function (a) {
          return btou(_atob(a));
        };
    var decode = function (a) {
      return _decode(
        String(a)
          .replace(/[-_]/g, function (m0) {
            return m0 == '-' ? '+' : '/';
          })
          .replace(/[^A-Za-z0-9\+\/]/g, ''),
      );
    };
    var noConflict = function () {
      var Base64 = global.Base64;
      global.Base64 = _Base64;
      return Base64;
    };
    global.Base64 = {
      VERSION: version,
      atob: atob,
      btoa: btoa,
      fromBase64: decode,
      toBase64: encode,
      utob: utob,
      encode: encode,
      encodeURI: encodeURI,
      btou: btou,
      decode: decode,
      noConflict: noConflict,
      __buffer__: buffer,
    };
    if (typeof Object.defineProperty === 'function') {
      var noEnum = function (v) {
        return {
          value: v,
          enumerable: false,
          writable: true,
          configurable: true,
        };
      };
      global.Base64.extendString = function () {
        Object.defineProperty(
          String.prototype,
          'fromBase64',
          noEnum(function () {
            return decode(this);
          }),
        );
        Object.defineProperty(
          String.prototype,
          'toBase64',
          noEnum(function (urisafe) {
            return encode(this, urisafe);
          }),
        );
        Object.defineProperty(
          String.prototype,
          'toBase64URI',
          noEnum(function () {
            return encode(this, true);
          }),
        );
      };
    }
    if (global.Meteor) {
      Base64 = global.Base64;
    }
    if (typeof module !== 'undefined' && module.exports) {
      module.exports.Base64 = global.Base64;
    } else if (typeof define === 'function' && define.amd) {
      define([], function () {
        return global.Base64;
      });
    }
    return { Base64: global.Base64 };
  },
);
