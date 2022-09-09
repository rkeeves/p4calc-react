import * as React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RecipeDAG } from '../../components';
import { Products } from '../../model';
import * as Store from '../../store'

const RecipesView: React.FC = () => {

    const recipeRootNode = useSelector(Store.selectRecipeRootNode)
    return (
        <Container>
            <Row key="ingredient" className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Card bg="white" text="dark" className="border-2 shadow m-3">
                        <Card.Body>
                            <Card.Title>Recipes</Card.Title>
                            <Card.Text className="ps-4 mt-1" style={{ textIndent: "2rem" }}>
                                <strong>See below</strong> the tree? <strong>Click</strong> to open non leafs. <strong>Scroll</strong> to zoom. <strong>Drag</strong> to pan around.
                            </Card.Text>
                            <Card.Text className="ps-4" style={{ textIndent: "2rem" }}>
                                In the game for each product has its own recipe. Some require no inputs, while others require multiple kinds of inputs.
                                A recipe can be like <span className="text-muted fw-bold fst-italic">X Clothing requires Y Fabric</span>,
                                but then <span className="text-muted fw-bold fst-italic">Y Fabric requires Z Wool</span>, so it can become a bit complex with transitive closures.
                                These recipes can be transformed into a tree.
                                Below you'll find a tree which is generated dynamically based on the user defined recipes (by default it uses recipes from the game's default settings).
                                I think - by default settings - <span className="text-muted fw-bold fst-italic">{Products.info(Products.PEL).displayName}</span> has the most complex recipe.
                            </Card.Text>
                            <div className="border rounded my-3" style={{ height: "400px" }}>
                                <RecipeDAG root={recipeRootNode} />
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>);
}

export default RecipesView;
