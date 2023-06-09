import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";
import { React, useState } from "react";

interface commentText {
  commentText: string;
  deleteComment: () => {};
}

export function Comment({ commentText, deleteComment }: commentText) {
  const [like, setLike] = useState(0);

  function handleLikeComment() {
    setLike(like + 1);
  }

  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/116657103?s=400&u=f28baa4bc816a5d8145441cffef7d0cd4d81bbb5&v=4"
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Lucas Astino</strong>
              <time
                title="01 de março às 17:52"
                dateTime="2023-03-01  17:55:00"
              >
                Cerca de 2hrs atrás
              </time>
            </div>

            <button
              onClick={() => deleteComment(commentText)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{commentText}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
