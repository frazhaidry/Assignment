import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";

const Fact = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://catfact.ninja/fact");
      setFact(res.data.fact);
    } catch (error) {
      console.error("Error fetching fact:", error);
      setFact("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Did You Know?</h1>
        <p className="text-gray-600 mb-6">Click the button below to get a random cat fact!</p>
        <button
          onClick={fetchFact}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-indigo-700 transition-all duration-200"
        >
          Show New Fact
        </button>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg max-w-xl w-full px-8 py-6 border border-indigo-100 transition-all duration-300 hover:shadow-xl">
  <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    Random Cat Fact
  </h2>

  {loading ? (
    <Loading />
  ) : (
    <p className="text-gray-800 text-lg leading-relaxed italic">
      “{fact}”
    </p>
  )}
</div>

    </div>
  );
};

export default Fact;
