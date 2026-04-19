import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";


const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created succcessfully");
       setTitle("");
      setContent("");
      navigate('/');

    } catch (error) {
      console.log("unable to create note", error);
      if(error.response.status === 429){
        toast.error(" Oo Maiya Ve rukja!!",{
          duration:4000,
          icon:"💀"
        })
      }else{
      toast.error("Unable to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-350">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 mb-6">
          {/* className="btn btn-ghost hover:bg-blue-400 mb-6"> */}
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100 h-120 ">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4  ">
Start Capturing Thoughts..</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-8 my-8">
                  <label className="label ml-22" >
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered ml-8 "
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>

                <div
                  className="form-control mb-6
                "
                >
                  <label className="label">
                    <span className="label-text ml-22">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32 ml-4"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    // className="btn btn-primary text-white font-medium"
                    className="btn btn-outline text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 mb-6"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
                {/* <h2 className="text-lg md:text-xl text-gray-300 text-center mx-auto  max-w-md leading-relaxed">
  "Write ideas, tasks, or anything you don’t want to forget"
</h2>  */}
{/* <h2 className="text-lg md:text-xl text-gray-300 text-center mx-auto max-w-md">
 " Capture <span className="text-cyan-400">ideas</span>, tasks, and everything worth remembering."
</h2> */}
<h2 className="text-lg md:text-xl text-gray-300 text-center whitespace-nowrap">
  "Capture <span className="text-cyan-400">ideas</span>, tasks, and everything worth remembering "
</h2>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;
