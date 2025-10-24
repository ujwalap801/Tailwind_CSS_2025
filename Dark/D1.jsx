import { useEffect, useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState("light");

  useEffect(() => {
    if (isDark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-slate-900 dark:text-red-500 transition-colors duration-300">
      <h1 className="text-5xl font-bold mb-4">Dark Mode Toggle</h1>
      <p className="text-lg mb-8">Click the button to switch modes manually!</p>

      <div className="flex items-center border border-slate-500 rounded-lg p-4">
        <div className="bg-blue-500 dark:bg-yellow-500 w-20 h-20 rounded mr-3 border border-slate-500 shadow-lg flex items-center justify-center text-white dark:text-black font-bold">
          Box
        </div>
        <p>Box that adapts to dark mode</p>
      </div>

      <div className="mt-6">
        <select
          value={isDark}
          onChange={(e) => setIsDark(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </div>
  );
}
