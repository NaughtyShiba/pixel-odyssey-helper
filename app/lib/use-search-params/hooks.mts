import { useSearchParams } from "react-router-dom";
import {
  BaseSchema,
  InferOutput,
  InferInput,
  safeParse,
  BaseIssue,
} from "valibot";

interface UseSafeSearchParams<
  Schema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
> {
  key: string;
  validation: Schema;
  defaultValue: InferOutput<Schema>;
}
type UseSafeSearchResult<
  Schema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
> = [InferOutput<Schema>, (input: InferInput<Schema>) => void];
export function useSafeSearchParams<
  Schema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
>(props: UseSafeSearchParams<Schema>): UseSafeSearchResult<Schema> {
  const [searchParams, setSearchParams] = useSearchParams();
  const set = (input: InferOutput<Schema>) => {
    setSearchParams((prev) => {
      if (input === null) prev.delete(props.key);
      else prev.set(props.key, JSON.stringify(input));
      return prev;
    });
  };
  const res = safeParse(
    props.validation,
    JSON.parse(searchParams.get(props.key) as string),
  );
  const value = res.success ? res.output : props.defaultValue;
  return [value, set];
}
