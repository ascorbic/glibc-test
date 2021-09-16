import { open } from "lmdb-store";
import os from "os";
import path from "path";
export function handler() {
  const myStore = open({
    path: path.join(os.tmpdir(), "my-db"),
  });
  console.log({ myStore });
  return {
    statusCode: 200,
    body: "hello",
  };
}
