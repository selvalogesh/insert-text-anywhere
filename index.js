import insertTextAtCursor from "insert-text-at-cursor";

export default (text) => {
  var node = document.getSelection().anchorNode;
  const element = node.nodeType === 3 ? node.parentNode : node;
  let inputFlag = false;
  const myNodelist = element.childNodes;
  for (let i = 0; i < myNodelist.length; i++) {
    if (myNodelist[i].nodeName === "INPUT") {
      inputFlag = true;
      break;
    }
  }
  inputFlag && insertTextAtCursor(element, text);
};
