$(function() {

    function Button(text) {
        this.text = text || 'Hello';
    }
    Button.prototype = {
        create: function() {
            this.$element = $('<button>');
            this.$element.text(this.text);
            this.$element.click(() => {
                alert(this.text);
            });
            $('body').append(this.$element);
        }
    }

    var btn1 = new Button('Welcome to my webpage!');

    btn1.create();

});