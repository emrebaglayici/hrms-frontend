import React from "react";
import { Container, Icon, List, Segment } from "semantic-ui-react";
export default function Footer() {
  return (
    <div>
      <Segment
        inverted
        vertical 
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <List.Item href="https://www.github.com/emrebaglayici" >
            <Icon name="github square" size="huge" />
          </List.Item>

          <List.Item as="a" href="https://www.linkedin.com/in/emre-baglayici/">
            <Icon name="linkedin" size="huge" />
          </List.Item>
        </Container>
        <Container textAlign="center" className="copy">
          <List horizontal inverted divided link size="huge">
            <List.Item as="a">
              © 2022 Emre Baglayici
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
