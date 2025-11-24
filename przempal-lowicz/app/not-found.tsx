import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Nie znaleziono strony</h2>
            <p className="text-gray-600 mb-8 text-center">
                Przepraszamy, ale strona której szukasz nie istnieje.
            </p>
            <Link
                href="/"
                className="bg-[#b5a397] text-white px-6 py-3 rounded-lg hover:bg-[#a39387] transition-colors"
            >
                Wróć na stronę główną
            </Link>
        </div>
    );
}
