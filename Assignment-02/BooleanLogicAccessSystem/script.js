let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log(isSecure ? "Secure" : "Unsafe");

isDoorLocked = false;
console.log(isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");

isOwnerInside = false;
console.log(!isOwnerInside || !isDoorLocked ? "Unsafe" : "Secure");
