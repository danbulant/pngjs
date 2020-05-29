import parse from "./parser-sync.js";
import pack from "./packer-sync.js";

export var read = function (buffer, options) {
  return parse(buffer, options || {});
};

export var write = function (png, options) {
  return pack(png, options);
};

export default {
  read,
  write
}