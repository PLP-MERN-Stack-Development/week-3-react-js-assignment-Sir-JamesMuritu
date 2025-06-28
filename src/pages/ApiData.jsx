import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const PAGE_SIZE = 8;

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // Fetch data
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter and paginate
  useEffect(() => {
    let filtered = posts;
    if (search.trim()) {
      filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    const start = (page - 1) * PAGE_SIZE;
    setDisplayed(filtered.slice(start, start + PAGE_SIZE));
  }, [posts, page, search]);

  const totalPages = Math.ceil(
    (search.trim()
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        ).length
      : posts.length) / PAGE_SIZE
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts (JSONPlaceholder)</h2>
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 border rounded w-full sm:w-64 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      {loading && (
        <div className="text-center text-blue-600 py-8">Loading...</div>
      )}
      {error && (
        <div className="text-center text-red-600 py-8">{error}</div>
      )}
      {!loading && !error && (
        <>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayed.map((post) => (
              <Card key={post.id}>
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
              </Card>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant="secondary"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>
            <span className="px-3 py-2">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="secondary"
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}