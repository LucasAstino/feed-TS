import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import style from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

interface authorProps {
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };

  publishedAt: Date;

  content: Array<{
    type: string;
    content: string;
  }>;
}

export function Post({ author, publishedAt, content }: authorProps) {
  const dateFormattedTitle = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  });

  const dateFormattedRelativetonow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const [comments, setComment] = useState(["Que bacana! Parabéns."]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComment([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateFormattedTitle} dateTime="2023-03-01  17:55:00">
          {dateFormattedRelativetonow}
        </time>
      </header>

      <div className={style.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
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
          name="text"
          placeholder="Deixe um comentário"
          required
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} commentText={comment} />;
        })}
      </div>
    </article>
  );
}
