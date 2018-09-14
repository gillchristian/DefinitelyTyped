import { RoutePattern } from "react-router";

export function formatPattern(pattern: RoutePattern, params: any): string;

interface MatchedPattern {
  remainingPathname: string;
  paramNames: Array<string>;
  paramValues: Array<string>;
}

export function matchPattern(pattern: string, pathname: string): MatchedPattern | null;
