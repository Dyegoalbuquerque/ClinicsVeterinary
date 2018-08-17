
var VeterinaryItem = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.id = options.id;
  },
  url: function() {
    return "http://localhost:3000/veterinary/" + this.id;
  },
  model: Veterinary,
});


var VeterinaryDetailView = Backbone.View.extend({
    el: $('#content'),
    initialize: function(){ this.render(this.id ) },

    render: function(id) {
      var that = this;
      var template = _.template;
      var veterinary = new VeterinaryItem([], { id: id});
      veterinary.fetch({
        success: function(vet){

           jQuery.get('src/template/veterinaryDetail.html', function (data) {
                var tmpl = template(data, { item: vet.models });
                that.$el.html(tmpl);
           });
        }
      });
    }
});