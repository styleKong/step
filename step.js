
function Step(obj) {
    this.obj = obj;
    this.init();
}
Step.prototype.init = function () {
    let _this = this;
    let dom = document.querySelectorAll(_this.obj.el)[0];
    let stepDom = _this.createStep();
    dom.appendChild(stepDom);
}
Step.prototype.createStep = function () {
    let _this = this;
    let style = {
        width: _this.obj.style.width || '100px',
        height: _this.obj.style.height || '40px',
        border: _this.obj.style.border || '1px #ececec solid',
        display: 'flex',
        display: '-webkit-flex',
        boxSizing: 'border-box',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        ..._this.obj.style
    }
    let html = document.createElement('label');
    Object.getOwnPropertyNames(style).forEach(function (item) {
        html.style[item] = style[item];
    })
    let input = document.createElement('input');
    input.type = 'num';
    input.value = _this.obj.default;
    input.style.cssText = "border: none;outline: none;width: calc(100% - " + parseInt(style.height) / 1.5 + "px);padding: 0 6px;height: 100%;margin: 0; box-sizing: border-box;color: inherit;";
    html.appendChild(input);
    let btnBox = document.createElement('div');
    btnBox.style.cssText = "flex: 1;border-left: " + style.border + ";margin: 0;padding:0;color: inherit;";
    let addBtn = document.createElement('button');
    let removeBtn = document.createElement('button');
    let btnStyle = 'width: 100%;height: 50%;border: none;border-bottom: ' + style.border + ';box-sizing: border-box;background: transparent;outline: none;margin: 0;padding:0;display: block;color: inherit;cursor: pointer; line-height: ' + (parseInt(style.height) - 2) / 2 + 'px;'
    addBtn.style.cssText = btnStyle;
    removeBtn.style.cssText = btnStyle;
    removeBtn.style.borderBottom = 'none';
    addBtn.innerHTML = "+";
    removeBtn.innerHTML = "-";
    addBtn.onclick = function () {
        let length = parseInt(_this.obj.stepLength) || 1;
        let max = parseInt(_this.obj.max);
        let data = parseInt(input.value);
        data = data + length;
        if (max && data > max) {
            return
        }
        input.value = data;
        return _this.obj.addBtn(data)
    }
    removeBtn.onclick = function () {
        let length = parseInt(_this.obj.stepLength) || 1;
        let min = parseInt(_this.obj.min) || 0;
        let data = parseInt(input.value);
        if (data == min) {
            return
        }
        data = data - length;
        if (data < min) {
            data = min
        }
        input.value = data;
        return _this.obj.removeBtn(data)
    }
    btnBox.appendChild(addBtn);
    btnBox.appendChild(removeBtn);
    html.appendChild(btnBox);
    return html
}