import { useCallback, useMemo } from "react";
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
>({
  key,
  validation,
  defaultValue,
}: UseSafeSearchParams<Schema>): UseSafeSearchResult<Schema> {
  const [searchParams, setSearchParams] = useSearchParams();
  const set = useCallback(
    (input: InferOutput<Schema>) => {
      setSearchParams((prev) => {
        if (input === null) prev.delete(key);
        else prev.set(key, JSON.stringify(input));
        return prev;
      });
    },
    [key, setSearchParams],
  );
  const value = useMemo(() => {
    const res = safeParse(
      validation,
      JSON.parse(searchParams.get(key) as string),
    );
    return res.success ? res.output : defaultValue;
  }, [defaultValue, key, validation, searchParams]);
  return [value, set];
}
