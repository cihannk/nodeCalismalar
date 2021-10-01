const posts = [{postId: 1, post: "post 1 "}, {postId: 2, post: "post 2 "}, {postId: 3, post: "post 3 "}];


function addPost(post){
    return new Promise((resolve, reject) => {
        if(post?.length){
            let lastId = posts.slice(-1)[0].postId;
            posts.push({postId: lastId+1, post})
            resolve("post eklendi");
        }
        reject("post eklenemedi");
    })
}

function listPosts(){
    return new Promise((resolve, reject) => {
        if(posts.length <= 0){
            reject("Post yok");
        }
        posts.map(post => {
            console.log(`Post ${post.postId}: ${post.post}`);
        })
        resolve("Bütün postlar listelendi");
    })
}

async function postManage(){
    try {
        const listeleme1= await listPosts();
        console.log(listeleme1);
        const ekleme1 = await addPost("yeni post");
        console.log(ekleme1);
        const listeleme2 = await listPosts();
        console.log(listeleme2);
    } catch (error) {
        console.log(error);
    }
}
postManage();