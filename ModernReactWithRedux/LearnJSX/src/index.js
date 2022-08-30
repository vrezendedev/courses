import "./style/App.css";
import { faker } from "@faker-js/faker";
import React from "react";
import ReactDOM from "react-dom/client";
import ApprovalCard from "./ApprovalCard";

import CommentDetail from "./CommentDetail";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App() {
  return (
    <div className="ui container comments" style={{ marginTop: 10 }}>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          posted="Today at 4:50PM"
          avatar={faker.image.avatar()}
          content="Great post, thanks."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          posted="Yesterday at 3:15 AM"
          avatar={faker.image.avatar()}
          content="I really disliked the third part..."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Kip Moore"
          posted="Today at 1:32 PM"
          avatar={faker.image.avatar()}
          content="Please, keep reviewing this kind of stuff!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Johnny"
          posted="Today at 11:52 AM"
          avatar={faker.image.avatar()}
          content="I'll definitely share it!"
        />
      </ApprovalCard>
    </div>
  );
}

root.render(<App />);
