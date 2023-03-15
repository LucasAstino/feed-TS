import { Fragment, useState } from 'react'
import style from './App.module.css'
import '../global.css'
import { Sidebar } from './Sidebar'
import { Post } from './Post'


const posts =[
  {
    id: 1,
    author:{
      name:'Lucas Astino',
      avatarUrl:'https://avatars.githubusercontent.com/u/116663021?v=4',
      role:'Web Developer'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'#novoprojeto #nlw #rocketseat'},
    ],

    publishedAt: new Date('2023-03-06 14:30:20')
  },
  {
    id: 2,
    author:{
      name:'Victor Ferraz',
      avatarUrl:'https://avatars.githubusercontent.com/u/116657103?s=400&u=f28baa4bc816a5d8145441cffef7d0cd4d81bbb5&v=4',
      role:'Web Designer'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'#novoprojeto #nlw #rocketseat'},
    ],

    publishedAt: new Date('2023-03-05 16:20:10')
  }
]



function App() {
  return(
    <>
    <div className={style.wrapper}>
      <Sidebar/>
      <main>
       {posts.map(post => {
        return <Post key={post.id} publishedAt={post.publishedAt} author={post.author} content={post.content}/>
      })} 
      </main>
    </div>
    </>
  )
}

export default App
