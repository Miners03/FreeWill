import React, { useEffect } from "react";
import { PenSquareIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
 
 
  const handleDelete = async (e, id) => {
    e.preventDefault(); // taki ye ab hme create page p na lejaye

    if (!window.confirm(" ARE YOU SURE YOU WANT TO DELETE THIS NOTE?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note)=> note._id !== id)); //get deleted one from the  array.
      toast.success("Note Deleted succcessfully");
    } catch (error) {
      console.log("unable to delete note", error);
      if (error.response.status === 429) {
        toast.error(" Oo Maiya Ve rukja!!", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Unable to delete note");
      }
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;
