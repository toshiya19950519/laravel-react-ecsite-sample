const Header = () => {
    return (
        <header className="fixed w-full py-6 px-12 border-b border-blue-gray-50 bg-white">
            <div className="flex justify-between">
                <div className="bg-yellow-200">Logo</div>
                <div className="bg-indigo-200">
                    <div className="lg:flex lg:items-center">
                        <a
                        href="#"
                        className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                        >Web developers</a>
                        <a
                        href="/contact"
                        className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                        >お問い合わせ</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header