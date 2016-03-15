module.exports = {
    boot: function () {
        this.button = this.createButton();
        this.container = this.createContainer(this.button);
        document.body.appendChild(this.container);

        this.buttonClickCount = 0;
        this.button.addEventListener("click", function () {
            ++this.buttonClickCount;
        }.bind(this));
    },
    destroy: function () {
        document.body.removeChild(this.container);
        delete(this.container);
        delete(this.button);
        this.buttonClickCount = 0;
    },
    createButton: function () {
        var button = document.createElement("button");
        button.setAttribute("value", "blah");
        return button;
    },
    createContainer: function (button) {
        var container = document.createElement("div");
        container.appendChild(button);
        return container;
    }
};