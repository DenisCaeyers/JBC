var albumContainer= "#jbcPictureAlbums";

$(document).ready(function () {
  ExecuteOrDelayUntilScriptLoaded(getPictureAlbums, "sp.js");
});

function getPictureAlbums() {
    var allItems = getAlbums("/_api/web/lists/GetByTitle('Album links')/Items?$orderby=Created desc")
    $(albumContainer).css("display","none");
};


function printAlbums(albumArray){
    for(var i = 0; i < albumArray.length; i++){
         $(albumContainer).append(
            "<div class='jbc-album col-md-3'>" +
            "<a class='' id='pictureAlbumLink_" + albumArray[i].Id + "' href='https://jbcbe.sharepoint.com/about/pictures/Pages/AlbumDetail.aspx?albumTitle=" + albumArray[i].Title + "'>" +
                "<div dir='/about/pictures/" + albumArray[i].Title + "'>" +
                    
                        //"<img class='img-responsive jbc-rounded' dir='/about/pictures/" + albumArray[i].Title + "' id='pictureCover_" + albumArray[i].Id + "' src='' />" + 
                       "<div class='jbc-link jbc-yellowLink' style='position:absolute;right:30px;bottom:5px'>" + albumArray[i].Title + "</div>" + 
                   
                "</div>" +
                 "</a> " +
            "</div>");
         /*getFieldValuesForPictureAlbum(albumArray[i].Id);*/ 
         getCoverImage("/_api/web/lists/GetByTitle('" + albumArray[i].Title + "')/Items?$filter=Cover eq 1&$select=Id,FileRef,FileDirRef");
    }
    $(albumContainer).css("display","block");
};

function printCoverImage(coverImageArray){
    for(var i = 0; i < coverImageArray.length; i++){
        //$("img[dir='" + coverImageArray[i].FileDirRef + "']").attr('src',coverImageArray[i].FileRef);
        $("div[dir='" + coverImageArray[i].FileDirRef + "']").attr('style', "border-radius:2px;background-image:url('" + coverImageArray[i].FileRef + "');width:100%;height:175px;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size:cover;")
    }
}

function buildPictureAlbum(dataObject){
    //var albumUrl = dataObject.Library_x005f_x0020_x005f_link.split[','
    $("#pictureAlbumLink_" + dataObject.ID).attr('href', dataObject.Library_x005f_x0020_x005f_link.split(',')[0]);
}

// AJAX REST CALLS
function getAlbums(url) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {
            printAlbums(data.d.results);
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}; 

function getCoverImage(url) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {
            printCoverImage(data.d.results);
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}; 