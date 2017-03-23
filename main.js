// App

class App {
    constructor() {
        this.canvas = new SlideCanvas();
        $("body").append(this.canvas.render());

        this.canvas.addElement(new SimpleContainer());

        $(window).on("resize", () => {
            this.layoutCanvas(false)
        });

        this.layoutCanvas(false);
    }
    

    layoutCanvas(animate) {
      var padding = 50;
      var windowBounds = {
        left: padding,
        top: padding,
        width: window.innerWidth - padding * 2,
        height: window.innerHeight - padding * 2
      };
      this.canvas.layout(windowBounds, animate);
    }
}

// SlideCanvas

class SlideCanvas {
    render() {
        this.$el = $("<div/>").addClass("canvas");
        return this.$el;
    }

    layout(bounds, animate) {
        var padding = 50;
        var canvasWidth = window.innerWidth - padding * 2;
        var canvasHeight = window.innerHeight - padding * 2;

        this.$el.css(bounds);

        if (this.element) {
            this.element.layout({
                left: 0,
                top: 0,
                width: canvasWidth,
                height: canvasHeight
            }, animate);
        }
    }

    addElement(element) {
        this.element = element;
        this.element.canvas = this;

        this.$el.append(element.render());
        element.renderUI();
    }
}

// Elements

class BaseElement {
    render() {
        this.$el = $("<div/>");
        this.$el.addClass("element");
        return this.$el;
    }

    layout(bounds, animate) {
        if (animate) {
            this.$el.animate(bounds);
        } else{
            this.$el.css(bounds);
        }
    }

    renderUI() {

    }
}

class SimpleBox extends BaseElement {
    constructor(label) {
        super();
        this.label = label;
    }

    render() {
        this.$el = $("<div/>");
        this.$el.addClass("element simplebox");

        this.$el.text(this.label);

        return this.$el;
    }
}

class SimpleContainer extends BaseElement {
    constructor() {
        super();
        this.childElements = [];
    }

    render() {
        this.$el = $("<div/>");
        this.$el.addClass("element");

        this.addChildElement(new SimpleBox("SimpleBox"));

        return this.$el;
    }

    layout(bounds){
        this.childElements[0].layout(bounds);
    }

    renderUI() {
        var $button = $("<div/>").addClass("control").text("Change Color");
        this.$el.append($button);

        $button.on("click", () => {
            this.childElements[0].$el.css("background", "orange");
        });
    }

    addChildElement(element) {
        this.childElements.push(element);
        element.parentElement = this;

        this.$el.append(element.render());
        element.renderUI();
    }
}
