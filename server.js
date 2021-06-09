import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json())
app.use(cors())
let posts = [{
    id: 1,
    title: 'Hello World',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2}
    ,
    {id: 2,
    title: 'Hello World',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2
  }];



app.get('/posts',(req,res) => {
   res.send(posts)
})
app.get('/posts/:id',(req, res) => {
    const id = parseInt(req.params.id);
    const postsend = posts.filter((i)=>i.id === id);
    res.send(postsend[0]);

})
app.post('/posts',(req,res)=>{
    posts.push(req.body)
})

app.listen(4000,()=> {console.log('rodando server')});
