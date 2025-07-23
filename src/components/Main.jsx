import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState(["tomato"])
    console.log(ingredients)

    const ingredientsElementsList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredient) => [...prevIngredient, newIngredient])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingedient-form">
                <input 
                type="text" 
                aria-label="Add ingredient"
                placeholder="e.g. oregano"
                name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsElementsList}
            </ul>
        </main>
    )
}