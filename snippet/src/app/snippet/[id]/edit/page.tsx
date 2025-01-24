import EditSnippetPage from "@/components/EditSnippetPage";
import { prisma } from "@/lib/prisma";
import React from "react";

const editSnippetPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if(!snippet) return <h1>Snippet not found</h1>
  return (
    <div>
      <EditSnippetPage snippet={snippet} />
    </div>
  );
};

export default editSnippetPage;
