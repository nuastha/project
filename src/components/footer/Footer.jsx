export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 text-center border-t border-gray-700 space-y-1">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Purna Bahadur Shrestha. All rights
          reserved.
        </p>
        <p className="text-xs text-gray-400">
          Built with ❤️ using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
