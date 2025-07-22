import chefLogo from '/src/assets/chefClaude.png'

export default function Header() {
    return (
        <header className='header'>
            <img src={chefLogo} alt='Chef Logo' />
            <span>Chef Claude</span>
        </header>
    )
}