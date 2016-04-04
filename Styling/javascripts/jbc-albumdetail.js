var albumContainer= "#jbc-albumdetail";

$(document).ready(function () {
  ExecuteOrDelayUntilScriptLoaded(buildPictureItems, "sp.init.js");
});

function buildPictureItems() {
    $('#DeltaPlaceHolderPageTitleInTitleArea').html(decodeURIComponent(QueryString.albumTitle));
    var allItems = getPictureAlbumItems("/_api/web/lists/GetByTitle('" + decodeURIComponent(QueryString.albumTitle) + "')/Items?$orderby=Created desc");
    //$(albumContainer).css("display","none");
};

function printPictures(itemArray){
     for(var i = 0; i < itemArray.length; i++){
        $(albumContainer).append("<div id='jbc-albumpicture_" + itemArray[i].Id + "' class='jbc-albumpicture col-md-2' style='margin-bottom:30px'></div>");
        getPictureDetail(itemArray[i].Id);
    }
}

function printPictureDetail(item){
    //("#jbc-albumpicture_" + item.ID).append("<img src='" + item.FileRef + "' class='img-responsive'/>");
    $("#jbc-albumpicture_" + item.ID).append("<a href='" + item.FileRef + "' data-lightbox='album'><img src='" + item.FileRef + "' class='img-responsive jbc-rounded'/></a>");
    lightbox.init();
}


// AJAX REST CALLS
function getPictureAlbumItems(url) {
        $.when(
            $.ajax({
                url: _spPageContextInfo.webAbsoluteUrl + url,
                type: "GET",
                headers: {
                    "accept": "application/json;odata=verbose",
                },
                success: function (data) {
                    printPictures(data.d.results);
                },
                error: function (error) {
                    alert(JSON.stringify(error));
                }
            }).done(function(){
                lightbox.init();
            })
        );
};  

function getPictureDetail(itemId) {

        $.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('" + decodeURIComponent(QueryString.albumTitle) + "')/Items(" + itemId + ")/FieldValuesAsText",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success: function (data) {
                printPictureDetail(data.d);
            },
            error: function (error) {
                alert(JSON.stringify(error));
            }
        })
    
}; 

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();