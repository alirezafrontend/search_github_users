import { useState, type FormEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

type SearchInput = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({ user, setUser }: SearchInput) {
  const [searchText, setSearchText] = useState(user);

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");

    if (!searchText.trim()) {
      toast.warning("Please enter a valid username");
      return;
    }

    setUser(searchText);
    toast.success("submited successfuly", {
      description: "fsfs",
      action: {
        label: "close",
        onClick: () => console.log("close"),
      },
    });
  };

  return (
    <form onSubmit={handleForm} className="flex gap-2 w-full md:w-9/12 lg:w-7/12 xl:w-6/12">
      <Input
        className="w-9/12"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder="search user github"
        type="search"
      />
      <Button className="w-3/12" type="submit">Search</Button>
    </form>
  );
}
