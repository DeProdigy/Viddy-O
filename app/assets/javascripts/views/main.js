App.Views.Main = Backbone.View.extend({

  el: '#main',

  events: {
    'submit #search' : 'findVideos'
  },
  initialize: function() {
    console.log('view loaded');
  },
  findVideos: function(e) {

    e.preventDefault();
    console.log('searched videos');

    //get the user input
    var hashtag = $('#search-input').val();
    // add video collection
    this.collection = new Videos( {hashtag: hashtag} );

    this.listenTo(this.collection, "sync", this.showVideos);
  },
  showVideos: function() {
    //go thru everything we receive from Instagram
    var data = this.collection.models;
    for (var i = 0; i < data.length; i++ ){
      var type = data[i].attributes.type;
      //if the data type is a video, render it out
      if (type === 'video') {
        this.renderVideo(data[i]);
      }
    }
  },
  renderVideo: function(video) {

    console.log(video);
    // <video width="320" height="240" controls>
    //   <source src="movie.mp4" type="video/mp4">
    //   <source src="movie.ogg" type="video/ogg">
    // Your browser does not support the video tag.
    // </video>

    // <li class="ui-widget-content ui-corner-tr">
    // <h5 class="ui-widget-header">High Tatras</h5>
    // <img src="http://www.underconsideration.com/brandnew/archives/google_broken_image_06_bliss.gif" alt="The peaks of High Tatras" width="96" height="72">
    // <a href="images/high_tatras.jpg" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>
    // <a href="link/to/trash/script/when/we/have/js/off" title="Delete this image" class="ui-icon ui-icon-trash">Sequence It</a>
    // </li>

    // debugger;
    var imageUrl = video.attributes.images.standard_resolution.url;
    var videoUrl = video.attributes.videos.standard_resolution.url;
    //'<video width="320" height="240" controls><source src="' + url + '" type="video/mp4"></video>'
    $( '#gallery' ).append( '<li data-video_link="' + videoUrl + '"class="ui-widget-content ui-corner-tr"><img src="' + imageUrl + '" alt="The peaks of High Tatras" width="96" height="72"><a href="' + imageUrl  + '" title="View larger image" class="preview">Preview</a><a href="link/to/trash/script/when/we/have/js/off" title="Delete this image" class="ui-icon ui-icon-trash">Sequence It</a></li>' );

    eventListeners();
    jQueryUi();

  }

});
