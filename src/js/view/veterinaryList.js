var VeterinaryCollection = Backbone.Collection.extend({
  model: Veterinary,
  url: "http://localhost:3000/veterinary",
  mode: "client"
});


var VeterinaryListView = Backbone.View.extend({
    el: $('#content'),
    initialize: function(){ this.render() },

    render: function() {
      var that = this;
      var template = _.template;
      var veterinaries = new VeterinaryCollection();
      veterinaries.fetch({
        success: function(veterinaries){

           jQuery.get('src/template/veterinaryList.html', function (data) {
                var tmpl = template(data, { itens: veterinaries.models });
                that.$el.html(tmpl);
           });
        }
      });
    }
});