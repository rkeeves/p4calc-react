import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Products } from '../../model';
import * as Store from '../../store'
import RecipeField from './RecipeField';


const findRecipeAndInfo = (recipes: Products.RecipeTotal, id: Products.Id) => ({ recipe: recipes[id], info: Products.info(id) })


const RecipeForm: React.FC = () => {
    const { id } = useParams();

    const validId = Products.asValidIdOrElse(id, Products.WOD)

    const [showToast, changeShowToast] = useState(false);

    const recipes = useSelector(Store.selectRecipes)

    const { recipe, info } = findRecipeAndInfo(recipes, validId);

    const dispatch = useDispatch()

    const handleSubmit = (newRecipe: Products.Recipe) => {
        dispatch(Store.economySlice.actions.changeOneRecipe({ id: validId, recipe: newRecipe }))
        changeShowToast(true)
    }

    const selfRank = Products.rankOf(validId)

    const formik = useFormik({
        initialValues: recipe,
        validationSchema: Products.schemaForOneRecipeOf(validId),
        onSubmit: (values) => {
            handleSubmit(values)
        }
    })

    const formikDataOf = (id: Products.Id) => ({ formikMeta: formik.getFieldMeta(id), formikProps: formik.getFieldProps(id) });

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <h5 className="p-2">{info.displayName} Recipe</h5>
            <Row className="my-3">
                <Col>
                    <div style={{ textIndent: "2rem" }}>
                        Here you can set how much of each primary ingredient is needed to produce one barrel of this good.
                        The app will automatically deal with transitivity under the hood.
                    </div>
                    <div style={{ textIndent: "2rem" }} className="text-muted">
                        The recipes cannot contain cycles.
                        An easy example: a product cannot require itself.
                        The exclusion of other products is based on the arbitrary ranking found in the game's ini files.
                        A product can only have ingredients which appear before it in the game's arbitrary ranking.
                    </div>
                    <div style={{ textIndent: "2rem" }} className="text-muted">
                        <strong>Due to this, some ingredients are disabled. </strong>
                        For example: <strong>Wood</strong> cannot have any ingredients, while <strong>Wine</strong> can have all other products as ingredient.
                    </div>
                </Col>
            </Row>
            {Products.createVector((id) => (
                <RecipeField
                    key={id}
                    ingredientId={id}
                    disabled={Products.rankOf(id) >= selfRank}
                    labelText={Products.info(id).displayName}
                    tooltipText={`Amount of ${Products.info(id).displayName} as primary ingredient`}
                    formikDataOf={formikDataOf} />
            ))}
            <Row>
                <Col className="d-flex justify-content-center">
                    <ToastContainer>
                        <Toast show={showToast} onClose={() => changeShowToast(false)} >
                            <Toast.Header>
                                <strong className="me-auto">Saved Successfully!</strong>
                            </Toast.Header>
                            <Toast.Body>Your changes were saved</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button type="submit" variant="primary">Save Changes</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default RecipeForm;
