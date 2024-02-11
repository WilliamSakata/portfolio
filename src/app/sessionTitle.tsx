import React from "react";

interface SessionTitleProps {
  title: string;
}

function SessionTitle({ title }: SessionTitleProps) {
  return (
    <h3 className="text-3xl py-1 font-bold tracking-wider text-gray-600">
      {title}
    </h3>
  );
}

export default SessionTitle;
