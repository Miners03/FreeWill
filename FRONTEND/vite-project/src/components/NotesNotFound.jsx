import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
    
      <h3 className="text-3xl font-semibold text-gray-400">No notes yet..</h3>

      <p className="text-gray-200 text-lg mt-2 leading-relaxed">
        Every great idea starts with a note.
        <br />
        <span className="text-gray-200 font-semibold">
          Start your journey of organizing thoughts from here .
        </span>
      </p>

      <Link
        to="/create"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-4xl font-medium shadow-md transition-all"
      >
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;

