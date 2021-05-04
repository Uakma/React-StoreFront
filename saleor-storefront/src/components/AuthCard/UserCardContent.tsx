import React from "react";
import { Link } from "react-router-dom";
import "./scss/user-card.scss";

import { Button } from "..";
import { UserDetails_me } from "@temp/@sdk/queries/gqlTypes/UserDetails";
import { useSignOut } from "@temp/@sdk/react";
import { LINKS } from "../../views/Account/constants";

type Props = {
  user: UserDetails_me;
};

const UserCardContent: React.FC<Props> = ({ user }) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  const [signOut] = useSignOut();

  return (
    <div className="user-card">
      <h3 className="user-card__heading">Hello {fullName}</h3>
      <div className="user-card__links">
        {LINKS.map((link, index) => (
          <Link to={link.link} className="user-card__link" key={index}>
            <span className="user-card__link__text">{link.text}</span>
            {link.icon}
          </Link>
        ))}
      </div>
      <Button color="black" onClick={signOut}>
        Log out {fullName}
      </Button>
    </div>
  );
};

export default UserCardContent;
