import React from 'react';
import { Button, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CARD_FINANCES = {
    title: "Money flows?",
    description: "Look at income and expense charts!",
    link: "/finances",
    linkName: "Finances"
}

const CARD_RECIPES = {
    title: "Production chains?",
    description: "Click around in the recipe tree!",
    link: "/recipes",
    linkName: "Recipes"
}

const CARD_LOGISTICS = {
    title: "Product flows?",
    description: "See the consumption bars!",
    link: "/logistics",
    linkName: "Logistics"
}

const CARD_LEDGER = {
    title: "Editing?",
    description: "Edit recipes, products and production quotas!",
    link: "/ledger",
    linkName: "Ledger"
}

const CARD_WORLD_SETTINGS = {
    title: "Changing globals?",
    description: "Override global parameters!",
    link: "/setting",
    linkName: "World Settings"
}

const ALL_CARDS = [CARD_FINANCES, CARD_LOGISTICS, CARD_LEDGER, CARD_RECIPES, CARD_WORLD_SETTINGS];


const Home: React.FC = () => {

    return (
        <Container>
            <Row key="options">
                <Col>
                    <CardGroup >
                        {ALL_CARDS.map((entry, idx) => (
                            <Card key={idx} bg="white" text="dark" className="border-2 shadow m-3">
                                <Card.Body className="d-flex flex-column">
                                    <div>

                                        <Card.Title>{entry.title}</Card.Title>
                                        <Card.Text>
                                            {entry.description}
                                        </Card.Text>
                                        <Card.Link ></Card.Link>
                                        <div className="d-flex justify-content-end">

                                        </div>
                                    </div>
                                    <Link className="mt-auto" to={entry.link}>
                                        <Button>Go to {entry.linkName}</Button>
                                    </Link>
                                </Card.Body>
                            </Card>

                        ))}
                    </CardGroup>
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6} className="d-flex align-self-stretch">
                    <Card bg="white" text="dark" className="border-2 shadow m-3">
                        <Card.Body>
                            <div className="h4 card-title">What is Patrician IV?!</div>
                            <Card.Text>
                                Patrician IV is a trading/industry simulation game set in the medieval Europe.
                            </Card.Text>
                            <Card.Text style={{ textIndent: "2rem" }}>
                                You play as a low-rank merchant early on. You travel from port to port, selling and buying goods to the cities along the way.
                                As you acquire more and more capital you can invest in building workshops, so you are not dependent on the AI's supply.
                                You can also build ships to grow your merchant fleet.
                            </Card.Text>
                            <Card.Text style={{ textIndent: "2rem" }}>
                                The mid game is about building your own businesses and producing your own goods. Even making housings for your workers.
                            </Card.Text>
                            <Card.Text style={{ textIndent: "2rem" }}>
                                The late game is about complete monopolization of the market, and full vertical integration of all production chains.
                                The focus here is on stabilizing a big complex system with resource sinks, faucets (and storages).
                                Your main enemy at this point is uncontrolled supply or demand and bottlenecks in the throughput.
                                Another enemy is any disturbance in the system, like droughts, diseases and large-scale city fires.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={6} className="d-flex align-self-stretch">
                    <Card bg="white" text="dark" className="border-2 shadow m-3">
                        <Card.Body className="">
                            <div className="h4 card-title">But why make a calculator for an old game?!</div>
                            <Card.Text style={{ textIndent: "2rem" }}>
                                All of this is about state, business rules etc.
                            </Card.Text>
                            <Card.Text className="mt-auto" style={{ textIndent: "2rem" }}>
                                I was simply interested in state normalization.
                                This game has somewhat whacky business rules and user defined variables, so the state and business rules are not entirely trivial.
                                The game calculations involve a lot of global parameteres, product details, and also graph-like relationships due to the production recipes.
                            </Card.Text>
                            <Card.Text className="mt-auto" style={{ textIndent: "2rem" }}>
                                Starting from the complex state presented by the game via the gui, (and staring at the game's ini files)
                                one can start slowly chiseling down those which are derivable from other state variables.
                                If you keep doing this, you can arrive at a smaller state representation.
                            </Card.Text>
                            <Card.Text className="mt-auto" style={{ textIndent: "2rem" }}>
                                That state representation can then be managed in a redux slice.
                                The smaller, hopefully more normalized state basically means easier state management.
                                When you need to derive something from the state, you can use memoized selectors (like reselect from redux toolkit).
                            </Card.Text>
                            <Card.Text className="mt-auto" style={{ textIndent: "2rem" }}>
                                The production chains are bit finicky.
                                But at least it is guaranteed - by the game's business domain itself - that there are no cycles in the graph.
                                I know that the rank based ordering done in this app is really heavy handed, but it works.
                                Also, the game was never really meant to have modifiable recipes, simply the ini files don't restrict you from doing it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default Home;
