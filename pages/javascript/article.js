let img ;
document.addEventListener("DOMContentLoaded",function(){
    if (document.location.pathname.includes('edit')) {
        getEdit();
    }else if(document.location.pathname.includes('delete')){
         deleteArticle();
    }

   document.querySelector("#image").addEventListener("change",function(e){
    
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        img = reader.result;
    })

    reader.readAsDataURL(this.files[0])
   })
})

document.querySelector('form').addEventListener("submit",function(e){

    localStorage.setItem("kevin",'skdlfjsd')
    e.preventDefault();
    switch (e.target.id){
        case 'new-article-form':
            addNewArticle();
        break;
        case 'edit-article-form':
            editArticle();
        break;
    }
})

function addNewArticle(){
   let title = document.querySelector("#title"),
    body = document.querySelector("#body"),
    tag = document.querySelector("#tag");
   
     let articles = JSON.parse(localStorage.getItem('articles'));
     
      if (articles) {
        articles = articles.length > 0?articles : [];
      }else{
          articles =[]
      }
     let blogArticle = {
        body:body.value,
        tag: tag.value,
        title:title.value,
        image: img
    }
    let bearer = `Bearer ${localStorage.getItem("token")}`;

    fetch('https://https://john-my-brand.herokuapp.com/article', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newArticle)
       }).then(res => {
        if (res.ok)    {
            alert("New article has been added successfully");
            window.location = 'index.html'
    }
       }).catch((err) => {
    alert("Problem connecting to the server")
  })
}
export {
   addArticle
};
function getEdit(){
    console.log('yeah i am here')
    let title = document.querySelector("#title"),
    body = document.querySelector("#title"),
    tag = document.querySelector("#title");
    let currentId = document.location.search.toString().slice(1);
     let articles = JSON.parse(localStorage.getItem('articles'));
     articles.forEach((article,idx) => {
           if (idx == currentId) {
               title.value = article.title;
               body.value = article.body;
               tag.value = article.tag;
           }
     });

   
    //window.location = 'dashboard.html'

}

function deleteArticle(){
    
    let currentId = document.location.search.toString().slice(1);
     let articles = JSON.parse(localStorage.getItem('articles'));
     console.log(currentId)
     fetch("https://john-my-brand.herokuapp.com/article",{
        method: 'POST',
        headers:{
          "Accept":"application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuery)
      })
      .then(res=>{
      })
 
    alert("The article has been Deleted successfully");
    window.location = 'blogMainAdmin.html'
}

function editArticle(){

    let title = document.querySelector("#title").value,
    body = document.querySelector("#title").value,
    tag = document.querySelector("#title").value;

    let currentId = document.location.search.toString().slice(1);
     let articles = JSON.parse(localStorage.getItem('articles'));
     articles.forEach((article,idx) => {
           if (idx == currentId) {
                article.body = body;
                article.tag= tag;
                article.image = img;
                article.title = title;
           }
     });

   
    localStorage.setItem('articles',JSON.stringify(articles));
    alert("The article has been updated successfully");
     window.location ='blogMainAdmin.html'

}

export {addNewArticle};