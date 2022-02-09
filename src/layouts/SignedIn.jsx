import React from 'react';
import { Dropdown, Menu,Image} from 'semantic-ui-react';

export default function SignedIn({signOut}) {
  return <div>
      <Menu.Item>
          <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/25137836?s=400&u=cc32d3e928a2d2eff884878654dcfe5e140505df&v=4"/>
          <Dropdown pointing="top left" text="Emre">
              <Dropdown.Menu>
                  <Dropdown.Item text="Bilgilerim" icon="info"/>
                  <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
              </Dropdown.Menu>
          </Dropdown>
      </Menu.Item>
  </div>;
}
