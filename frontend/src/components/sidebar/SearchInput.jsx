import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search name must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      setSearch("");
      toast.error("No user found");
    }
  };

  return (
    <form className="flex items-center gap-2 p-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button type="submit" className="btn btn-circle search">
        <IoSearchSharp className="outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
