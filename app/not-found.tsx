import Link from "next/link";

const NotFound = () => {
    return (
        <div className="my-32 mx-auto max-w-2xl p-4 text-center">
            <h1 className="text-8xl mb-8">404</h1>
            <p className="mb-8 font-semibold">This page could not be found.</p>
            <Link href="/" className="border-2 py-2 px-6 rounded-full border-indigo-600 dark:border-indigo-400 hover:text-indigo-600 hover:dark:text-indigo-400 transition-colors ease-in-out duration-200">Go back home →</Link>
        </div>
    )
}

export default NotFound;