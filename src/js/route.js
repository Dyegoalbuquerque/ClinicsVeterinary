var AppRouter = Backbone.Router.extend({

  routes: {
  	"" : "VeterinaryList",
    "veterinary" : "VeterinaryList",
    "veterinary/:id" : "VeterinaryDetail"
  },

  VeterinaryList : function(){
  	new VeterinaryListView();
  },

  VeterinaryDetail : function(id){
  	new VeterinaryDetailView({id: id});
  }
});

var route = new AppRouter();

Backbone.history.start();


