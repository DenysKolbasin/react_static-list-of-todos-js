import cn from 'classnames';
import { UserInfo } from "../UserInfo";

export const TodoInfo = (
  { todo: {
    user,
    completed,
    title,
  },
  }) => (
  <article className={cn('TodoInfo', {
    'TodoInfo--completed': completed,
  })}
  >
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo user={user} />}
  </article >
);