import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'

import {format , formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'




export function Post({ author, publishedAt,content }){

     const dateFormattedTitle = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{locale:ptBr,}
     )

     const dateFormattedRelativetonow = formatDistanceToNow(publishedAt,{locale:ptBr,addSuffix:true})

     const [comments,setComment] = useState([
        1,2
            ])

    const [newCommentText,setNewCommentText] = useState('')
    

        function handleCreateNewComment(){
            event.preventDefault()

            setComment([...comments, newCommentText])
            
            setNewCommentText('')
        }

        function handleNewComment(){

            setNewCommentText(event.target.value)
           
        }
     
    
    return(
        <article className={style.post}>
            <header>
        <div className={style.author}>
            <Avatar src={author.avatarUrl} alt="avatar" />
            <div className={style.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
        </div>


            <time title={dateFormattedTitle} dateTime="2023-03-01  17:55:00" >
            {dateFormattedRelativetonow}
             </time>
            </header>

            <div className={style.content}>
            {content.map(line => {
            if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
             } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
            }
            })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>


                <textarea
                value={newCommentText}
                onChange={handleNewComment}
                name='text'
                placeholder='Deixe um comentário'
                />

                <footer>
                <button type='submit' >Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map(comment =>{
                    return <Comment key={comment} commentText={comment}/>
                })}
            </div>

        </article>
    )
}