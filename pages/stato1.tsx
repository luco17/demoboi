import React, { useState } from "react";

interface Error {
  name: string;
  message: string;
}

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<null | Error>(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return (
      <h1 className="text-xl font-bold text-emerald-600">That's right!</h1>
    );
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      if (err instanceof Error) {
        setError(err);
      }
      console.log("Unexpected error: ", err);
    }
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }

  return (
    <div className="m-12">
      <h2 className="text-lg font-semibold">City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          className="border-2 border-gray-400 rounded"
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button
          className="rounded-sm shadow bg-gray-400 px-2 py-1"
          disabled={answer.length === 0 || status === "submitting"}
        >
          Submit
        </button>
        {error !== null && (
          <p className="text-red-500 font-medium">{error?.message}</p>
        )}
      </form>
    </div>
  );
}

function submitForm(answer: string) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
