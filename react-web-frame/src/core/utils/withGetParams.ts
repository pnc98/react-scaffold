export function withGetParams(parameters: any): string {
  return `?${new URLSearchParams(parameters as any).toString()}`;
};