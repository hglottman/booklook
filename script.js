
var $bookDiv = $('.book');
var fetch = function () {
    var ISBNnumber = $('#isbn').val();
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + ISBNnumber ,
        success: function (data) {
            renderBooks(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

function renderBooks(data){
    var bookTitle = data.items[0].volumeInfo.title;
    var bookAuthor = data.items[0].volumeInfo.authors[0];
    var bookDescription = data.items[0].volumeInfo.description;
    var bookImage = data.items[0].volumeInfo.imageLinks.smallThumbnail;
    console.log(bookDescription);
    // var bookAdded = '<div> <h2>' + bookTitle + '</h2> <br>'
    //  + '<p>' + bookDescription + '</p> <br>' +
    //     '<h3> "Written by "' + bookAuthor + '</h3> <br>' +
    //     '<img src =' + bookImage + 'alt="book Images"> </div>'

    var source = $('#bookToAdd').html();
    var template = Handlebars.compile(source);
    var newHTML = template({bookTitle, bookDescription, bookAuthor, bookImage});
    // append our new html to the page
    $bookDiv.append(newHTML);
    console.log(data);
}


$(".search-book").on("click", function () {
    fetch();
})





