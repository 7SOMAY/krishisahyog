// const navButtons = (props) => {
//     return <div className={'flex hover:text-gray-400 duration-200 cursor-pointer'}>{props.title}</div>
// }

const Navbar = (props) => {
    return (
        <div className={'w-screen flex text-lg font-semibold bg-primary justify-between py-4 px-12 text-textPrimary'}>
            <div className={'logo'}>LOGO</div>
            <div className={'flex gap-5'}>
                <div className={'flex hover:opacity-70 duration-200 cursor-pointer'}>Home</div>
                <div className={'flex hover:opacity-70 duration-200 cursor-pointer'}>About</div>
                <div className={'flex hover:opacity-70 duration-200 cursor-pointer'}>Contact Us</div>
            </div>
        </div>
    )
}

export default Navbar