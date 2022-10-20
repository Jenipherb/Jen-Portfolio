import { Card, Image, Menu, Icon } from "semantic-ui-react";

function Projects() {
  return (
    <div style={{backgroundColor: "#ded8ee"}}>
        <br></br>
        <div>
      <Card.Group  centered itemsPerRow={5}>
        <Card style={{ backgroundColor: "#c2d9ee" }}>
            <Image
              floated="right"
              size="medium"
              src={require("../Images/spoon-of-sugar.png")}
            />
            <Card.Content>
            <Card.Header>Spoon Full Of Sugar</Card.Header>
            <Card.Description>
              <strong>Description</strong>: App helps visualize the spoon theory
              and organize items in a attainable fashion.
            </Card.Description>
            <Menu.Item
              href="https://github.com/Jenipherb/Spoons"
              target="_blank"
            >
              <Icon name="github" size="large" /> View Repo
            </Menu.Item>
          </Card.Content>
        </Card>
        <Card style={{ backgroundColor: "#c2d9ee" }}>
          
            <Image
              floated="right"
              size="medium"
              src={require("../Images/stackoverflat.jpg")}
            />
            <Card.Content>
            <Card.Header>Stackoverflat</Card.Header>
            <Card.Description>
              <strong>Description</strong>: A forum that is a Slack and Stack Overflow hybrid.
            </Card.Description>
            <Menu.Item
              href="https://github.com/Garret-Gallant/stackoverflat-mono-repo"
              target="_blank"
            >
              <Icon name="github" size="large" /> View Repo
            </Menu.Item>
          </Card.Content>
        </Card>
        <Card style={{ backgroundColor: "#c2d9ee" }}>
          
            <Image
              floated="right"
              size="medium"
              src={require("../Images/GitGUDLight.png")}
            />
            <Card.Content>
            <Card.Header>Git Gud</Card.Header>
            <Card.Description>
              <strong>Description</strong>: Game review and share app
            </Card.Description>
            <Menu.Item
              href="https://github.com/LorenWilks/git-gud"
              target="_blank"
            >
              <Icon name="github" size="large" /> View Repo
            </Menu.Item>
          </Card.Content>
        </Card>
        <Card style={{ backgroundColor: "#c2d9ee" }}>
          
            <Image
              floated="right"
              size="medium"
              style={{ width: 300, height: 300 }} 
              src={require("../Images/Forge-destiny.jpg")}
            />
            <Card.Content>
            <Card.Header>Forge the Destiny</Card.Header>
            <Card.Description>
              <strong>Description</strong>: Create your own LightSaber and Learn Force User Lore
            </Card.Description>
            <Menu.Item
              href="https://github.com/nickwarren47/phase-3-sinatra-react-project"
              target="_blank"
            >
              <Icon name="github" size="large" /> View Repo Backend
            </Menu.Item>
            <Menu.Item
              href="https://github.com/nickwarren47/sinatra-react-project-front-end"
              target="_blank"
            >
              <Icon name="github" size="large" /> View Repo Frontend
            </Menu.Item>
          </Card.Content>
        </Card>
      </Card.Group>
      </div>
    </div>
  );
}

export default Projects;
