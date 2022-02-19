function displayLikes(article) {
    const comments = fetch(`https://https://john-my-brand.herokuapp.com/like/article/${article}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(likes => {
            document.querySelector("#likeNumber").innerHTML = likes.likes;
            getDislike();
        })
        .catch((err) => {
            console.log(err)
        })
    return comments;
}

function getDislike(article) {
    const comments = fetch(`https://https://john-my-brand.herokuapp.com/${article}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(dislikes => {
            document.querySelector("#dislikeNumber").innerHTML = dislikes.dislikes
        })
        .catch((err) => {
            console.log(err)
        })
    return comments;
}


function addLike(id, likeEl) {

    const newLike = {
        articleId: id,
    }
    let bearer = `Bearer ${localStorage.getItem("token")}`;

    fetch('https://https://john-my-brand.herokuapp.com/like', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newLike)
    }).then(res => {
        if (res.status == 405) {
            alert("You have already liked this article")
        }
        displayLikes(id);
    }).catch((err) => {
        alert("Problem connecting to the server")
        console.log(err)
    })
}

function addDislike(id, likeEl) {

    const newDislike = {
        articleId: id,
    }
    let bearer = `Bearer ${localStorage.getItem("token")}`;

    fetch(`https://https://john-my-brand.herokuapp.com//like/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newDislike)
    }).then(res => {
        if (res.status == 405) {
            alert("You have already disliked this article")
        }
        displayLikes(id);
    }).catch((err) => {
        alert("Problem connecting to the server")
        console.log(err)
    })
}


export {
    addLike,
    addDislike,
    displayLikes,
    getDislike
}