import React from 'react';

import { AvatarPhoto, Link, UserName, UserUserName } from 'src/atoms/';
import { formatDate } from 'src/utils/date';
import { route } from 'src/Routes';

export function Quack({ quack }) {
  const { user, text, createdAt } = quack;

  const linkToUser = user && route.userDetail(user.userName);

  return (
    <article className="flex w-100 bb b--black-10 pb2 mt2">
      {user && (
        <div className="w3">
          <Link to={linkToUser}>
            <AvatarPhoto src={user.profileImageUrl} alt={user.name} />
          </Link>
        </div>
      )}

      <div className="pl3 flex-auto">
        <div className="pb2">
          {user && (
            <>
              <Link to={linkToUser} className="black-90">
                <UserName name={user.name} />{' '}
                <UserUserName userName={user.userName} />
              </Link>
              {' - '}
            </>
          )}

          <span className="f6 fw4 black-60">{formatDate(createdAt)}</span>
        </div>
        <div className="black-90 pre-line break-word">{text}</div>
      </div>
    </article>
  );
}
