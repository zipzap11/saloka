import { Alert } from "@material-ui/lab";
import React from "react";
import LinearLoading from "../LinearLoading";
import Comment from "./Comment";

function CommentList({ error, loading, data }) {
  if (error) {
    return (
      <Alert style={{ marginTop: "1.5rem" }} severity="error">
        {error}
      </Alert>
    );
  }
  if (loading) {
    return <LinearLoading />;
  }
  return (
    <div style={{ marginTop: "1.5rem" }}>
      {data.map((comment, idx) => {
        return <Comment key={idx} data={comment} />;
      })}
    </div>
  );
}

export default CommentList;
