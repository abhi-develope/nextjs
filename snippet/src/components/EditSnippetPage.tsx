"use client";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const EditSnippetPage = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const [title, setTitle] = useState(snippet.title);
  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code, title);

  const onCodeChangeHandler = (value: string = "") => {
    setCode(value);
  };
  const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value); // Extract the value from the event object
  };
  return (
    <div className="max-w-[80%] mx-auto">
      <form action={saveSnippetAction}>
        <div className="flex justify-between items-center">
          <div>
            <label className="text-2xl font-medium">Title:</label>
            <input
              onChange={onTitleChangeHandler}
              type="text"
              name="title"
              value={title}
              className="p-2 m-2"
            />
          </div>
          <Button className="bg-blue-700">Save</Button>
        </div>
        <div>
          <h1 className="p-1 text-lg font-medium">Your code editor:</h1>
          <Editor
            height="90vh"
            theme="vs-dark"
            defaultLanguage="java"
            defaultValue={code}
            onChange={onCodeChangeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default EditSnippetPage;
