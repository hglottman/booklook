
var fetch = function () {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function (data) {
            var bookTitle = data.items[0].volumeInfo.title;
            var bookAuthor = data.items[0].volumeInfo.authors[0];
            var bookDescription = data.items[0].volumeInfo.description;
            var bookImage = data.items[0].volumeInfo.imageLinks.smallThumbnail;
            var $formDiv = $(this).closest('.book-form');
            var $bookDiv = $($formDiv).siblings('.book');
            // var bookAdded = '<div> <h2>' + bookTitle + '</h2> <br>' + '<p>' + bookAuthor + '</p> <br>' +
            //     '<h3> "Written by "' + bookAuthor + '</h3> <br>' +
            //     '<img src =' + bookImage + 'alt="book Images"> </div>'

            var source = $('.bookToAdd').html();
            var template = Handlebars.compile(source);
            var newHTML = template({bookTitle, bookAuthor, bookAuthor, bookImage});
            // append our new html to the page
            $bookDiv.append(newHTML);
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};


$(".search-book").on("click", function () {
    fetch(this);
})





