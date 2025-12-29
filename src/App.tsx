import { useState } from "react";
import "./App.css";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/profile/UserProfile";

function App() {
  const [user, setUser] = useState("antfu");
  return (
    <main className="flex flex-col gap-8 w-full max-w-6xl mx-auto py-6 px-4">
      <SearchForm user={user} setUser={setUser} />
      <UserProfile user={user} />
    </main>
  );
}

export default App;
