import { useState, useEffect, useRef } from "react"

import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    function addIngredients(formData) {
        if (formData.get("ingredient") !== "") {
            const newIngredient = formData.get("ingredient")
            setIngredients((prevIngredient) => [...prevIngredient, newIngredient])
        }
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    return (
        <main>
            <form action={addIngredients} className="add-ingedient-form">
                <input
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}