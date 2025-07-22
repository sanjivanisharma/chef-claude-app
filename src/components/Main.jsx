export default function Main() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingedient-form">
                <input 
                type="text" 
                aria-label="Add ingredient"
                placeholder="e.g. oregano"
                name="ingedient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}