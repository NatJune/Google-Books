function bookSearch(){
    let search = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    console.log('search')
    $.ajax({
        url:`https://www.googleapis.com/books/v1/volumes?key=AIzaSyCbIN6pOGYZmiOCt_zYRpPlFsN6BNtUpCc&q=` + search,
        dataType: "json",
        type:'GET'

    
    }).then( function(data){
                results.innerHTML += "<h3>" + "<a href=" + data.items[0].volumeInfo.previewLink + ">" + data.items[0].volumeInfo.title + "</a>" + 
                "<br>Author(s): "+ data.items[0].volumeInfo.authors + "<br> Publisher: "+ data.items[0].volumeInfo.publisher + "<br>Publish date: " + data.items[0].volumeInfo.publishedDate +"<br>Page count: "+ data.items[0].volumeInfo.pageCount
                +"<br><br>"+
                "<img src=" + data.items[0].volumeInfo.imageLinks.thumbnail + ">"
                "</h3>"

    });
}

document.getElementById('button').addEventListener('click', bookSearch, false)


 // success: function(data){
        //     for(i = 0; i < data.items.length; i++){
        //         results.innerHTML += "<h2>" + data.items[i].volumeInfo.title +"</h2>"
        //     }
        // },