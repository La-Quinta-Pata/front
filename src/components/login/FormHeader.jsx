export default function FormHeader({ title }) {
    return (
        <header className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
                {title}
            </h3>
        </header>
    );
}