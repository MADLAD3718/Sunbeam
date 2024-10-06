import { jobPromise } from "@bedrock-oss/bedrock-boost";

export function repeatGenerator(source: () => Generator<undefined, void, unknown>) {
    jobPromise(source()).then(() => repeatGenerator(source));
}
