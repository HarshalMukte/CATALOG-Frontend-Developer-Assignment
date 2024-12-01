export default function Header() {
    return (
      <header className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 bg-white shadow-sm">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            $63,179.71 <span className="text-sm font-medium text-gray-500">USD</span>
          </h1>
          <span className="text-green-500 text-xl font-medium">+2,161.42 (3.54%)</span>
        </div>
      </header>
    );
  }
  